import {SWITCH_EXCHANGE_MODE, BYN_USD, PROCESS_INPUT_VALUE, CLEAR_INPUT_VALUE, CurrenciesData, CurrenciesDataActionObject, CURRENCIES_DATA_LOADED} from '../../types/types';

import {CurrenciesExchangeMode, InputValue} from '../../types/types';

import {SwitchExchangeModeActionObject, ProcessInputValueActionObject, ClearInputValueActionObject} from '../../types/types';

export function ACT_SWITCH_EXCHANGE_MODE (data: CurrenciesExchangeMode = BYN_USD): SwitchExchangeModeActionObject {
    return {
        type: SWITCH_EXCHANGE_MODE,
        data
    };
}

export function ACT_PROCESS_INPUT_VALUE (data: InputValue = 0, mode: CurrenciesExchangeMode, currenciesData: CurrenciesData): ProcessInputValueActionObject {
    return {
        type: PROCESS_INPUT_VALUE,
        data,
        mode,
        currenciesData
    };
}

export function ACT_CLEAR_INPUT_VALUE (data: InputValue = 0): ClearInputValueActionObject {
    return {
        type: CLEAR_INPUT_VALUE,
        data
    };
}

export function ACT_CURRENCIES_DATA_LOADED (data: CurrenciesData): CurrenciesDataActionObject {
    return {
        type: CURRENCIES_DATA_LOADED,
        data
    };
}
