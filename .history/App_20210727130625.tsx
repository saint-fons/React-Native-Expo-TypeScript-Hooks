import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AddTodo from './components/AddTodo';
import NavBar from './components/NavBar';
import Todo from './components/Todo';

export default function App() {
  const [todos, setTodos] = useState<any>([])

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString,
      title: title,
    }

    setTodos(prev => [
      ...prev, {
        id: Date.now().toString(),
        title: title,
      }])
  

  return (
    <View>
      <NavBar
        title={"ToDo app"}
      />
      <View style={styles.container}>
        <AddTodo
          onSubmit={addTodo}
        />
        <View>
          {todos.map(todo => {
            return <Todo
              todo={todo}
              key={todo.id}
            />
          })}
        </View>
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
