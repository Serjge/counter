import styles from "./Numberplate.module.css";
import React from "react";

type NumberplatePropsType = {
    number: number
    maxNumber: number
    maxColorNumber?: string
    error: string
}
export const Numberplate = ({number, maxNumber, maxColorNumber, error}: NumberplatePropsType) => {

    const StyleNumber = `${styles.number} 
    ${error !== '' ? styles.error : ''}
    ${error === 'Incorrect Value' ? styles.errorIncorrect : ''}`

    return (
        <div style={number === maxNumber ? {color: maxColorNumber, fontSize: '50px'} : {color: ''}}
             className={StyleNumber}>{error ? error : number}</div>
    )
}