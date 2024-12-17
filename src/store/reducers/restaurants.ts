import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Restaurant } from '../../models/Restaurant'

const API_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}/api`
  : 'http://localhost:3000/api'

interface RestaurantState {
  items: Restaurant[]
  loading: boolean
  error: string | null
}

export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async () => {
    const response = await fetch(`${API_URL}/restaurants`)
    if (!response.ok) {
      throw new Error('Failed to fetch restaurants')
    }
    return response.json()
  }
)

export const fetchRestaurantById = createAsyncThunk(
  'restaurants/fetchRestaurantById',
  async (id: number) => {
    const response = await fetch(`${API_URL}/restaurants/${id}`)
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
      .addCase(fetchRestaurantById.fulfilled, (state, action) => {
        const index = state.items.findIndex((r) => r.id === action.payload.id)
        if (index !== -1) {
          state.items[index] = action.payload
        } else {
          state.items.push(action.payload)
        }
      })
  }
})

export default restaurantSlice.reducer
