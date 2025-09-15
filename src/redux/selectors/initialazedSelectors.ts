import type { PositionType } from "../../customHooks/usePosition"
import type { RootState } from "../store"

type getinitialazedAppType = (state:RootState) => boolean
type getCurrentPositionType = (state:RootState) => PositionType 

export const getinitialazedApp:getinitialazedAppType = (state:RootState) => {
    return state.initilized.initialazed 
}

export const getCurrentPosition:getCurrentPositionType = (state:RootState) => {
    return state.initilized.currentLocation
}


