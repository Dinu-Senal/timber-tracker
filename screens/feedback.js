import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';
export default function Feedback( { navigation } ) {

    alertMessage = () => {
        alert("RATED");
    }

  return (
    <View style={styles.container}>
        <Text style={styles.Title}>Feedback</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    textAlign:'center', 
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: -20,
    textTransform: 'uppercase',
    color: '#47DFC2',
  }
});
