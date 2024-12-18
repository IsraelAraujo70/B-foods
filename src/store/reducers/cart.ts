import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../models/Cardapio'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      state.items = [...state.items, action.payload]
    },
    remove: (state, action: PayloadAction<Cardapio>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (index !== -1) {
        state.items.splice(index, 1)
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, clear, remove } = cartSlice.actions
export default cartSlice.reducer
