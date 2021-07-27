import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddTodo from './components/AddTodo';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar
        title={"ToDo app"}
      />
      <AddTodo
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
