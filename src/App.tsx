import React from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {SettingsCounter} from "./SettingsCounter/SettingsCounter";
import {SettingsColor} from "./SettingsColor/SettingsColor";

export function App() {

    return (
        <div>
            <div className={'wrapper'}>
                <Counter/>
                <SettingsCounter/>
            </div>
            <SettingsColor/>
        </div>
    );
}


