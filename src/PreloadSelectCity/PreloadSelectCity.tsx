import { useState, type FC } from "react"
import styled from "styled-components"

const PreloadSelectCityStyled = styled.div``

interface PreloadSelectCityPropstype {
    hyandleCitySubmit: any
    currentCity: string
    confirmation:boolean
} 

const PreloadSelectCity:FC<PreloadSelectCityPropstype> = ({hyandleCitySubmit, currentCity, confirmation}) => {
    const [currentCityLocal, setCurrentCityLocal] = useState<string>(currentCity)

    const onSubmit = (request:boolean) {

    }

    const handleSelectYes = () => {
        confirmation(true)
    }
    const handleSelectYes = () => {
        confirmation(false)
    }
    
    return (
        <PreloadSelectCityStyled>
            
        </PreloadSelectCityStyled>
    )
}