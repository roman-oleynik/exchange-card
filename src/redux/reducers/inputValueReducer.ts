import {InputValue, PROCESS_INPUT_VALUE, USD_BYN, BYN_USD, CLEAR_INPUT_VALUE} from '../../types/types';
import {ProcessInputValueActionObject} from '../../types/types';

let initialState: InputValue = 0;
function inputValueReducer(state=initialState, action: ProcessInputValueActionObject): InputValue {  // any\
    if (action.type === PROCESS_INPUT_VALUE) {
        if (action.mode === USD_BYN) {
            return (action.data as number)*2.045;
        } else if (action.mode === BYN_USD) {
            return (action.data as number)*1/2.045;
        }
        return action.data;
    }
    if (action.type === CLEAR_INPUT_VALUE) {
        return 0;
    }
    return state;
}
    
    


export {inputValueReducer};