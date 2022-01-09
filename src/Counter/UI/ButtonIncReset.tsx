import styles from "./ButtonIncReset.module.css";
import {Button} from "./Button";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../store/store";
import {UpdateNumberAC} from "../../reducers/CounterReducer";

export const ButtonIncReset = () => {

    let dispatch = useDispatch()
    const state = useSelector<rootReducerType, rootReducerType >(state => state)

    const onClickIncHandler = () => {
        dispatch(UpdateNumberAC(state.counter.number + 1))
    }

    const onClickResetHandler = () => {
        dispatch(UpdateNumberAC(state.counter.startNumber))
    }
    const disableStartButton = state.counter.number === state.counter.maxNumber || state.counter.error !== ''
    const disableResetButton = state.counter.number === state.counter.startNumber || state.counter.error !== ''

    return (
        <div className={styles.wrapper__buttons}>
            <Button disabled={disableStartButton}
                    onClick={onClickIncHandler}
                    name={'Inc'}
                    color={state.settingsColors.fontColorButton}
                    backgroundColor={state.settingsColors.bgColorButton}/>
            <Button disabled={disableResetButton}
                    onClick={onClickResetHandler}
                    name={'Reset'}
                    backgroundColor={state.settingsColors.bgColorButton}
                    color={state.settingsColors.fontColorButton}
            />
        </div>
    )
}