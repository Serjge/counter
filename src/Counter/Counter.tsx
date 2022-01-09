import React from "react";
import styles from "./Counter.module.css"
import {Numberplate} from "./UI/Numberplate";
import {ButtonIncReset} from "./UI/ButtonIncReset";

export const Counter = () => {

    return (
        <div className={styles.wrapper}>
            <Numberplate />
            <ButtonIncReset/>
        </div>
    )
}

