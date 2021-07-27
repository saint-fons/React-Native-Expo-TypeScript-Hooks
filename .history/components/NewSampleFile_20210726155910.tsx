import * as React from 'react';
import { FC } from "react"
import { StyleSheet, Text, View } from 'react-native';



const NewSampleFile: FC<any> = ({ }) => {
    return (
        <View style={styles.navbar>
            <Text style={styles.text}>
                qweasdxczvqew
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: "flex-end",
        color: '#000'
    },
    text: {}
});


export default NewSampleFile