import * as React from 'react';
import '../environments';
import { StyleSheet, View, Text } from 'react-native';
import { test } from '@whitelabelnews/state-manager';

export default function App() {
  React.useEffect(() => {
    console.log('BRAND: ', BRAND);
    console.log(test());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {BRAND}</Text>
    </View>
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
