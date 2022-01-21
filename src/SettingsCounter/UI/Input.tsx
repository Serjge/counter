import React from "react";
import styled from "styled-components";

type InputPropsType = {
    min?: number
    max?: number
    value: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    title: string
    error: string
}
export const Input = React.memo(({min, max, value, onChange, className, title, error}: InputPropsType) => {

    console.log('Input')
    return (
        <label>{title}
            <InputStyle min={min}
                        value={value}
                        onChange={onChange}
                        className={className}
                        max={max}
                        type={"number"}
                        error={error}

            />
        </label>
    );
});
const InputStyle = styled.input<{ error: string }>`
  width: 50px;
  margin: 10px auto;
  border: ${({error}) => error === 'Incorrect Value' ? 'darkred 2px solid' : ''};
  background: ${({error}) => error === 'Incorrect Value' ? 'rgba(255, 99, 71, 0.5)' : ''};
  outline: ${({error}) => error === 'Incorrect Value' ? 'none' : ''}

`