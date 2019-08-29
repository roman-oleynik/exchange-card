import React from 'react';
import {connect} from 'react-redux';

import './ExchangeCard.css';

import {AppState, InputValue, CurrenciesData} from '../types/types';
import {ACT_SWITCH_EXCHANGE_MODE, ACT_PROCESS_INPUT_VALUE, ACT_CURRENCIES_DATA_LOADED} from '../redux/actions/actions';

import axios from 'axios';

import {USD_BYN, BYN_USD} from '../types/types'; 

interface IProps {
    currenciesData: CurrenciesData,
    exchangeMode: typeof USD_BYN | typeof BYN_USD,
    outputValue: InputValue,
    dispatch: any
}

class ExchangeCard extends React.Component<IProps> {
    public componentWillMount = () => {
        axios.get('http://localhost:4000/data', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
            }).then((response) => {
                this.props.dispatch(ACT_CURRENCIES_DATA_LOADED(response.data));
                console.log(this.props.currenciesData)
            })
    
    }
    private inputValue: InputValue = "";
    public clearInputValue = () => {
        this.inputValue = "";
        let {value}: any = this.refs;
        value = this.inputValue;
    };
    public switchExchangeMode = () => {
        this.props.dispatch(ACT_PROCESS_INPUT_VALUE(0, this.props.exchangeMode, this.props.currenciesData));
        this.props.dispatch(ACT_SWITCH_EXCHANGE_MODE(this.props.exchangeMode));
        this.clearInputValue();
    };
    public processInputValue = (EO: any) => {  
        this.inputValue = EO.target.value;        
        this.props.dispatch(ACT_PROCESS_INPUT_VALUE(EO.target.value, this.props.exchangeMode, this.props.currenciesData));
    };
    public render() {
        return this.props.currenciesData ? <section className="Exchange-Card-Container">
            <h1 className="Exchange-Card-Container__Title">USD-BYN Converter</h1>
            <div className="Exchange-Card-Container-Content">
                <div className="Exchange-Card-Container-Content__Fields">
                    <div className="Input-Field">
                        <input type="number" ref="value" value={this.inputValue} onChange={this.processInputValue}/>
                        <span>{this.props.exchangeMode === USD_BYN ? "USD": "BYN"}</span>
                    </div>

                    <div className="Output-Field">
                        <span>{this.props.outputValue}</span>
                        <span>{this.props.exchangeMode === USD_BYN ? "BYN": "USD"}</span>
                    </div>
                </div>
                
                <input type="button" value="Swap" onClick={this.switchExchangeMode} />
            </div>
            
        </section> : <div>Loading...</div>
    }
}

let mapStateToProps = (state: AppState) => {
    return {
        currenciesData: state.currenciesData,
        exchangeMode: state.exchangeMode,
        outputValue: state.inputValue
    }
};

export default connect(mapStateToProps)(ExchangeCard);