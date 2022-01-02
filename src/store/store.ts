import {combineReducers, createStore} from "redux";
import {loadState, saveState} from "../utils/localStorage-utils";
import {CounterReducer} from "../reducers/CounterReducer";
import {SettingsColorReducer} from "../reducers/SettingsColorReducer";

let rootReducer=combineReducers({
    counter: CounterReducer,
    settingsColors: SettingsColorReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

export let store=createStore(rootReducer, loadState())

store.subscribe(()=>{
    saveState({
        counter: store.getState().counter,
        settingsColors: store.getState().settingsColors
    })
})