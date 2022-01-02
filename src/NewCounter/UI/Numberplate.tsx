import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../store/store";

export const Numberplate = () => {

    const state = useSelector<rootReducerType, rootReducerType>(state => state)
    console.log(state.settingsColors.numberplateColor)
    console.log(state.settingsColors.bgColorButton)
    return (
        <Number error={state.counter.error}
                number={state.counter.number}
                maxNumber={state.counter.maxNumber}
                maxColorNumber={state.settingsColors.maxColorNumber}
                numberplateColor={state.settingsColors.numberplateColor}
        >
            {state.counter.error ? state.counter.error : state.counter.number}
        </Number>
    )
}

type PropsType = {
    maxColorNumber: string,
    number: number,
    maxNumber: number,
    error: string
    numberplateColor: string
}

const Number = styled.div<PropsType>`
  color: ${({error, maxColorNumber, number, maxNumber}) => {
    if (error === 'Incorrect Value') {
      return 'red'
    } else if (number === maxNumber) {
      return maxColorNumber
    } else {
      return '#cccccc'
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({numberplateColor})=> numberplateColor};
  height: 50px;
  margin-bottom: 5px;
  border-radius: 5px;
  font-weight: bold;
  font-size: ${({error, number, maxNumber}) => {
    if (error === 'Incorrect Value') {
      return '20px'
    } else if (number === maxNumber) {
      return '50px'
    } else if (error === '') {
      return '30px'
    } else {
      return '15px'
    }
  }
  };

}
`