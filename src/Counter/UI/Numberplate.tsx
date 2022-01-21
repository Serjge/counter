import React, {useCallback} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../store/store";
import {SettingType} from "../../reducers/CounterReducer";
import {colorCounterType} from "../../reducers/SettingsColorReducer";

export const Numberplate = React.memo(() => {

    const number = useSelector<rootReducerType, number>(state => state.counter.counter.number)
    const {maxNumber} = useSelector<rootReducerType, SettingType>(state => state.counter.setting)
    const error = useSelector<rootReducerType, string>(state => state.counter.errors.errorCounter)
    const {
        numberplateColor,
        maxColorNumber
    } = useSelector<rootReducerType, colorCounterType>(state => state.settingsColors.colorCounter)

    const colorNumber = useCallback(() => {
        if (error === 'Incorrect Value') {
            return 'red'
        } else if (number === maxNumber) {
            return maxColorNumber
        } else {
            return '#cccccc'
        }
    }, [error, number, maxNumber, maxColorNumber])

    const fontSizeNumber = useCallback(() => {
        if (error === 'Incorrect Value') {
            return '20px'
        } else if (number === maxNumber) {
            return '50px'
        } else if (error === '') {
            return '30px'
        } else {
            return '15px'
        }
    }, [error, number, maxNumber])

    return (
        <Number colorNumber={colorNumber()}
                fontSizeNumber={fontSizeNumber()}
                maxColorNumber={maxColorNumber}
                numberplateColor={numberplateColor}
        >
            <NumberError number={number} error={error}/>
        </Number>
    )
})

type PropsType = {
    colorNumber: string
    fontSizeNumber: string
    maxColorNumber: string,
    numberplateColor: string
}

const Number = styled.div<PropsType>`

  color: ${({colorNumber}) => colorNumber};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({numberplateColor}) => numberplateColor};
  height: 60%;
  margin-bottom: 5px;
  border-radius: 5px;
  font-weight: bold;
  font-size: ${({fontSizeNumber}) => fontSizeNumber};
`

type NumberErrorPropsType = {
    number: number
    error: string
}

export const NumberError = React.memo(({number, error}: NumberErrorPropsType) => {

    return (
        <div>
            {error ? error : number}
        </div>
    );
});
