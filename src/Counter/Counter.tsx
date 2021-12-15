import React from "react";
import styles from "./Counter.module.css"

type CounterPropsType = {
    number: number
    changeNumber: (value: number) => void
    maxNumber: number
    startNumber: number
    error: string
    disableInc: boolean
    disableReset: boolean
    changeDisableInc: (value: boolean) => void
    changeDisableReset: (value: boolean) => void
}

export const Counter = ({
                            number,
                            changeNumber,
                            maxNumber,
                            startNumber,
                            error,
                            disableInc,
                            disableReset,
                            changeDisableReset,
                            changeDisableInc
                        }: CounterPropsType) => {

    const onClickIncHandler = () => {
        if (number === maxNumber - 1) {
            changeDisableInc(true)
        }
        changeNumber(number + 1)
        changeDisableReset(false)
    }
    const onClickResetHandler = () => {
        changeNumber(startNumber)
        changeDisableInc(false)
        changeDisableReset(true)
    }

    const StyleNumber = `${
      error !== '' 
          ? styles.error 
          : styles.number
   
    } 
    ${error === 'Incorrect Value' ? styles.errorRed : ''} 
    ${number === maxNumber && error === ''  ? styles.numberActive : ''}`

    return (
        <div className={styles.wrapper}>
            <div className={StyleNumber}>{error !== '' ? error : number}</div>
            <div className={styles.wrapper__buttons}>
                <button disabled={disableInc} onClick={onClickIncHandler}>inc</button>
                <button disabled={disableReset} onClick={onClickResetHandler}>Reset</button>
            </div>
        </div>
    )
}
