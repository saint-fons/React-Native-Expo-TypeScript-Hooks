import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AddTodo from './components/AddTodo';
import NavBar from './components/NavBar';

export default function App() {
  const [todos, setTodos] = useState<any>([])

  const addTodo = (title: string) => {
    const newTodo = {
      id: Date.now().toString,
      title: title,
    }

    setTodos(prev => [
      ...prev, {
        id: Date.now().toString(),
        title: title,
      }])
  }

  return (
    <View>
      <NavBar
        title={"ToDo app"}
      />
      <View style={styles.container}>
        <AddTodo
          onSubmit={addTodo}
        />
      </View>
      <View>
        {todo.map(todo => {
          return <Text>
            {todo.title}
          </Text>
        })}
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
