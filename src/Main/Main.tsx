import styled from 'styled-components'
import SelectCity from './SelectCity/SelectCity'
import { useSelector } from 'react-redux'
import ForecastValue from './ForecastValue/ForecastValue'
import { getCurrentBgUrl } from '../redux/selectors/foreCasteSelects'
import Forecast from './Forecast'

const ForeCastContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem;

`
const ForecastValueContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;

     @media(max-width:768px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
`
const Main = () => {
    const bgUrl = useSelector(getCurrentBgUrl)
    const MainS = styled.main`
    background-image: url(${bgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    `
    return (
        <MainS>
            <ForeCastContainer>
                <SelectCity />
                <ForecastValueContainer>
                    <ForecastValue />
                    <Forecast />
                </ForecastValueContainer>
            </ForeCastContainer>

        </MainS>
    )
}

export default Main