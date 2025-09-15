import { createSlice, } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"
import type { AppDispatchType } from "./store";
import { geocodingAPI, getCurrentForecastAPI } from "../api/api";
import type { PositionType } from "../customHooks/usePosition";

interface foreCastReducerState {
    currentForecast: number | null,
    currentCity:string| null,
    foreCastIconUrl:string,
    foreCastIconId:string 
}

const initialState:foreCastReducerState = {
    currentForecast: null,
    currentCity:null,
    foreCastIconUrl: "https://openweathermap.org/img/wn/",
    foreCastIconId: ''
}

const foreCastReducer = createSlice({
    name: 'foreCastReducer',
    initialState,
    reducers: {
        setCity(state:foreCastReducerState, action:PayloadAction<string>) {
            state.currentCity = action.payload
        },
        setForecast(state:foreCastReducerState, action:PayloadAction<number>) {
            state.currentForecast = action.payload
        },
        setForecastIconId(state:foreCastReducerState, action:PayloadAction<string>) {
            state.foreCastIconId = action.payload
        },
    }
})

export const {setCity, setForecast, setForecastIconId} = foreCastReducer.actions

export default foreCastReducer.reducer


// export const setCurrentCityCreator = (currentCity:string) => {
//     return async (dispatch:AppDispatchType) => {
//         const locationCity  = await geocodingAPI.getCoordinatesCity(currentCity)
//         dispatch(setCity(currentCity))
//     }
// }

export const setCurrentForecastCreator = (position:PositionType) => {
    return async (dispatch:AppDispatchType) => {
        const {lat, lan} = position
        if(lat && lan) {
            const forecast = await getCurrentForecastAPI.getForecast(lat, lan)
            if(forecast) {
                debugger
                dispatch(setForecast(forecast.main.temp))
                dispatch(setCity(forecast.name))
                dispatch(setForecastIconId(forecast.weather[0].icon))
            }
        }
    }
}