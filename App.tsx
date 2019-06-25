import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createAppContainer } from 'react-navigation';

import { store, persistor } from './src/redux/store';
import { AppNavigation } from './src/navigation';
import { StyleSheet } from 'react-native';
import { THEME_COLORS } from './src/config/colors';

const AppContainer = createAppContainer(AppNavigation);

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer style={styles.container} />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.appBackgroundColor
  }
});
