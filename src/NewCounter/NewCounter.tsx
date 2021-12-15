import React from "react";
import styles from "./NewCounter.module.css"
import {Numberplate} from "./UI/Numberplate";
import {ButtonIncReset} from "./UI/ButtonIncReset";

type PropsType = {
    number: number
    changeNumber: (value: number) => void
    startValue: number
    maxValue: number
    colorButton?: string
    nameColor?: string
    error: string
}
export const NewCounter = ({
                               number,
                               changeNumber,
                               maxValue,
                               startValue,
                               error,
                               nameColor,
                               colorButton
                           }: PropsType) => {

    const onClickIncHandler = () => {
        changeNumber(number + 1)
    }

    const onClickResetHandler = () => {
        changeNumber(startValue)
    }

    return (
        <div className={styles.wrapper}>
            <Numberplate maxNumber={maxValue}
                         number={number}
                         error={error}
                // colorNumber={'green'}
            />
            <ButtonIncReset number={number}
                            onClickIncHandler={onClickIncHandler}
                            onClickResetHandler={onClickResetHandler}
                            nameInc={'Inc'}
                            nameReset={'Reset'}
                            maxNumber={maxValue}
                            colorButton={colorButton}
                            nameColor={nameColor}
                            error={error}
                            startNumber={startValue}
            />
        </div>
    )
}

