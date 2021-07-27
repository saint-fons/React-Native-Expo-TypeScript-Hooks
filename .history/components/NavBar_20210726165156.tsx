import * as React from 'react';
import { FC } from "react"
import { StyleSheet, Text, View } from 'react-native';



const NavBar: FC<any> = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>
                qweasdxczvqew
                {props.title}
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


export default NavBar