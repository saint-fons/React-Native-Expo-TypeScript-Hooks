import * as React from 'react';
import { FC } from "react"
import { StyleSheet, Text, View } from 'react-native';



const NewSampleFile: FC<any> = ({ }) => {
    return (
        <View>
            <Text style={styles.headerTextContainer}>qwe</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTextContainer: {
        justifyContent: 'center',
        color: "#fff"
    }
});


export default NewSampleFile