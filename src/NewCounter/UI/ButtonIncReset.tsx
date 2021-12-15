import styles from "./ButtonIncReset.module.css";
import {Button} from "./Button";
import React from "react";

type ButtonIncResetPropsType = {
    number: number
    onClickIncHandler: () => void
    onClickResetHandler: () => void
    nameInc: string
    nameReset: string
    maxNumber: number
    colorButton?: string
    nameColor?: string
    error: string
    startNumber: number
}

export const ButtonIncReset = ({
                                   number,
                                   onClickIncHandler,
                                   onClickResetHandler,
                                   nameInc,
                                   nameReset,
                                   maxNumber,
                                   colorButton,
                                   nameColor,
                                   error,
                                   startNumber
                               }: ButtonIncResetPropsType) => {
    const disableStartButton = number === maxNumber || error !== ''
    const disableResetButton = number === startNumber || error !== ''

    return (
        <div className={styles.wrapper__buttons}>
            <Button disabled={disableStartButton}
                    onClick={onClickIncHandler}
                    name={nameInc}
                    color={nameColor}
                    backgroundColor={colorButton}/>
            <Button disabled={disableResetButton}
                    onClick={onClickResetHandler}
                    name={nameReset}
                    backgroundColor={colorButton}
                    color={nameColor}
            />
        </div>
    )
}