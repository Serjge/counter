import {StateType} from "./App"

export const UPDATE_NUMBER = 'UPDATE_NUMBER'
export const UPDATE_START_NUMBER = 'UPDATE_START_NUMBER'
export const UPDATE_MAX_NUMBER = 'UPDATE_MAX_NUMBER'
export const UPDATE_ERROR = 'UPDATE_ERROR'
export const UPDATE_STATE = 'UPDATE_STATE'

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
export const UpdateStateAC = (newState: StateType) => {
    return {
        type: 'UPDATE_STATE',
        newState: newState
    } as const
}

export type ActionType = ReturnType<typeof UpdateNumberAC>
    | ReturnType<typeof UpdateStartNumberAC>
    | ReturnType<typeof UpdateMaxNumberAC>
    | ReturnType<typeof UpdateErrorAC>
    | ReturnType<typeof UpdateStateAC>

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case UPDATE_NUMBER:
            return {...state, number: action.newNumber}
        case UPDATE_START_NUMBER :
            return {...state, startNumber: action.newStartNumber}
        case UPDATE_MAX_NUMBER :
            return {...state, maxNumber: action.newMaxNumber}
        case UPDATE_ERROR:
            return {...state, error: action.newError}
        case UPDATE_STATE:
            return state = action.newState

        default:
            return state
    }
}