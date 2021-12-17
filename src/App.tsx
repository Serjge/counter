import React, {useReducer} from 'react';
import './App.css';
import {NewCounter} from './NewCounter/NewCounter';
import {NewSettingsCounter} from "./NewSettingsCounter/NewSettingsCounter";
import {reducer} from './reducer';

export type StateType = {
    number: number
    startNumber: number
    maxNumber: number
    error: string
    bgColorButton: string
    fontColorButton: string
    maxColorNumber:string
}

export function App() {

    const stateCounter: StateType = {
        number: 0,
        startNumber: 0,
        maxNumber: 5,
        error: '',
        bgColorButton: '',
        fontColorButton: '',
        maxColorNumber:'darkred'
    }

    const [state, dispatch] = useReducer(reducer, stateCounter)

    return (
        <div className={'wrapper'}>
            <NewCounter
                state={state}
                dispatch={dispatch}
            />
            <NewSettingsCounter
                state={state}
                dispatch={dispatch}
            />
        </div>
    );
}

