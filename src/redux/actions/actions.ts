import {SWITCH_EXCHANGE_MODE, BYN_USD, PROCESS_INPUT_VALUE, CLEAR_INPUT_VALUE} from '../../types/types';

import {CurrenciesExchangeMode, InputValue} from '../../types/types';

import {SwitchExchangeModeActionObject, ProcessInputValueActionObject, ClearInputValueActionObject} from '../../types/types';

export function ACT_SWITCH_EXCHANGE_MODE (data: CurrenciesExchangeMode = BYN_USD): SwitchExchangeModeActionObject {
    return {
        type: SWITCH_EXCHANGE_MODE,
        data
    };
}

export function ACT_PROCESS_INPUT_VALUE (data: InputValue = 0, mode: CurrenciesExchangeMode): ProcessInputValueActionObject {
    return {
        type: PROCESS_INPUT_VALUE,
        data,
        mode
    };
}

export function ACT_CLEAR_INPUT_VALUE (data: InputValue = 0): ClearInputValueActionObject {
    return {
        type: CLEAR_INPUT_VALUE,
        data
    };
}
