import {CurrenciesData, CurrenciesDataActionObject, CURRENCIES_DATA_LOADED} from '../../types/types';

let initialState: CurrenciesData = {"USD-BYN": 0};
function currenciesDataReducer(state=initialState, action: CurrenciesDataActionObject): CurrenciesData {  // any\
    if (action.type === CURRENCIES_DATA_LOADED) {
        let newState: CurrenciesData = {"USD-BYN": 0}
        newState["USD-BYN"] = action.data["USD-BYN"];
        return newState;
    } 
    return state;
}
    
    


export {currenciesDataReducer};