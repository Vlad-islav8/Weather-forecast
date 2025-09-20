import type { usePositionType } from "../customHooks/usePosition";
import { useAppDispatch } from "../redux/store";


const lastInitialization = async (crd: usePositionType, setCurrentForecastCreator: any, initiazedApp: any) => {
    const dispatch = useAppDispatch()

    dispatch(setCurrentForecastCreator(crd.position))
    
    dispatch(initiazedApp({ crd, hour }))
    dispatch(setItin(true))
}