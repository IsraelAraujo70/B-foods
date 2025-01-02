import { configureStore } from '@reduxjs/toolkit'
import restaurantsReducer from './reducers/restaurants'
import cartsReducer from './reducers/cart'
import api from '../services/api'

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    carts: cartsReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
