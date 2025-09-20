import { useSelector } from "react-redux"
import { getForecast, getForeCastIconId, getForeCastIconUrl } from "../redux/selectors/foreCasteSelects"
import type { ForecastType } from "../redux/foreCastReducer"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0px);
  }
`

const ForecastStyled = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  padding: 2rem;
  animation: gradientShift 15s ease infinite;

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`

const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  padding: 3rem 2.5rem;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 350px;
  width: 100%;
`

const Icon = styled.img`
  width: 11rem;
  height: 11rem;
  animation: ${float} 4s ease-in-out infinite;
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.25));
  margin-bottom: 1rem;
`

const ForecastCurrent = styled.p`
  color: white;
  font-size: 3.5rem;
  font-weight: 300;
  margin: 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  background: linear-gradient(45deg, #fff, #e6e6e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
`

const Description = styled.h2`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  margin: 0.5rem 0 0 0;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  text-transform: capitalize;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const Forecast = () => {
    const foreCastIconUrl:string = useSelector(getForeCastIconUrl)
    const foreCastIconId:string = useSelector(getForeCastIconId)
    const iconUrl:string = foreCastIconUrl + foreCastIconId + '@2x.png'
    const forecast:ForecastType = useSelector(getForecast)
    
    return (
        <ForecastStyled>
            <ForecastContainer>
                <Icon src={iconUrl}/>
                <ForecastCurrent>{forecast.currentForecast}</ForecastCurrent>
                <Description>{forecast.description}</Description>
            </ForecastContainer>
        </ForecastStyled>
    )
}

export default Forecast