import React, {useState} from 'react';
import {StyleSheet, Text, View, Image ,ImageBackground,Button} from 'react-native';
import Header from './components/Header';
// import { Nav } from 'react-navigation';
// import {NavigationContainer} from "@react-navigation/native";
// import {createStackNavigator} from "@react-navigation/stack";

// import {} from './screens';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function AboutUs() {
  
    return (
      
      <View style={styles.container}>
        <Header title='Timber Tracker'/>
        {/* <ImageBackground source={{ uri: 'https://lh3.googleusercontent.com/vZg67l8ZWFg8EUPCn60UvTtsl7_J09RLv_SU9SLaFlejMFk_UhPtUNfnkN1t9R4_q8X_03YeNfvgtVclMHzbFLJb4YKQ3MoE=s750' }} style={{width: '100%', height: '100%'}}> */}
        <View >
          <View style={styles.loginButtonSection}>
          <Text style={styles.title}>About US</Text>
          <View >
            <Text style={styles.content}>
            TimberTracker is a software that track and recognize the exact wood and give details of that wood. And also, there is a database that user can save important data about specific wood. The aims and priorities of this project will be discussed in this section. In this chapter describes about the minimum resource requirements.
            </Text>
            <Text>
            
            </Text>
            
            <Text style={styles.content1}>
            CONTACT US            FOLLOW US
            iit@gmail.com         Instagram
            
            Timber_Tracker@gmail.com
            </Text>
            <Text>
            
            </Text>
            <Text style={styles.content2}>
            Rate us
            
            </Text>
            <Text>
            
            </Text>
            <View style={{alignItems:'center'}}>
  <Stars
    rating={2.5}
    count={5}
    half={true}
    starSize={20}
    fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
    emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
  />
</View>

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
    backgroundColor: '#0F131B',

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
  padding:30,
  color:"#A3C2FF"
  // fontFamily:'Arial'

},

content:{
  fontSize:17,
  // width:200,
  padding:20,
  paddingHorizontal:20,
  justifyContent: 'center',
  backgroundColor:'#5B8F7A',
  textAlign:'center',
  shadowOpacity:0.5,
  borderRadius:7
},

content1:{
  fontSize:15,
  // width:200,
  padding:10,
  paddingHorizontal:3,
  justifyContent: 'center',
  backgroundColor:'#848C9C',
  textAlign:'center',
  shadowOpacity:0.5,
  borderRadius:7
},
content2:{
  fontSize:15,
  // width:200,
  padding:10,
  paddingHorizontal:3,
  justifyContent: 'center',
  backgroundColor:'#E74C3C',
  textAlign:'center',
  shadowOpacity:0.5,
  borderRadius:7
},
myStarStyle: {
  color: 'yellow',
  width:20,
  backgroundColor: 'transparent',
  textShadowColor: 'black',
  textShadowOffset: {width:50, height:50},
  textShadowRadius: 2,
},
myEmptyStarStyle: {
  color: 'white',
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

