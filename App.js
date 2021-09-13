import React from 'react';
import { Provider } from 'react-redux';
import Store from "./src/redux/store";

import MainStackNavigator from './src/component/navigator/AppNavigator';

export default function App() {
  return (
    <Provider store={Store}>
      <MainStackNavigator />
    </Provider>
  )
}
