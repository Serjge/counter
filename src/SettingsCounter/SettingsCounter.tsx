import React from "react";
import styles from "./SettingsCounter.module.css"
import {Button} from "../Counter/UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {UpdateErrorAC, UpdateMaxNumberAC, UpdateNumberAC, UpdateStartNumberAC} from "../reducers/CounterReducer";

export const SettingsCounter = () => {

    let dispatch = useDispatch()
    const state = useSelector<rootReducerType, rootReducerType>(state => state)

    const onChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber !== state.counter.startNumber) {
            dispatch(UpdateErrorAC('enter values & press set'))
        }
        if (+e.currentTarget.value === state.counter.maxNumber || e.currentTarget.valueAsNumber < 0) {
            dispatch(UpdateErrorAC('Incorrect Value'))
        }
        dispatch(UpdateStartNumberAC(e.currentTarget.valueAsNumber))
        dispatch(UpdateNumberAC(e.currentTarget.valueAsNumber))
    }

    const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber !== state.counter.maxNumber) {
            dispatch(UpdateErrorAC('enter values & press set'))
        }
        if (e.currentTarget.valueAsNumber === state.counter.startNumber || state.counter.startNumber < 0) {
            dispatch(UpdateErrorAC('Incorrect Value'))
        }
        dispatch(UpdateMaxNumberAC(e.currentTarget.valueAsNumber))
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
