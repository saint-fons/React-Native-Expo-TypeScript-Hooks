import * as React from 'react';
import { FC } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const Todo: FC<any> = ({ todo }) => {

    return (
        <View style={styles.todo}>
            <Text>
                {
                    todo.title
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5
    },
});


export default Todo