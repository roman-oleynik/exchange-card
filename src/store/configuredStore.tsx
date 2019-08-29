
import { exchangeModeReducer } from '../redux/reducers/exchangeModeReducer';
import { inputValueReducer } from '../redux/reducers/inputValueReducer';
import { createStore, combineReducers } from 'redux';
import { currenciesDataReducer } from '../redux/reducers/currenciesDataReducer';


const rootReducer = combineReducers({
    currenciesData: currenciesDataReducer, 
    exchangeMode: exchangeModeReducer,
    inputValue: inputValueReducer
});

const store = createStore(rootReducer);

export {store};