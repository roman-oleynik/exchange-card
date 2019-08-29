import {InputValue, PROCESS_INPUT_VALUE, USD_BYN, BYN_USD, CLEAR_INPUT_VALUE} from '../../types/types';
import {ProcessInputValueActionObject} from '../../types/types';

let initialState: InputValue = 0;
function inputValueReducer(state=initialState, action: ProcessInputValueActionObject): InputValue {  // any\
    if (action.type === PROCESS_INPUT_VALUE) {
        const currenciesData = action.currenciesData["USD-BYN"];
        if (action.mode === USD_BYN) {
            return ((action.data as number) * currenciesData).toFixed(2);
        } else if (action.mode === BYN_USD) {
            return ((action.data as number) * 1 / currenciesData).toFixed(2);
        }
        return action.data;
    }
    if (action.type === CLEAR_INPUT_VALUE) {
        return 0;
    }
    return state;
}
    
    


export {inputValueReducer};