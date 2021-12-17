import React from "react";
import styles from "./NewSettingsCounter.module.css"
import {Button} from "../NewCounter/UI/Button";
import {ActionType} from "../reducer";
import { StateType } from "../App";

type SettingsCounterPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

export const NewSettingsCounter = ({
                                       state,
                                       dispatch
                                   }: SettingsCounterPropsType) => {


    const onChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "UPDATE_START_NUMBER", newStartNumber: +e.currentTarget.value})
        dispatch({type: "UPDATE_NUMBER", newNumber: +e.currentTarget.value})
        if (+e.currentTarget.value !== state.startNumber) {
            dispatch({type: "UPDATE_ERROR", newError: 'enter values & press set'})
        }
        if (+e.currentTarget.value === state.maxNumber || +e.currentTarget.value < 0) {
            dispatch({type: "UPDATE_ERROR", newError: 'Incorrect Value'})
        }
    }
    const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value !== state.maxNumber) {
            dispatch({type: "UPDATE_ERROR", newError: 'enter values & press set'})
        }
        if (+e.currentTarget.value === state.startNumber || state.startNumber < 0) {
            dispatch({type: "UPDATE_ERROR", newError: 'Incorrect Value'})
        }
        dispatch({type: "UPDATE_MAX_NUMBER", newMaxNumber: +e.currentTarget.value})
    }
    const onClickSetButton = () => {
        dispatch({type: "UPDATE_ERROR", newError: ''})
    }

    const stylesInput = state.error === 'Incorrect Value' ? `${styles.input} ${styles.inputError}` : styles.input
    const disableSetButton = state.error === '' || state.error === 'Incorrect Value'

    return (
        <div className={styles.wrapper}>
            <label>Max value:
                <input min={state.startNumber}
                       value={state.maxNumber}
                       onChange={onChangeMax}
                       className={stylesInput}
                       type={"number"}/>
            </label>
            <label>Start Value:
                <input max={state.maxNumber}
                       value={state.startNumber}
                       onChange={onChangeStart}
                       className={stylesInput}
                       type={"number"}/>
            </label>
            <div className={styles.wrapper__buttons}>
                <Button name={'set'}
                        disabled={disableSetButton}
                        onClick={onClickSetButton}
                        backgroundColor={state.bgColorButton}
                        color={state.fontColorButton}/>
            </div>
        </div>
    )
}
