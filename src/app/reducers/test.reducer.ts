import { TEST_ACTION } from '../actions/test.action'

export const testReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case TEST_ACTION:
            return {
                ...action.payload
            }
        default:
            return state
    }
}