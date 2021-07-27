import * as React from 'react';
import { FC } from 'react';
import { View, StyleSheet, Alert, TextInput, Button } from 'react-native';

const AddTodo: FC<any> = ({ }) => {
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
            />
            <Button
                title='Добавить'
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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