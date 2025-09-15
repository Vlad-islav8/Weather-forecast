import type { FC } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getCity, getForeCastIconId, getForeCastIconUrl } from '../redux/selectors/foreCasteSelects'

const HeaderS = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #071424;
    align-items: center;
    padding: 2rem;
`
const City = styled.h1`
    color:#fff;
    font-size: 2rem;
`
const Icon = styled.img`
    width: 5rem;
    height: 5rem;
`
const DateNowContainer = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Datenow = styled.h3`
    color:#fff;
    font-size: 1.5rem;
    opacity: 0.8;
    font-weight: 400;
`
const Timenow = styled.h2`
    color:#fff;
    font-size: 2rem;
    font-weight: 500;

`

interface HeaderPropsType {
}
const Header: FC<HeaderPropsType> = () => {
    const city = useSelector(getCity)
    const foreCastIconUrl: string = useSelector(getForeCastIconUrl)
    const foreCastIconId: string = useSelector(getForeCastIconId)
    const iconUrl = foreCastIconUrl + foreCastIconId + '@2x.png'
    const day = new Date().getDate()
    const mouth = new Date().getMonth()
    const years = new Date().getFullYear()
    const hour = new Date().getHours()
    const minutes = new Date().getMinutes()
    debugger
    return (
        <HeaderS>
            <City>{city}</City>
            <Icon src={iconUrl} />
            <DateNowContainer>
                <Timenow>
                    {hour + ':' + minutes}
                </Timenow>
                <Datenow>
                    {day + '.' + mouth + '.' + years}
                </Datenow>
            </DateNowContainer>
        </HeaderS>
    )
}

export default Header