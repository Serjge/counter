import React, {useState} from "react";
import styles from "./SettingsCounter.module.css"

type SettingsCounterPropsType = {
    maxNumber: number
    startNumber: number
    changeError: (value: string) => void
    number: number
    error: string
    setDisable: boolean
    changeStartMaxNumber: (startNumberValue: number, maxNumberValue: number) => void
    UnDisable: () => void
    disableButton: () => void
}

export const SettingsCounter = ({
                                    maxNumber,
                                    startNumber,
                                    changeError,
                                    number,
                                    error,
                                    setDisable,
                                    changeStartMaxNumber,
                                    UnDisable,
                                    disableButton
                                }: SettingsCounterPropsType) => {

    const [start, setStart] = useState<number>(startNumber)
    const [max, setMax] = useState<number>(maxNumber)


    const onChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (+e.currentTarget.value === max || +e.currentTarget.value < 0){
            changeError('Incorrect Value')
            disableButton()
        }else if (+e.currentTarget.value >= number || max < number) {
            changeError('error')
            UnDisable()
        }else UnDisable()
        // +e.currentTarget.value === max || +e.currentTarget.value < 0
        //     ? disableButton()
        //     : UnDisable()


        setStart(+e.currentTarget.value)
    }

    const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log( 'num:' + number, 'max' + +e.currentTarget.value)
        if (+e.currentTarget.value  === start || start < 0){
            changeError('Incorrect Value')
            disableButton()
        }else if (start >= number || +e.currentTarget.value < number) {
            changeError('error')
            UnDisable()
        } else {
            UnDisable()
        }
        // +e.currentTarget.value === start || start < 0
        //     ? disableButton()
        //     : UnDisable()
        setMax(+e.currentTarget.value)
    }

    const onClickStartMaxValue = () => {

        changeStartMaxNumber(start, max)
    }

    const stylesInput = error === 'Incorrect Value' ? `${styles.input} ${styles.inputError}` : styles.input

    return (
        <div className={styles.wrapper}>
            <label>Max value:
                <input min={start}
                       value={max}
                       onChange={onChangeMax}
                       className={stylesInput}
                       type={"number"}/>
            </label>
            <label>Start Value:
                <input max={max}
                       value={start}
                       onChange={onChangeStart}
                       className={stylesInput}
                       type={"number"}/>
            </label>
            <div className={styles.wrapper__buttons}>
                <button onClick={onClickStartMaxValue} disabled={setDisable}>set</button>

            </div>
        </div>
    )
}
