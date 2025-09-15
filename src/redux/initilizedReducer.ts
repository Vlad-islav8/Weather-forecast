import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {  type PositionType, type usePositionType } from "../customHooks/usePosition";

interface InitilizedStateType {
    currentLocation:PositionType 
    initialazed: boolean
    positionErrors: string | null
}

const initialState:InitilizedStateType = {
    currentLocation: {lat: undefined, lan: undefined},
    initialazed: false,
    positionErrors: null
}

const initilizedReducer = createSlice({
    name: 'initilizedReducer',
    initialState,
    reducers: {
        initiazedApp(state:InitilizedStateType, action:PayloadAction<usePositionType>) {
            const {position, error} = action.payload
            if(error) {
                state.currentLocation = position
                state.positionErrors = error

            }
            state.currentLocation = position
            state.initialazed = true
        },
    }
})
export default initilizedReducer.reducer
export const { initiazedApp } = initilizedReducer.actions
