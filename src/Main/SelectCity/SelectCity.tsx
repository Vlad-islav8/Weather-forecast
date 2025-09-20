import { useSelector } from "react-redux"
import { getCity } from '../../redux/selectors/foreCasteSelects'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from "../../redux/store"
import { setCurrentCityCreator } from "../../redux/foreCastReducer"
import seacrh from '../../img/seacrh.svg'

const SelectSityBlock = styled.div`
    display: flex;
    justify-content: flex-end;
`
const SelectInput = styled.input`
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    padding: 0.5rem 0.75rem;
    font-size: 2rem;
`
const SubmitBtn = styled.button`
    position: absolute;
    top: calc(50% - 1.25rem);
    right:0.5rem;
`
const SubmitBtnIcon = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`
const SelectSityForm = styled.div`
    position: relative;
    border-radius: 10px;
    border: 2px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 43px 6px rgba(0, 0, 0, 0.43);
`

const SelectCity = () => {
    const dispatch = useAppDispatch()
    const currentCity: string | null = useSelector(getCity)
    const inputRef = useRef<HTMLInputElement>(null)
    const [currentCityState, setCurrentCityState] = useState<string | null>(currentCity)
    const onInputChange = () => {
        if(inputRef.current) {
            setCurrentCityState(inputRef.current?.value)
        }
    }
    const onSubmit = () => {
        if (currentCityState) {
            dispatch(setCurrentCityCreator(currentCityState))
        }
    }
    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            onSubmit()
        }
    }
    useEffect(() => {
        setCurrentCityState(currentCity)
    }, [currentCity])

    return (
        <SelectSityBlock>
            <SelectSityForm>
                <SelectInput name='selectSity' value={currentCityState || ''} onChange={onInputChange} ref={inputRef} onKeyPress={handleKeyPress} />
                <SubmitBtn onClick={onSubmit} type="button" >
                    <SubmitBtnIcon src={seacrh} />
                </SubmitBtn>
            </SelectSityForm>
        </SelectSityBlock>
    )
}

export default SelectCity