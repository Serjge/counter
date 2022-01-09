import React, {useState} from 'react';
import styled from 'styled-components';
import {Button} from "../Counter/UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {
    BackgroundColorAC,
    FontColorButtonAC,
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

    let dispatch = useDispatch()
    const state = useSelector<rootReducerType, rootReducerType>(state => state)

    const RadioNames: RadioNameType[] = [
        {name: 'Background button', value: 'bg'},
        {name: 'Color font button', value: 'color'},
        {name: 'Color max number', value: 'max'},
        {name: 'Color numberplate', value: 'numberplate'}
    ]

    const [radio, setRadio] = useState<string>(RadioNames[0].value)
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onClickDefaultColors = () => {
        dispatch(BackgroundColorAC('#1ea7fd'))
        dispatch(FontColorButtonAC('#cccccc'))
        dispatch(MaxColorNumberAC('#8b0000'))
        dispatch(NumberplateColorAC('#1ea7fd'))
    }

    const disableButton = state.settingsColors.bgColorButton === '#1ea7fd'
        && state.settingsColors.fontColorButton === '#cccccc'
        && state.settingsColors.maxColorNumber === '#8b0000'
        && state.settingsColors.numberplateColor === '#1ea7fd'

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
                            color={state.settingsColors.fontColorButton}
                            backgroundColor={state.settingsColors.bgColorButton}
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

