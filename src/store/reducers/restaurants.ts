import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Restaurant } from '../../models/Restaurant'

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://b-foods.vercel.app'
const API_URL = `${BASE_URL}/api`
const API_BASE_URL = 'https://b-foods.vercel.app/api/restaurants'

interface RestaurantState {
  items: Restaurant[]
  loading: boolean
  error: string | null
}

export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async () => {
    const response = await fetch(`${API_URL}/`)
    if (!response.ok) {
      throw new Error(`Failed to fetch restaurants: ${response.statusText}`)
    }
    return await response.json()
  }
)

export const fetchRestaurantById = createAsyncThunk(
  'restaurants/fetchById',
  async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch restaurant')
    }
    return response.json()
  }
)

const initialState: RestaurantState = {
  items: [],
  loading: false,
  error: null
}

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Erro ao carregar restaurantes'
      })
      .addCase(fetchRestaurantById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRestaurantById.fulfilled, (state, action) => {
        state.loading = false
        const index = state.items.findIndex((r) => r.id === action.payload.id)
        if (index !== -1) {
          state.items[index] = action.payload
        } else {
          state.items.push(action.payload)
        }
      })
      .addCase(fetchRestaurantById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Erro ao carregar restaurante'
      })
  }
})

export default restaurantSlice.reducer
