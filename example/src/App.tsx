import * as React from 'react';
import '../environments';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '@whitelabelnews/state-manager';

export default function App() {
  React.useEffect(() => {
    console.log('BRAND: ', store.getState().news);
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Result: {BRAND}</Text>
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
