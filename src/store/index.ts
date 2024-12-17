import { configureStore } from '@reduxjs/toolkit'
import restaurantsReducer from './reducers/restaurants'
import cartsReducer from './reducers/cart'

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    carts: cartsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
