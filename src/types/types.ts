
export const SWITCH_EXCHANGE_MODE = "SWITCH_EXCHANGE_MODE";
export const PROCESS_INPUT_VALUE = "PROCESS_INPUT_VALUE";
export const CLEAR_INPUT_VALUE = "CLEAR_INPUT_VALUE";
export const CURRENCIES_DATA_LOADED = "CURRENCIES_DATA_LOADED";

export const USD_BYN = "USD_BYN";
export const BYN_USD = "BYN_USD";

export type InputValue = number | string;

export type CurrenciesExchangeMode = typeof USD_BYN | typeof BYN_USD;


export type CurrenciesData = number;

export interface SwitchExchangeModeActionObject {
    type: typeof SWITCH_EXCHANGE_MODE,
    data: CurrenciesExchangeMode
}

export interface ProcessInputValueActionObject {
    type: typeof PROCESS_INPUT_VALUE,
    data: InputValue,
    mode: CurrenciesExchangeMode,
    currenciesData: CurrenciesData
}

export interface ClearInputValueActionObject {
    type: typeof CLEAR_INPUT_VALUE,
    data: InputValue
}

export interface CurrenciesDataActionObject {
    type: typeof CURRENCIES_DATA_LOADED,
    data: CurrenciesData
}

interface IState {
    currenciesData: CurrenciesData,
    exchangeMode: CurrenciesExchangeMode,
    inputValue: InputValue
}

export type AppState = IState;
