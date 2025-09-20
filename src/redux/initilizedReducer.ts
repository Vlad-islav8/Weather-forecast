import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { setCurrentForecastCreator } from "./foreCastReducer";
import type { AppDispatchType } from "./store";


interface initiazedAppActionType {
    userCoordinates: PositionType
    hour: number
}

interface InitilizedStateType {
    currentLocation: PositionType
    initialazed: boolean
    positionErrors: string | null
    currentHour: number | null
}

const initialState: InitilizedStateType = {
    currentLocation: { lat: undefined, lan: undefined },
    initialazed: false,
    positionErrors: null,
    currentHour: null,
}

export interface PositionType {
    lat: number | undefined
    lan: number | undefined
}

const initilizedReducer = createSlice({
    name: 'initilizedReducer',
    initialState,
    reducers: {
        initiazedApp(state: InitilizedStateType, action: PayloadAction<initiazedAppActionType>) {
            state.currentLocation = action.payload.userCoordinates
            state.currentHour = action.payload.hour
            state.initialazed = true
        },
        setPositionError(state: InitilizedStateType, action: PayloadAction<string>) {
            state.positionErrors = action.payload
        }
    }
})

export const initiazedAppCreator = () => {
    return async (dispatch: AppDispatchType) => {
        try {
            const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            const crd = position.coords;
            const userCoordinates:PositionType = { 
                lat: crd.latitude, 
                lan: crd.longitude 
            };
            
            const hour = new Date().getHours();
            await dispatch(setCurrentForecastCreator(userCoordinates));
            dispatch(initiazedApp({ 
                userCoordinates, 
                hour 
            }));
            
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Не получилось узнать где ты';
            dispatch(initilizedReducer.actions.setPositionError(errorMessage));
        }
    }
}

export default initilizedReducer.reducer
export const { initiazedApp, } = initilizedReducer.actions
