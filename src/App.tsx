import styled from 'styled-components'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { getCurrentPosition, getinitialazedApp } from './redux/selectors/initialazedSelectors'
import { useSelector } from 'react-redux'
import Loader from './Loader/Loader'
import { useEffect } from 'react'
import { usePosition, type PositionType, type usePositionType } from './customHooks/usePosition'
import { setCurrentForecastCreator } from './redux/foreCastReducer'
import { useAppDispatch } from './redux/store'
import { initiazedApp } from './redux/initilizedReducer'

const AppStyle = styled.div`
  background-color: red;
`

const Container = styled.div`
  max-width: 85%;
  margin: 0 auto;
  background-color: green;

`
const App = () => {
  const dispatch = useAppDispatch()
  const initialazed:boolean = useSelector(getinitialazedApp)
  const crd:usePositionType = usePosition()

  useEffect(() => {
    dispatch(setCurrentForecastCreator(crd.position))
    dispatch(initiazedApp(crd))
  }, [crd])

  return (
    <>
      {
        initialazed ?
          <AppStyle>
            <Container>
              <Header/>
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
