import styled from "styled-components";
import React from "react";
import { RadioNameType } from "./SettingsColor";


type MapRadioInputType = {
    RadioNames: RadioNameType[]
    setRadio: (value: string) => void
}
export const MapRadioInput = ({RadioNames, setRadio}: MapRadioInputType) => {

    const onChangeSetup = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.currentTarget.value)
    }

    return (
        <InputsWrapper>
            {RadioNames.map((r, i) => {
                return (
                    <LabelInput  key={i}>
                        <input defaultChecked={i === 0} value={r.value}
                               onChange={onChangeSetup}
                               name={'color'}

                               type="radio"/>{r.name}
                    </LabelInput>
                )
            })}
        </InputsWrapper>
    );
};

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