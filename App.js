import React, {useState} from 'react';
import {StyleSheet, Text, View, Image ,ImageBackground,Button} from 'react-native';
import Header from './components/Header';
// import { Nav } from 'react-navigation';
// import {NavigationContainer} from "@react-navigation/native";
// import {createStackNavigator} from "@react-navigation/stack";

// import {} from './screens';
 

export default function App() {
  
    return (
      <View style={styles.container}>
        <Header title='Timber Tracker'/>
        {/* <ImageBackground source={{ uri: 'https://lh3.googleusercontent.com/vZg67l8ZWFg8EUPCn60UvTtsl7_J09RLv_SU9SLaFlejMFk_UhPtUNfnkN1t9R4_q8X_03YeNfvgtVclMHzbFLJb4YKQ3MoE=s750' }} style={{width: '100%', height: '100%'}}> */}
        <View >
          <View style={styles.loginButtonSection}>
          <Text style={styles.title}>About US</Text>
          <View >
            <Text style={styles.buttonSec}>
            Selling timber without measuring the products is like selling livestock without weighing the animals. Knowing what you have to sell and securing several bids can mean many additional dollars from your timber sales. But with various measurement formulae used globally and the subjective nature of manually measuring timber makes it almost impossible for forest owners to sell their timber and obtain a fair and increased price. Using timber apps like Timbeter, empowers the timber owner to present digital proof of their timber and send to various buyers.
            </Text>
          </View>
            
          </View>
          
        </View>
        
        {/* </ImageBackground> */}
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192D60',

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
    shadowColor: 'white',
    shadowOffset: {width:2,height:5},
    shadowRadius:7,
    shadowOpacity:0,
    margin:20,
    padding:5,
    borderRadius:7,
    paddingHorizontal:20
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
  fontSize:40,
  textAlign:"center",
  fontWeight: 'bold',
  padding:40,
  color:"#A3C2FF"
  // fontFamily:'Arial'

},

buttonSec:{
  fontSize:17,
  // width:200,
  padding:20,
  paddingHorizontal:40,
  justifyContent: 'center',
  backgroundColor:'#5B8F7A',
  textAlign:'center',
  borderRadius:7
}

});

// export default Nav({
//   Home:{
//     screen: App
//   },
//   start:{
//     screen: start
//   }
// });

