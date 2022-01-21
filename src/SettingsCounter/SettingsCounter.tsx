import React, {useCallback} from "react";
import styles from "./SettingsCounter.module.css"
import {Button} from "../Counter/UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {UpdateErrorAC, UpdateMaxNumberAC, UpdateNumberAC, UpdateStartNumberAC} from "../reducers/CounterReducer";
import {Input} from "./UI/Input";


export const SettingsCounter = () => {
    console.log('Render Setting Counter')

    let dispatch = useDispatch()

    const setting = useSelector<rootReducerType, { startNumber: number, maxNumber: number, }>(state => state.counter.setting)

    const error = useSelector<rootReducerType, string>(state => state.counter.errors.errorCounter)
    const settingColor = useSelector<rootReducerType, {
        bgColorButton: string,
        fontColorButton: string
    }>(state => state.settingsColors.colorsButton)

    const onChangeStart = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber !== setting.startNumber) {
            dispatch(UpdateErrorAC('enter values & press set'))
        }
        if (e.currentTarget.valueAsNumber >= setting.maxNumber || e.currentTarget.valueAsNumber < 0) {
            dispatch(UpdateErrorAC('Incorrect Value'))
        }
        dispatch(UpdateStartNumberAC(e.currentTarget.valueAsNumber))
        dispatch(UpdateNumberAC(e.currentTarget.valueAsNumber))
    }, [dispatch, setting.maxNumber, setting.startNumber])

    const onChangeMax = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber !== setting.maxNumber) {
            dispatch(UpdateErrorAC('enter values & press set'))
        }
        if (e.currentTarget.valueAsNumber <= setting.startNumber || setting.startNumber < 0) {
            dispatch(UpdateErrorAC('Incorrect Value'))
        }
        dispatch(UpdateMaxNumberAC(e.currentTarget.valueAsNumber))
    }, [dispatch, setting.maxNumber, setting.startNumber])

    const onClickSetButton = useCallback(() => {
        dispatch(UpdateErrorAC(''))
    }, [dispatch])

    const disableSetButton = error === '' || error === 'Incorrect Value'

    return (
        <div className={styles.wrapper}>
            <Input value={setting.maxNumber}
                   onChange={onChangeMax}
                   title={'Max value:'}
                   error={error}
                   min={setting.startNumber}/>
            <Input value={setting.startNumber}
                   onChange={onChangeStart}
                   title={'Start Value:'}
                   error={error}
                   max={setting.maxNumber}/>
            <div className={styles.wrapper__buttons}>
                <Button name={'set'}
                        disabled={disableSetButton}
                        onClick={onClickSetButton}
                        backgroundColor={settingColor.bgColorButton}
                        color={settingColor.fontColorButton}/>
            </div>
        </div>
    )
}


