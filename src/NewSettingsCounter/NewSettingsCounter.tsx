import React from "react";
import styles from "./NewSettingsCounter.module.css"
import {Button} from "../NewCounter/UI/Button";

type SettingsCounterPropsType = {
    maxNumber: number
    startNumber: number
    changeError: (value: string) => void
    error: string
    changeMaxNumber: (value: number) => void
    changeStartNumber: (value: number) => void
    onSetClicked: () => void
    colorButton?:string
    nameColor?:string
}

export const NewSettingsCounter = ({
                                       maxNumber,
                                       startNumber,
                                       changeError,
                                       error,
                                       changeMaxNumber,
                                       changeStartNumber,
                                       onSetClicked,
                                       colorButton,
                                       nameColor
                                   }: SettingsCounterPropsType) => {


    const onChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeStartNumber(+e.currentTarget.value)
        if (+e.currentTarget.value !== startNumber) {
            changeError('enter values & press set')
        }
        if (+e.currentTarget.value === maxNumber|| +e.currentTarget.value < 0) {
            changeError('Incorrect Value')
        }
    }

    const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value !== maxNumber) {
            changeError('enter values & press set')
        }
        if (+e.currentTarget.value === startNumber|| startNumber < 0) {
            changeError('Incorrect Value')
        }
        changeMaxNumber(+e.currentTarget.value)
    }

    const onClickButton = () => {
        onSetClicked()
    }

    const stylesInput = error === 'Incorrect Value' ? `${styles.input} ${styles.inputError}` : styles.input
const disableSetButton = error==='' ||  error === 'Incorrect Value'
    return (
        <div className={styles.wrapper}>
            <label>Max value:
                <input min={startNumber}
                       value={maxNumber}
                       onChange={onChangeMax}
                       className={stylesInput}
                       type={"number"}/>
            </label>
            <label>Start Value:
                <input max={maxNumber}
                       value={startNumber}
                       onChange={onChangeStart}
                       className={stylesInput}
                       type={"number"}/>
            </label>
            <div className={styles.wrapper__buttons}>
                <Button name={'set'}
                        disabled={disableSetButton}
                        onClick={onClickButton}
                        backgroundColor={colorButton}
                        color={nameColor}/>
            </div>
        </div>
    )
}
