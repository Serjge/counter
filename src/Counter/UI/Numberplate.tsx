import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../store/store";

export const Numberplate = () => {

    const state = useSelector<rootReducerType, rootReducerType>(state => state)

    const colorNumber = () => {
        if (state.counter.error === 'Incorrect Value') {
            return 'red'
        } else if (state.counter.number === state.counter.maxNumber) {
            return state.settingsColors.maxColorNumber
        } else {
            return '#cccccc'
        }
    }

    const fontSizeNumber = () => {
        if (state.counter.error === 'Incorrect Value') {
            return '20px'
        } else if (state.counter.number === state.counter.maxNumber) {
            return '50px'
        } else if (state.counter.error === '') {
            return '30px'
        } else {
            return '15px'
        }
    }

    return (
        <Number colorNumber={colorNumber()}
                fontSizeNumber={fontSizeNumber()}
                maxColorNumber={state.settingsColors.maxColorNumber}
                numberplateColor={state.settingsColors.numberplateColor}
        >
            {state.counter.error ? state.counter.error : state.counter.number}
        </Number>
    )
}

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