import React from "react";
import styles from "./Button.module.css"

type ButtonPropsType = {
    name: string
    disabled: boolean
    onClick: () => void
    color?: string
    backgroundColor?: string
}

export const Button = ({name,onClick,disabled,color,backgroundColor, ...props}: ButtonPropsType) => {

    return (
        <button style={{ backgroundColor: backgroundColor, color: color  }} className={styles.button} disabled={disabled} onClick={onClick}  {...props}>{name}</button>
    )
}