import React from "react";
import styles from "./NewSettingsCounter.module.css"
import {Button} from "../NewCounter/UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";

export const NewSettingsCounter = () => {

    let dispatch = useDispatch()
    const state = useSelector<rootReducerType, rootReducerType >(state => state)

    const onChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "UPDATE_START_NUMBER", newStartNumber: +e.currentTarget.value})
        dispatch({type: "UPDATE_NUMBER", newNumber: +e.currentTarget.value})
        if (+e.currentTarget.value !== state.counter.startNumber) {
            dispatch({type: "UPDATE_ERROR", newError: 'enter values & press set'})
        }
        if (+e.currentTarget.value === state.counter.maxNumber || +e.currentTarget.value < 0) {
            dispatch({type: "UPDATE_ERROR", newError: 'Incorrect Value'})
        }
    }
    const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value !== state.counter.maxNumber) {
            dispatch({type: "UPDATE_ERROR", newError: 'enter values & press set'})
        }
        if (+e.currentTarget.value === state.counter.startNumber || state.counter.startNumber < 0) {
            dispatch({type: "UPDATE_ERROR", newError: 'Incorrect Value'})
        }
        dispatch({type: "UPDATE_MAX_NUMBER", newMaxNumber: +e.currentTarget.value})
    }
    const onClickSetButton = () => {
        dispatch({type: "UPDATE_ERROR", newError: ''})
    }

    const stylesInput = state.counter.error === 'Incorrect Value' ? `${styles.input} ${styles.inputError}` : styles.input
    const disableSetButton = state.counter.error === '' || state.counter.error === 'Incorrect Value'

    return (
        <div className={styles.wrapper}>
            <label>Max value:
                <input min={state.counter.startNumber}
                       value={state.counter.maxNumber}
                       onChange={onChangeMax}
                       className={stylesInput}
                       type={"number"}/>
            </label>
            <label>Start Value:
                <input max={state.counter.maxNumber}
                       value={state.counter.startNumber}
                       onChange={onChangeStart}
                       className={stylesInput}
                       type={"number"}/>
            </label>
            <div className={styles.wrapper__buttons}>
                <Button name={'set'}
                        disabled={disableSetButton}
                        onClick={onClickSetButton}
                        backgroundColor={state.settingsColors.bgColorButton}
                        color={state.settingsColors.fontColorButton}/>
            </div>
        </div>
    )
}
