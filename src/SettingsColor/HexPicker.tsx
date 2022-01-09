import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {
    BackgroundColorAC,
    FontColorButtonAC,
    MaxColorNumberAC,
    NumberplateColorAC
} from "../reducers/SettingsColorReducer";
import {HexColorInput, HexColorPicker} from "react-colorful";
import React from "react";

type HexPickerType = {
    radio: string
}

export const HexPicker = ({radio}: HexPickerType) => {

    const state = useSelector<rootReducerType, rootReducerType>(state => state)
    let dispatch = useDispatch()

    const onChangeColor = (color: string) => {
        switch (radio) {
            case 'bg':
                return dispatch(BackgroundColorAC(color))
            case 'color':
                return dispatch(FontColorButtonAC(color))
            case 'max':
                return dispatch(MaxColorNumberAC(color))
            case 'numberplate':
                return dispatch(NumberplateColorAC(color))
        }
    }

    const setColor = (value: string) => {
        switch (value) {
            case 'bg':
                return state.settingsColors.bgColorButton
            case 'color':
                return state.settingsColors.fontColorButton
            case 'max':
                return state.settingsColors.maxColorNumber
            case 'numberplate':
                return state.settingsColors.numberplateColor
        }
    }

    return (
        <HexWrapper>
            <HexColorPicker color={setColor(radio)}
                            onChange={onChangeColor}/>
            <HexColorInput color={setColor(radio)}
                           onChange={onChangeColor} placeholder="Type a color" prefixed alpha/>
        </HexWrapper>
    );
};

const HexWrapper = styled.form`
  padding: 20px;
`