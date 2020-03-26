import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

const start = (props) => {
    return(
        <View style={styles.screen}>
            <Text>Login Page</Text>

        </View>
    );
}; 

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    }
});

export default start;