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
    width: 100%;
    padding: 0 1rem;
    
    @media (max-width: 1200px) {
        justify-content: center;
        padding: 0 0.5rem;
    }
    
    @media (max-width: 768px) {
        justify-content: center;
        padding: 0 0.25rem;
    }
    
    @media (max-width: 480px) {
        padding: 0 0.5rem;
    }
`

const SelectSityForm = styled.form`
    position: relative;
    border-radius: 16px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    max-width: 500px;
    width: 100%;
    transition: all 0.3s ease;
    
    &:focus-within {
        border-color: rgba(0, 0, 0, 0.4);
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.2);
    }
    
    @media (max-width: 768px) {
        border-radius: 12px;
        max-width: 400px;
    }
    
    @media (max-width: 480px) {
        border-radius: 8px;
        max-width: 100%;
    }
`

const SelectInput = styled.input`
    background: transparent;
    border: none;
    border-radius: 16px;
    padding: 1rem 4.5rem 1rem 1.5rem;
    font-size: 1.5rem;
    width: 100%;
    color: #333;
    outline: none;
    font-weight: 500;
    
    &::placeholder {
        color: rgba(0, 0, 0, 0.5);
        font-weight: 400;
    }
    
    @media (max-width: 768px) {
        font-size: 1.25rem;
        padding: 0.875rem 4rem 0.875rem 1.25rem;
        border-radius: 12px;
    }
    
    @media (max-width: 480px) {
        font-size: 1.125rem;
        padding: 0.75rem 3.5rem 0.75rem 1rem;
        border-radius: 8px;
    }
    
    @media (max-width: 360px) {
        font-size: 1rem;
        padding: 0.625rem 3rem 0.625rem 0.875rem;
    }
`

const SubmitBtn = styled.button`
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.3);
    border: none;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    backdrop-filter: blur(5px);
    
    &:hover {
        background: rgba(255, 255, 255, 0.5);
        transform: translateY(-50%) scale(1.05);
    }
    
    &:active {
        transform: translateY(-50%) scale(0.95);
    }
    
    @media (max-width: 768px) {
        width: 2.75rem;
        height: 2.75rem;
        right: 0.375rem;
    }
    
    @media (max-width: 480px) {
        width: 2.5rem;
        height: 2.5rem;
        right: 0.25rem;
    }
`

const SubmitBtnIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0.8;
    
    @media (max-width: 480px) {
        width: 1.25rem;
        height: 1.25rem;
    }
`

const SelectCity = () => {
    const dispatch = useAppDispatch()
    const currentCity: string | null = useSelector(getCity)
    const inputRef = useRef<HTMLInputElement>(null)
    const [currentCityState, setCurrentCityState] = useState<string | null>(currentCity)

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentCityState(e.target.value)
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (currentCityState && currentCityState.trim()) {
            dispatch(setCurrentCityCreator(currentCityState.trim()))
        }
    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onSubmit(event)
        }
    }

    useEffect(() => {
        setCurrentCityState(currentCity)
    }, [currentCity])

    return (
        <SelectSityBlock>
            <SelectSityForm onSubmit={onSubmit}>
                <SelectInput 
                    name='selectSity' 
                    value={currentCityState || ''} 
                    onChange={onInputChange} 
                    ref={inputRef} 
                    onKeyPress={handleKeyPress}
                    placeholder="Введите город..."
                    aria-label="Выбор города"
                />
                <SubmitBtn type="submit" aria-label="Поиск">
                    <SubmitBtnIcon src={seacrh} alt="Поиск" />
                </SubmitBtn>
            </SelectSityForm>
        </SelectSityBlock>
    )
}

export default SelectCity