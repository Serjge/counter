export type initialStateType = typeof initialState

export const initialState = {
    counter: {
        number: 0,
    },
    setting: {
        startNumber: 0,
        maxNumber: 5,
    },
    errors: {
        errorCounter: ''
    },
}

export type SettingType = { startNumber: number, maxNumber: number, }

export const CounterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case 'UPDATE_NUMBER':
            return {...state, counter: {number: action.newNumber}}
        case 'UPDATE_START_NUMBER' :
            return {...state, setting: {...state.setting, startNumber: action.newStartNumber}}
        case 'UPDATE_MAX_NUMBER' :
            return {...state, setting: {...state.setting, maxNumber: action.newMaxNumber}}
        case 'UPDATE_ERROR':
            return {...state, errors: {errorCounter: action.newError}}
        default:
            return state
    }
}

export const UpdateNumberAC = (newNumber: number) => {
    return {
        type: 'UPDATE_NUMBER',
        newNumber: newNumber
    } as const
}
export const UpdateStartNumberAC = (newStartNumber: number) => {
    return {
        type: 'UPDATE_START_NUMBER',
        newStartNumber: newStartNumber
    } as const
}
export const UpdateMaxNumberAC = (newMaxNumber: number) => {
    return {
        type: 'UPDATE_MAX_NUMBER',
        newMaxNumber: newMaxNumber
    } as const
}
export const UpdateErrorAC = (newError: string) => {
    return {
        type: 'UPDATE_ERROR',
        newError: newError
    } as const
}

export type ActionType = ReturnType<typeof UpdateNumberAC>
    | ReturnType<typeof UpdateStartNumberAC>
    | ReturnType<typeof UpdateMaxNumberAC>
    | ReturnType<typeof UpdateErrorAC>

