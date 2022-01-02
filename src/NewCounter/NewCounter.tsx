import React from "react";
import styles from "./NewCounter.module.css"
import {Numberplate} from "./UI/Numberplate";
import {ButtonIncReset} from "./UI/ButtonIncReset";

export const NewCounter = () => {

    return (
        <div className={styles.wrapper}>
            <Numberplate />
            <ButtonIncReset/>
        </div>
    )
}

