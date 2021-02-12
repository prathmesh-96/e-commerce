/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Navigator from './src/navigator';
import { Provider as PaperProvider } from 'react-native-paper';
import reducer from './src/redux/reducer';
import sagas from './src/redux/sagas';
import theme from './src/theme';
import { SafeAreaView } from 'react-native';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Navigator />
        </PaperProvider>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
