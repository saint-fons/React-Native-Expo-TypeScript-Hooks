import * as React from 'react';
import { FC } from 'react';
import { View, StyleSheet, Alert , TextInput, Button } from 'react-native';

const AddTodo: FC<any> = ({ }) => {
    return (
        <View style={styles.block}>
            <TextInput />
            <Button title='Добавить'
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row'
    },
});


export default AddTodo