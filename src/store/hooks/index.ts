import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import store from '../index'
import { RootState } from '../index'

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
