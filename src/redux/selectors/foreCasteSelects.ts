import type { RootState } from "../store"

export const getCity = (state:RootState) => {
    return state.foreсast.currentCity
}

export const getForeCastIconUrl = (state:RootState) => {
    return state.foreсast.foreCastIconUrl
}

export const getForeCastIconId = (state:RootState) => {
    return state.foreсast.foreCastIconId
}


export const getForecast = (state:RootState) => {
    return state.foreсast.foreCast
}

export const getDate = (state:RootState) => {
    return state.foreсast.DT
}

export const getCurrentBgUrl = (state:RootState) => {
    return state.foreсast.bgUrl
}