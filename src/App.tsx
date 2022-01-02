import React from 'react';
import './App.css';
import {NewCounter} from './NewCounter/NewCounter';
import {NewSettingsCounter} from "./NewSettingsCounter/NewSettingsCounter";
import {NewSettingsColor} from "./NewSettingsColor/NewSettingsColor";

export function App() {

    return (
        <div>
            <div className={'wrapper'}>
                <NewCounter/>
                <NewSettingsCounter/>
            </div>
            <NewSettingsColor/>
        </div>
    );
}


