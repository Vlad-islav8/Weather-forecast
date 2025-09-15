import { combineReducers, configureStore } from "@reduxjs/toolkit"
import initilizedReducer from './initilizedReducer'
import foreCastReducer from './foreCastReducer'
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
    initilized: initilizedReducer,
    foreсast: foreCastReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatchType>();