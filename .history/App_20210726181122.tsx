import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddTodo from './components/AddTodo';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <View>
      <NavBar
        title={"ToDo app"}
      />
      <View style={styles.container}>
        <AddTodo
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
