import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import AddTodo from './components/AddTodo';
import NavBar from './components/NavBar';
import Todo from './components/Todo';

export default function App() {
  const [todos, setTodos] = useState<any>([])

  const addTodo = title => {
    /* const newTodo = {
      id: Date.now().toString,
      title: title,
    } */

    setTodos(prev => [
      ...prev, {
        id: Date.now().toString(),
        title,
      }])
  }

  return (
    <ScrollView>
      <NavBar
        title={"ToDo app"}
      />
      <View style={styles.container}>
        <AddTodo
          onSubmit={addTodo}
        />

        <FlatList
          data={todos}
          renderItem={({ item }) => <Todo todo= { item } />}
        />
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
