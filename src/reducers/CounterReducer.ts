type initialStateType = typeof initialState

const initialState = {
    number: 0,
    startNumber: 0,
    maxNumber: 5,
    error: '',
}

export const CounterReducer = (state:initialStateType=initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'UPDATE_NUMBER':
            return {...state, number: action.newNumber}
        case 'UPDATE_START_NUMBER' :
            return {...state, startNumber: action.newStartNumber}
        case 'UPDATE_MAX_NUMBER' :
            return {...state, maxNumber: action.newMaxNumber}
        case 'UPDATE_ERROR':
            return {...state, error: action.newError}
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

