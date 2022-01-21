import styles from "./ButtonIncReset.module.css";
import {Button} from "./Button";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../store/store";
import {initialStateType, UpdateNumberAC} from "../../reducers/CounterReducer";

export const ButtonIncReset = React.memo(() => {
    console.log('render ButtonIncReset')
    let dispatch = useDispatch()

    const state = useSelector<rootReducerType, initialStateType>(state => state.counter)

    const SettingColor = useSelector<rootReducerType, { bgColorButton: string,
        fontColorButton: string}>(state => state.settingsColors.colorsButton)

    const onClickIncHandler =  useCallback(() => {
        dispatch(UpdateNumberAC(state.counter.number + 1))
    },[state.counter.number,dispatch])

    const onClickResetHandler =useCallback( () => {
        dispatch(UpdateNumberAC(state.setting.startNumber))
    },[state.setting.startNumber, dispatch])

    const disableStartButton = state.counter.number === state.setting.maxNumber || state.errors.errorCounter !== ''
    const disableResetButton = state.counter.number === state.setting.startNumber || state.errors.errorCounter !== ''

    return (
        <div className={styles.wrapper__buttons}>
            <Button disabled={disableStartButton}
                    onClick={onClickIncHandler}
                    name={'Inc'}
                    color={SettingColor.fontColorButton}
                    backgroundColor={SettingColor.bgColorButton}/>

            <Button disabled={disableResetButton}
                    onClick={onClickResetHandler}
                    name={'Reset'}
                    backgroundColor={SettingColor.bgColorButton}
                    color={SettingColor.fontColorButton}
            />
        </div>
    )
})