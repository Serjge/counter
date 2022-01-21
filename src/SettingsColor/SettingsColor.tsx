import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import {Button} from "../Counter/UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {
    BackgroundColorAC,
    FontColorButtonAC, initialSettingStateType,
    MaxColorNumberAC,
    NumberplateColorAC
} from "../reducers/SettingsColorReducer";
import {HexPicker} from "./HexPicker";
import {MapRadioInput} from "./MapRadioInput";

export type RadioNameType = {
    name: string
    value: string
}

export const SettingsColor = () => {
    console.log('Render Color settings')
    let dispatch = useDispatch()
    const settingsColors = useSelector<rootReducerType, initialSettingStateType>(state => state.settingsColors)

    const RadioNames: RadioNameType[] = [
        {name: 'Background button', value: 'bg'},
        {name: 'Color font button', value: 'color'},
        {name: 'Color max number', value: 'max'},
        {name: 'Color numberplate', value: 'numberplate'}
    ]

    const [radio, setRadio] = useState<string>(RadioNames[0].value)
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onClickDefaultColors = useCallback(() => {
        dispatch(BackgroundColorAC('#1ea7fd'))
        dispatch(FontColorButtonAC('#cccccc'))
        dispatch(MaxColorNumberAC('#8b0000'))
        dispatch(NumberplateColorAC('#1ea7fd'))
    } ,[dispatch])

    const disableButton = settingsColors.colorsButton.bgColorButton === '#1ea7fd'
        && settingsColors.colorsButton.fontColorButton === '#cccccc'
        && settingsColors.colorCounter.maxColorNumber === '#8b0000'
        && settingsColors.colorCounter.numberplateColor === '#1ea7fd'


    return (
        <div>
            <CollapsedSpan onClick={() => setCollapsed(!collapsed)}>
                Settings colors
            </CollapsedSpan>
            {collapsed &&
                <>
                    <Wrapper>
                        <MapRadioInput RadioNames={RadioNames} setRadio={setRadio}/>
                        <HexPicker radio={radio}/>
                    </Wrapper>
                    <Button disabled={disableButton}
                            color={settingsColors.colorsButton.fontColorButton}
                            backgroundColor={settingsColors.colorsButton.bgColorButton}
                            onClick={onClickDefaultColors}
                            name={'Default colors settings'}/>
                </>
            }
        </div>
    );
};

const CollapsedSpan = styled.span`
  cursor: pointer;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`

