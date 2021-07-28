A simple to-do list. With delete and add functions. Are used; TypeScript, React Native, Hooks

## Instalation

> Warning! Expo package required. To install - follow the instructions [Expo](https://docs.expo.io/)

- `yarn install`
- `yarn start`

## Usage

Add Todo:
```
const addTodo = title => {
    setTodos(prev => [
      ...prev, {
        id: Date.now().toString(),
        title,
      }])
  }
```

Remove Todo:
```
const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('')
        } else {
            Alert.alert("Название дела не может быть пустым")
        }
    }
```

Types:
```
export interface INavBar {
    title: string;
}

export interface IAddTodo {
    onSubmit: Dispatch<React.SetStateAction<string>>;
}

export interface ITodo {
    todo: object;
    onRemove: Dispatch<React.SetStateAction<string>>;
}
```
