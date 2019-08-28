import {CurrenciesExchangeMode, BYN_USD, USD_BYN} from '../../types/types';
import {SwitchExchangeModeActionObject} from '../../types/types';

let initialState: CurrenciesExchangeMode = USD_BYN;
function exchangeModeReducer(state=initialState, action:SwitchExchangeModeActionObject): CurrenciesExchangeMode {  // any\
    if (action.data === BYN_USD) {
        state = USD_BYN;
    } else if (action.data === USD_BYN) {
        state = BYN_USD;
    } 
    return state;
}
    
    


export {exchangeModeReducer};