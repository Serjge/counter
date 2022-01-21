import React from "react";
import styles from "./Button.module.css"

type ButtonPropsType = {
    name: string
    disabled: boolean
    onClick: () => void
    color?: string
    backgroundColor?: string
}

export const Button = React.memo(({name,onClick,disabled,color,backgroundColor, ...props}: ButtonPropsType) => {
    console.log(`render Button ${name}`)

    return (
        <button style={{ backgroundColor: backgroundColor, color: color  }} className={styles.button} disabled={disabled} onClick={onClick}  {...props}>{name}</button>
    )
})