import styled from 'styled-components'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import {getCurrentPosition, getinitialazedApp } from './redux/selectors/initialazedSelectors'
import { useSelector } from 'react-redux'
import Loader from './Loader/Loader'
import { useEffect, type FC } from 'react'
import { useAppDispatch } from './redux/store'
import { initiazedAppCreator, type PositionType, } from './redux/initilizedReducer'
import type { DateTime } from './utils/UNIXConverter'
import { getCurrentBgUrl, getDate } from './redux/selectors/foreCasteSelects'

export const AppContainer = () => {
  const initialazed: boolean = useSelector(getinitialazedApp)
  const crd:PositionType = useSelector(getCurrentPosition)
  const dateTime: DateTime = useSelector(getDate)
  const hour: number | null = dateTime.time.hour
  const bgUrl = useSelector(getCurrentBgUrl)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(initiazedAppCreator())
  }, [])
  
  return <App
    initialazed={initialazed}
    crd={crd}
    dateTime={dateTime}
    hour={hour}
    bgUrl={bgUrl}
  />
}

interface AppPropsType {
  initialazed: boolean
  crd: PositionType
  dateTime: DateTime
  hour: number
  bgUrl: string
}


const App: FC<AppPropsType> = ({ initialazed, crd, dateTime, hour, bgUrl }) => {
  const AppStyle = styled.div`
  background-image: url(${bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  border: 0 2px 0 2px solid black;
`
  const Container = styled.div`
  max-width: 85%;
  margin: 0 auto;
  background-color: green;

`
  return (
    <>
      {
        initialazed ?
          <AppStyle>
            <Container>
              <Header />
              <Main />
              <Footer />
            </Container>
          </AppStyle> :
          <Loader />
      }
    </>
  )
}

export default App
