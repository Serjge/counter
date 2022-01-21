import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {
    BackgroundColorAC,
    FontColorButtonAC, initialSettingStateType,
    MaxColorNumberAC,
    NumberplateColorAC
} from "../reducers/SettingsColorReducer";
import {HexColorInput, HexColorPicker} from "react-colorful";
import React from "react";

type HexPickerType = {
    radio: string
}

export const HexPicker = ({radio}: HexPickerType) => {

    const {colorCounter,colorsButton} = useSelector<rootReducerType, initialSettingStateType>(state => state.settingsColors)
    const dispatch = useDispatch()

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
                return colorsButton.bgColorButton
            case 'color':
                return colorsButton.fontColorButton
            case 'max':
                return colorCounter.maxColorNumber
            case 'numberplate':
                return colorCounter.numberplateColor
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