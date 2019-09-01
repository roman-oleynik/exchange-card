import {CurrenciesData, CurrenciesDataActionObject, CURRENCIES_DATA_LOADED} from '../../types/types';

let initialState: CurrenciesData = 0;
function currenciesDataReducer(state=initialState, action: CurrenciesDataActionObject): CurrenciesData { 
    if (action.type === CURRENCIES_DATA_LOADED) {
        let newState: CurrenciesData = 0;
        newState = action.data;
        return newState;
    } 
    return state;
}
    
    


export {currenciesDataReducer};