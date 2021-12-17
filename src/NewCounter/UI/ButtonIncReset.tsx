import styles from "./ButtonIncReset.module.css";
import {Button} from "./Button";
import React from "react";
import {StateType} from "../../App";
import {ActionType, UPDATE_NUMBER} from "../../reducer";

type ButtonIncResetPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

export const ButtonIncReset = ({
                                   state,
                                   dispatch
                               }: ButtonIncResetPropsType) => {

    const onClickIncHandler = () => {
        dispatch({type: UPDATE_NUMBER, newNumber: state.number + 1})
    }

    const onClickResetHandler = () => {
        dispatch({type: UPDATE_NUMBER, newNumber: state.startNumber})
    }
    const disableStartButton = state.number === state.maxNumber || state.error !== ''
    const disableResetButton = state.number === state.startNumber || state.error !== ''

    return (
        <div className={styles.wrapper__buttons}>
            <Button disabled={disableStartButton}
                    onClick={onClickIncHandler}
                    name={'Inc'}
                    color={state.fontColorButton}
                    backgroundColor={state.bgColorButton}/>
            <Button disabled={disableResetButton}
                    onClick={onClickResetHandler}
                    name={'Reset'}
                    backgroundColor={state.bgColorButton}
                    color={state.fontColorButton}
            />
        </div>
    )
}