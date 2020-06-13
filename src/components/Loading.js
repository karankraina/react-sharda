import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export default function App({message}) {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  text: {
    textAlign: 'center',
  },
});
