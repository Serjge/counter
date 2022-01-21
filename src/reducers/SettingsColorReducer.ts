export type initialSettingStateType = typeof initialState

const initialState = {

    colorsButton: {
        bgColorButton: '#1ea7fd',
        fontColorButton: '#cccccc',
    },
    colorCounter: {
        maxColorNumber: '#8b0000',
        numberplateColor: '#1ea7fd'
    },
}

export type colorCounterType= { maxColorNumber: string,
    numberplateColor: string}

export const SettingsColorReducer = (state: initialSettingStateType = initialState, action: ActionType): initialSettingStateType => {
    switch (action.type) {
        case 'BACKGROUND_COLOR_BUTTON':
            return {...state, colorsButton: {...state.colorsButton, bgColorButton: action.color}}
        case 'FONT_COLOR_BUTTON':
            return {...state, colorsButton: {...state.colorsButton, fontColorButton: action.color}}
        case 'MAX_NUMBER_COLOR':
            return {...state, colorCounter: {...state.colorCounter, maxColorNumber: action.color}}
        case "NUMBERPLATE_COLOR":
            return {...state, colorCounter: {...state.colorCounter, numberplateColor: action.color}}
        default:
            return state
    }
}

export const BackgroundColorAC = (color: string) => {
    return {
        type: "BACKGROUND_COLOR_BUTTON",
        color: color
    } as const
}
export const FontColorButtonAC = (color: string) => {
    return {
        type: "FONT_COLOR_BUTTON",
        color: color
    } as const
}
export const MaxColorNumberAC = (color: string) => {
    return {
        type: "MAX_NUMBER_COLOR",
        color: color
    } as const
}
export const NumberplateColorAC = (color: string) => {
    return {
        type: "NUMBERPLATE_COLOR",
        color: color
    } as const
}

export type ActionType = ReturnType<typeof BackgroundColorAC>
    | ReturnType<typeof FontColorButtonAC>
    | ReturnType<typeof MaxColorNumberAC>
    | ReturnType<typeof NumberplateColorAC>