import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewSampleFile from './components/NewSampleFile';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTextContainer}>123</Text>
      <StatusBar style="auto" />
      <NewSampleFile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextContainer: {
    justifyContent: 'center',
    color: "#fff"
  }
});
