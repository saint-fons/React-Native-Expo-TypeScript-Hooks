import * as React from 'react';
import { FC } from "react"
import { StyleSheet, Text, View } from 'react-native';



const NewSampleFile: FC<any> = ({ }) => {
    return (
        <View>
            <Text style={styles.container}>
                qwe
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        alignItems: 'center',
        backgroundColor: '#000'
    }
});


export default NewSampleFile