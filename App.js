import React, {useState} from 'react';
import {StyleSheet, Text, View, Image ,ImageBackground,Button} from 'react-native';
import Header from './components/Header';
import { Nav } from 'react-navigation';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {start,login} from './screens';
 

export default function App() {
  
    return (
      <View style={styles.container}>
        <Header title='Timber Tracker'/>
        <ImageBackground source={{ uri: 'https://lh3.googleusercontent.com/vZg67l8ZWFg8EUPCn60UvTtsl7_J09RLv_SU9SLaFlejMFk_UhPtUNfnkN1t9R4_q8X_03YeNfvgtVclMHzbFLJb4YKQ3MoE=s750' }} style={{width: '100%', height: '100%'}}>
        <View >
          <View style={styles.loginButtonSection}>
          <Text style={styles.title}>Main Menu</Text>
          <View >
            <View style={styles.buttonSec}><Button title="Scan Timber" onPress={()  => {} }/></View>
            <View style={styles.buttonSec}><Button title="View Details" onPress={() => {}}/></View>
            <View style={styles.buttonSec}><Button title="Feedback" onPress={() => {} }/></View>
            <View style={styles.buttonSec}><Button title="Settings" onPress={() => {}} /></View>
            <View style={styles.buttonSec}><Button title="About Us" onPress={() => {}} /></View>
          </View>
            
          </View>
          
        </View>
        
        </ImageBackground>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',

  },
  // statusbar: {
  //   backgroundColor: '#556b2f',
  //   height: 100,
  //   justifyContent: 'center',
  // },

  loginButtonSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign:'center',
    shadowColor: 'black',
    shadowOffset: {width:2,height:5},
    shadowRadius:7,
    shadowOpacity:1,
    margin:20,
    padding:5,
    borderRadius:7,
    paddingHorizontal:45
    // borderColor:'black'
  
 },
//  head:{
//   backgroundColor: '#556b2f',
//   paddingTop: 10,
//   paddingLeft:85 ,
//   fontSize: 30,
//   fontWeight: 'bold',
//   textTransform: 'uppercase',
//   justifyContent: 'center',
//   height: 60
//  },
 backgroundImage:{
  width: 200,
},
 
title:{
  fontSize:30,
  textAlign:"center",
  fontWeight: 'bold',
  padding:40,
  // fontFamily:'Arial'

},

buttonSec:{
  fontSize:30,
  // width:200,
  padding:20,
  paddingHorizontal:40,
    justifyContent: 'center',
  backgroundColor:'#FFF',
  textAlign:'center'
}

});

export default Nav({
  Home:{
    screen: App
  },
  start:{
    screen: start
  }
});

