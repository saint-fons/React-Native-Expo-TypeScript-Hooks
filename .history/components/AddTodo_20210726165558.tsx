import * as React from 'react';
import { FC } from 'react';
import { View ,StyleSheet, Text,  } from 'react-native';

const AddTodo: FC<any> = ({  }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 50,
        alignItems: 'center',
        justifyContent: "flex-end",
        color: '#000',
        backgroundColor: '#3949ab'
    },
    text: {
        color: 'white'
    }
});


export default AddTodo