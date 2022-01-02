import React, {useState} from 'react';
import {HexColorInput, HexColorPicker} from 'react-colorful';
import styled from 'styled-components';
import {Button} from "../NewCounter/UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";

export const NewSettingsColor = () => {

    let dispatch = useDispatch()
    const state = useSelector<rootReducerType, rootReducerType >(state => state)

    const [radio, setRadio] = useState<string>('bg')
    const [collapsed, setCollapsed] = useState(false)

    const onChangeColor = (color: string) => {
        switch (radio) {
            case 'bg':
                return dispatch({type: "BACKGROUND_COLOR_BUTTON", color: color})
            case 'color':
                return dispatch({type: "FONT_COLOR_BUTTON", color: color})
            case 'max':
                return dispatch({type: "MAX_NUMBER_COLOR", color: color})
            case 'numberplate':
                return dispatch({type: "NUMBERPLATE_COLOR", color: color})
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

    const onChangeSetup = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.currentTarget.value)
    }
    const onClickDefaultColors = () => {
        dispatch({type: "BACKGROUND_COLOR_BUTTON", color: '#1ea7fd'})
        dispatch({type: "FONT_COLOR_BUTTON", color: '#cccccc'})
        dispatch({type: "MAX_NUMBER_COLOR", color: '#8b0000'})
        dispatch({type: "NUMBERPLATE_COLOR", color: '#1ea7fd'})
    }

    return (
        <div>
            <CollapsedSpan onClick={()=>setCollapsed(!collapsed)}>Settings colors</CollapsedSpan>
            {collapsed &&
                <div>
                <Wrapper>
                    <InputsWrapper>
                        <LabelInput>
                            <input defaultChecked={true} value={'bg'} onChange={onChangeSetup} name={'color'} type="radio" />
                            Background button
                        </LabelInput>
                        <LabelInput>
                            <input onChange={onChangeSetup} value={'color'} name={'color'} type="radio"/>
                            Color font button
                        </LabelInput>
                        <LabelInput>
                            <input onChange={onChangeSetup} value={'max'} name={'color'} type="radio"/>
                            Color max number
                        </LabelInput>
                        <LabelInput>
                            <input onChange={onChangeSetup} value={'numberplate'} name={'color'} type="radio"/>
                            Color numberplate
                        </LabelInput>

                    </InputsWrapper>
                    <HexWrapper>
                        <HexColorPicker color={setColor(radio)}
                                        onChange={onChangeColor}/>
                        <HexColorInput color={setColor(radio)}
                                       onChange={onChangeColor} placeholder="Type a color" prefixed alpha/>
                    </HexWrapper>
                </Wrapper>
                    <Button disabled={false}
                            color={state.settingsColors.fontColorButton}
                            backgroundColor={state.settingsColors.bgColorButton}
                            onClick={onClickDefaultColors}
                            name={'Default Settings'}/>
                </div>
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
const InputsWrapper = styled.form`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
`

const LabelInput = styled.label`
  cursor: pointer;

`
const HexWrapper = styled.form`
  padding: 20px;
`
