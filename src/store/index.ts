import { configureStore } from '@reduxjs/toolkit'
import restaurantsReducer from './reducers/restaurants'

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
