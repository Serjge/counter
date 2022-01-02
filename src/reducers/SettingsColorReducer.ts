type initialStateType = typeof initialState

const initialState = {

    bgColorButton: '#1ea7fd',
    fontColorButton: '#cccccc',
    maxColorNumber: '#8b0000',
    numberplateColor: '#1ea7fd'
}

export const SettingsColorReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'BACKGROUND_COLOR_BUTTON':
            return {...state, bgColorButton: action.color}
        case 'FONT_COLOR_BUTTON':
            return {...state, fontColorButton: action.color}
        case 'MAX_NUMBER_COLOR':
            return {...state, maxColorNumber: action.color}
        case "NUMBERPLATE_COLOR":
            return {...state, numberplateColor: action.color}
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