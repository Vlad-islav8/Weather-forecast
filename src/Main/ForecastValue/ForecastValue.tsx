import { useSelector } from "react-redux"
import styled from "styled-components"
import { getForecast } from "../../redux/selectors/foreCasteSelects"


const ForecastValueStyled = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #eaeaea;
  max-width: 400px;
  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px 0;
    border-radius: 12px;
  }
`

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid #f1f5f9;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

const MetricCard = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
    transform: translateX(4px);
  }
  
  &:nth-child(2) {
    border-left-color: #10b981;
  }
  
  &:nth-child(3) {
    border-left-color: #6366f1;
  }
  
  &:nth-child(4) {
    border-left-color: #f59e0b;
  }
  
  &:nth-child(5) {
    border-left-color: #8b5cf6;
  }
  
  &:nth-child(6) {
    border-left-color: #ec4899;
  }
`

const MetricIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: white;
  font-weight: 600;
  
  ${MetricCard}:nth-child(2) & {
    background: linear-gradient(135deg, #10b981, #059669);
  }
  
  ${MetricCard}:nth-child(3) & {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
  }
  
  ${MetricCard}:nth-child(4) & {
    background: linear-gradient(135deg, #f59e0b, #d97706);
  }
  
  ${MetricCard}:nth-child(5) & {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  }
  
  ${MetricCard}:nth-child(6) & {
    background: linear-gradient(135deg, #ec4899, #db2777);
  }
`

const MetricContent = styled.div`
  flex: 1;
`

const MetricLabel = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const MetricValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ForecastValue = () => {
    const forecast = useSelector(getForecast)
    const weatherMetrics = [
        { label: "Скорость ветра", value: forecast.WindSpeed + 'м/c' , icon: "💨" },
        { label: "Атмосферное давление", value: forecast.AtmosphericPressure + 'мм рт. ст', icon: "📊" },
        { label: "Влажность", value: forecast.Humidity + '%', icon: "💧" },
        { label: "Видимость", value: forecast.AverageVisibility + 'метров', icon: "👁️" },
        { label: "Облачность", value: forecast.CloudCover + '%', icon: "☁️" },
    ]
    
    return (
        <ForecastValueStyled>
            <SectionTitle>Метеопараметры</SectionTitle>
            <MetricsGrid>
                {weatherMetrics.map((metric, index) => (
                    <MetricCard key={index}>
                        <MetricIcon>{metric.icon}</MetricIcon>
                        <MetricContent>
                            <MetricLabel>{metric.label}</MetricLabel>
                            <MetricValue>{metric.value}</MetricValue>
                        </MetricContent>
                    </MetricCard>
                ))}
            </MetricsGrid>
        </ForecastValueStyled>
    )
}

export default ForecastValue