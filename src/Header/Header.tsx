import { useEffect, useState, type FC } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getCity, getDate, getForeCastIconId, getForeCastIconUrl } from '../redux/selectors/foreCasteSelects'
import type { DateTime } from '../utils/UNIXConverter';
import Preloader from '../Preloader';

const HeaderS = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #071424;
    align-items: center;
    padding: 1.5rem 2rem;
    
    @media (max-width: 768px) {
        padding: 1rem 1.5rem;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    @media (max-width: 480px) {
        padding: 0.8rem 1rem;
        gap: 0.8rem;
    }
`;

const City = styled.h1`
    color: #fff;
    font-size: 2rem;
    margin: 0;
    
    @media (max-width: 1024px) {
        font-size: 1.8rem;
    }
    
    @media (max-width: 768px) {
        font-size: 1.6rem;
        order: 1;
    }
    
    @media (max-width: 480px) {
        font-size: 1.4rem;
    }
`;

const Icon = styled.img`
    width: 5rem;
    height: 5rem;
    
    @media (max-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;
    }
    
    @media (max-width: 768px) {
        width: 4rem;
        height: 4rem;
        order: 2;
    }
    
    @media (max-width: 480px) {
        width: 3.5rem;
        height: 3.5rem;
    }
`;

const DateNowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
        order: 3;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
    }
    
    @media (max-width: 480px) {
        flex-direction: column;
        gap: 0.3rem;
    }
`;

const Datenow = styled.h3`
    color: #fff;
    font-size: 1.5rem;
    opacity: 0.8;
    font-weight: 400;
    margin: 0;
    
    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }
    
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.1rem;
    }
`;

const Timenow = styled.h2`
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    
    @media (max-width: 1024px) {
        font-size: 1.8rem;
    }
    
    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.4rem;
    }
`;

interface HeaderPropsType {
}
const Header: FC<HeaderPropsType> = () => {
    const [currentTime, setCurrentTime] = useState<Date | null>(null)

    const city = useSelector(getCity)
    const foreCastIconUrl: string = useSelector(getForeCastIconUrl)
    const foreCastIconId: string = useSelector(getForeCastIconId)
    const iconUrl = foreCastIconUrl + foreCastIconId + '@2x.png'
    const dateTime: DateTime = useSelector(getDate)

    useEffect(() => {
        const clientTime = new Date()
    })
    return (
        <HeaderS>
            <City>{city}</City>
            <Icon src={iconUrl} />

            {
                (dateTime.date.day) ?
                    <DateNowContainer>
                        <Timenow>
                            {dateTime.time.hour + ':' + dateTime.time.minute}
                        </Timenow>
                        <Datenow>
                            {dateTime.date.day + '.' + dateTime.date.month + '.' + dateTime.date.year}
                        </Datenow>
                    </DateNowContainer> :
                    <Preloader />
            }

        </HeaderS>
    )
}

export default Header