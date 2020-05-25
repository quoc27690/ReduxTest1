import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React, {Component} from 'react';

import {createStore} from 'redux';

import {Provider} from 'react-redux';

const defaultState = {value: 0, highlight: false};

const reducer = (state = defaultState, action) => {
  if (action.type === 'UP') {
    return {value: state.value + 1, highlight: state.highlight};
  }
  if (action.type === 'DOWN') {
    return {value: state.value - 1, highlight: state.highlight};
  }
  if (action.type === 'CHANGE_COLOR') {
    return {value: state.value, highlight: !state.highlight};
  }
  return state;
};

const store = createStore(reducer);

export default class reactNativeReduxTest1 extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => reactNativeReduxTest1);
