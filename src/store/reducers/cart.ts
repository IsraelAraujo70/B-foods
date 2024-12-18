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
      console.log('Previous state:', state.items)
      console.log('Adding item:', action.payload)

      state.items = [...state.items, action.payload]

      console.log('Updated state:', state.items)
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

export const { add, open, close, clear } = cartSlice.actions
export default cartSlice.reducer
