import * as React from 'react';
import { FC } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Todo: FC<any> = ({ todo }) => {

    return (
        <TouchableOpacity
            onPress={() => console.log('Pressed', todo.id)}
        >
            <View style={styles.todo}>
                <Text>
                    {
                        todo.title
                    }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10,
    },
});


export default Todo