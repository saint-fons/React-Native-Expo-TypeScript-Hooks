import * as React from 'react';
import { FC } from 'react';
import { View, StyleSheet, Alert, TextInput, Button } from 'react-native';

const AddTodo: FC<any> = ({ onSubmit }) => {

    const pressHandler = () => {
        onSubmit("Test todo");
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
            />
            <Button
                title='Добавить'
                onPress={pressHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        
    },
    input: {
        height: 70,
        margin: 12,
        borderStyle: "solid",
        borderWidth: 1,
        width: "70%",
        borderColor: "#3949ab"
    },
});


export default AddTodo