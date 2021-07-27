import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import AddTodo from './components/AddTodo';
import NavBar from './components/NavBar';
import Todo from './components/Todo';

export default function App() {
  const [todos, setTodos] = useState<any>([])

  const addTodo = title => {
    setTodos(prev => [
      ...prev, {
        id: Date.now().toString(),
        title,
      }])
  }

  /* Функция удаления туду */
  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
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
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todo={item}
            onRemove={removeTodo}
          />}
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
