import styles from "./Numberplate.module.css";
import React from "react";

type NumberplatePropsType = {
    number: number
    maxNumber: number
    colorNumber?: string
    error: string
}
export const Numberplate = ({number, maxNumber, colorNumber, error}: NumberplatePropsType) => {

    const StyleNumber = `${styles.number} 
    ${number === maxNumber ? styles.numberActive : ''} 
    ${error !== '' ? styles.error : ''}
    ${error === 'Incorrect Value' ? styles.errorIncorrect : ''}`

    return (
        <div style={{color: colorNumber}} className={StyleNumber}>{error ? error : number}</div>
    )
}