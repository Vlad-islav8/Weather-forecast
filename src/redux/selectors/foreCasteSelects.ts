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

