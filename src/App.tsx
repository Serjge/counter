import React, {useEffect, useReducer} from 'react';
import './App.css';
import {NewCounter} from './NewCounter/NewCounter';
import {NewSettingsCounter} from "./NewSettingsCounter/NewSettingsCounter";
import {reducer, UPDATE_STATE} from './reducer';

export type StateType = {
    number: number
    startNumber: number
    maxNumber: number
    error: string
    bgColorButton: string
    fontColorButton: string
    maxColorNumber: string
}

export function App() {

    let stateCounter: StateType = {
        number: 0,
        startNumber: 0,
        maxNumber: 5,
        error: '',
        bgColorButton: '',
        fontColorButton: '',
        maxColorNumber: 'darkred'
    }

    useEffect(() => {
        let getState = localStorage.getItem('state')
        if (getState) {
            let newGetState = JSON.parse(getState)
            dispatch({type: UPDATE_STATE, newState: newGetState})
        }
    }, [])

    const [state, dispatch] = useReducer(reducer, stateCounter)

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])

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
