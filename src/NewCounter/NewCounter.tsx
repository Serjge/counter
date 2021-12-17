import React from "react";
import styles from "./NewCounter.module.css"
import {Numberplate} from "./UI/Numberplate";
import {ButtonIncReset} from "./UI/ButtonIncReset";
import {ActionType} from "../reducer";
import {StateType} from "../App";

type NewCounterPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}
export const NewCounter = ({
                               state,
                               dispatch,
                           }: NewCounterPropsType) => {

    return (
        <div className={styles.wrapper}>
            <Numberplate maxNumber={state.maxNumber}
                         number={state.number}
                         error={state.error}
                         maxColorNumber={state.maxColorNumber}
            />
            <ButtonIncReset
                state={state}
                dispatch={dispatch}
            />
        </div>
    )
}

