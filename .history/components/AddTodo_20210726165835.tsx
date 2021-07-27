import * as React from 'react';
import { FC } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const AddTodo: FC<any> = ({ }) => {
    return (
        <View style={styles.block}>
            <TextInput />
            <Button />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
    },
});


export default AddTodo