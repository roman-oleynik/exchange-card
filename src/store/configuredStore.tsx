
import { exchangeModeReducer } from '../redux/reducers/exchangeModeReducer';
import { inputValueReducer } from '../redux/reducers/inputValueReducer';
import { createStore, combineReducers } from 'redux';


const rootReducer = combineReducers({
    exchangeMode: exchangeModeReducer,
    inputValue: inputValueReducer
});

const store = createStore(rootReducer);

export {store};