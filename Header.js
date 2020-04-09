import React, {useState} from 'react';
import {StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{ props.title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#556b2f',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#171717',
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase'
    }
});

export default Header;