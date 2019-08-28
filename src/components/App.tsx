import React from 'react';

import { Provider } from 'react-redux';

import { store } from '../store/configuredStore';

import ExchangeCard from './ExchangeCard';


class AppContainer extends React.Component {
  render() {
    return <Provider store={store}>
        <ExchangeCard />
      </Provider>
  }
}

export default AppContainer;
