import * as React from 'react';
import '../environments';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '@whitelabelnews/state-manager';
import TextBrand from './Text';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TextBrand />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
