import React, {useState} from 'react';
import './App.css';
import {NewCounter} from './NewCounter/NewCounter';
import {NewSettingsCounter} from "./NewSettingsCounter/NewSettingsCounter";

export function App() {

    //counter start value
    const startValue: number = 0
    const maxValue:number = 5
    const backgroundColorButton = 'green'
    const fontColorButton = 'red'


    const [number, setNumber] = useState<number>(startValue)
    const [start, setStart] = useState<number>(startValue)
    const [max, setMax] = useState<number>(maxValue)
    const [error, setError] = useState<string>('')

    const changeNumber = (value: number) => {
        setNumber(value)
    }
    const changeMaxNumber = (value: number) => {
        setMax(value)
    }
    const changeStartNumber = (value: number) => {
        setStart(value)
        setNumber(value)
    }
    const changeError = (value: string) => {
        setError(value)
    }
    const onSetClicked = () => {
        setError('')
    }

    return (
        <div className={'wrapper'}>
            <NewCounter number={number}
                        changeNumber={changeNumber}
                        maxValue={max}
                        startValue={start}
                        error={error}
                        colorButton={backgroundColorButton}
                        nameColor={fontColorButton}
            />
            <NewSettingsCounter maxNumber={max}
                                startNumber={start}
                                error={error}
                                changeMaxNumber={changeMaxNumber}
                                changeStartNumber={changeStartNumber}
                                changeError={changeError}
                                onSetClicked={onSetClicked}
                                colorButton={backgroundColorButton}
                                nameColor={fontColorButton}
            />
        </div>
    );
}


export default App;
