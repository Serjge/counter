import React from "react";
import styles from "./Counter.module.css"
import {Numberplate} from "./UI/Numberplate";
import {ButtonIncReset} from "./UI/ButtonIncReset";

export const Counter = () => {
    console.log('Render Counter')
    return (
        <div className={styles.wrapper}>
            <Numberplate />
            <ButtonIncReset/>
        </div>
    )
}

