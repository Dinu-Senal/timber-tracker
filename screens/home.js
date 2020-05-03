import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Button from './Button';
export default function Home( { navigation } ) {

  
  const pressHandler_01 = () => {
    navigation.navigate('Predictions')
  }
  const pressHandler_02 = () => {
    navigation.navigate('View_Details')
  }
  const pressHandler_03 = () => {
    navigation.navigate('Feedback')
  }
  const pressHandler_04 = () => {
    navigation.navigate('About_Us')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Button
      text='     PREDICT     ' 
      onPress={pressHandler_01}
      />
      <Button
      text=' VIEW DETAILS' 
      onPress={pressHandler_02}
      />
      <Button
      text='   FEEDBACK    '
      onPress={pressHandler_03} 
      />
      <Button
      text='   ABOUT US   ' 
      onPress={pressHandler_04}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
