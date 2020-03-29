import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity ,Alert} from 'react-native';
 
export default class Myproject extends Component {
 
  ButtonClickCheckFunction = () =>{
 
    Alert.alert("Button Clicked")
 
  }
 
  render() {
 
    return (
      
      

      
      <View style={styles.MainContainer}>
      <Text style={styles.HeadingStyle}>Timber Tracker</Text>

       <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={ this.ButtonClickCheckFunction }
       >
 
            <Text style={styles.TextStyle}> Scan Timber </Text>
            
      </TouchableOpacity>

       
      <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={ this.ButtonClickCheckFunction }
       >
 
            <Text style={styles.TextStyle}> View Details </Text>
            
      </TouchableOpacity>
 
      <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={ this.ButtonClickCheckFunction }
       >
 
            <Text style={styles.TextStyle}> Feedback </Text>
            
      </TouchableOpacity>
      
      <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={ this.ButtonClickCheckFunction }
       >
 
            <Text style={styles.TextStyle}> Settings </Text>
            
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={ this.ButtonClickCheckFunction }
       >
 
            <Text style={styles.TextStyle}> About Us</Text>
            
      </TouchableOpacity>
      
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
 
  SubmitButtonStyle: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#1ABC9C',
    borderRadius:50,
    borderWidth: 10,
    borderColor: '#000000'
  },
 
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      textTransform:'uppercase'
  },

  HeadingStyle:{
      color:'#fff',
      textAlign:'center',
      paddingBottom:50,
      textTransform:'uppercase',
      fontSize:30
  }
 
});
 
AppRegistry.registerComponent('Myproject', () => Myproject);