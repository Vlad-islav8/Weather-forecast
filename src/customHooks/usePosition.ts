import { useState, useEffect } from 'react';

 

export interface usePositionType {
    position: PositionType
    error: string | null
}

export type usePositionFunctionType = () => usePositionType


export const usePosition: usePositionFunctionType = () => {

    const [position, setPosition] = useState<PositionType>({ lat: undefined, lan: undefined });
    const [error, setError] = useState<string | null>(null);

    const geo = navigator.geolocation;

    if (!geo) {
        setError('геолокация не поддерживаеться вашим браузером')
        return { position, error };
    }

    useEffect(() => {
        const success = (position: any) => {
            const crd = position
            console.log(crd)
            setPosition({ lat: crd.coords.latitude, lan: crd.coords.longitude })
        }
        const error = () => { }
        geo.getCurrentPosition(success, error)
    }, []);
    return { position, error };
}