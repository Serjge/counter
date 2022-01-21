import React from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {SettingsCounter} from "./SettingsCounter/SettingsCounter";
import {SettingsColor} from "./SettingsColor/SettingsColor";

export function App() {

    const SettingsColorMemo = React.memo(SettingsColor)
    const SettingsCounterMemo = React.memo(SettingsCounter)

    return (

        <>
            <div>
                <div className={'wrapper'}>
                    <Counter/>
                    <SettingsCounterMemo/>
                </div>
                <SettingsColorMemo/>
            </div>
        </>

    );
}
