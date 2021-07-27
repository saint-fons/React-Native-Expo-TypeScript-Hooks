import * as React from 'react';
import { FC } from 'react';
import { View, StyleSheet, Alert, TextInput, Button } from 'react-native';

const AddTodo: FC<any> = ({ }) => {
    return (
        <View style={styles.block}>
            <Button
                title='Добавить'
                onPress={() => Alert.alert('Simple Button pressed')}
            />
            <TextInput
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row-reverse'
    },
    styleButton: {
        width: "50%"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: "50%"
    },
});


export default AddTodo