import * as react from 'react'
import { FC } from "react"
import { StyleSheet, Text, View } from 'react-native';



const NewSampleFile: FC<any> = ({ }) => {
    return (
        <Text style={styles.headerTextContainer}>qwe</Text>
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