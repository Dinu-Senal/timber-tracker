import React, { useState } from 'react'
import {View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText =>{
        setEnteredGoal(enteredText);
      };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };
   
    return(
    <Modal visible={props.visible} animationType="fade">
        <View style={styles.inputContainer}>
            <TextInput 
                
                placeholder='Enter your feedback'
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />  
           
            <View style={styles.ButtonContainer}>
                <View style={styles.Button} >
                <Button title="SUBMIT"
            
                    color="#3cb371"
                    onPress={addGoalHandler} />
                </View>
                <View style={styles.Button} >
                <Button title=" CANCEL"
                    onPress={props.onCancel}
                    color="#3cb371"
                    />
                </View>
            </View>
        </View>
    </Modal>
    );
}; 

const styles = StyleSheet.create({
    inputContainer: {
        //flexDirection:'row', default is column
        justifyContent:'center',
        flex: 1,
        alignItems:'center',
        borderRadius:20,
        
        
      },
    input:{
        width:'80%',
        borderColor: '#5B5F5D',
        borderWidth:1,
        padding:10,
        marginBottom:35,
        width:'80%',
        marginTop:10,
        borderRadius:40
      },

    SubmitButtonStyle2: {
        width:'40%',
        paddingTop:10,
        paddingBottom:15,
         
        padding:10,
        marginBottom:10
      },
     
    SubmitButtonStyle1: {
        width:'40%',
        paddingTop:0,
        paddingBottom:20,
        
        padding:10,
        marginBottom:10
      },

    ButtonContainer: {
        flexDirection: 'column',
        justifyContent : 'space-between',
        width: '50%'
        
    },

    Button: {
        width: '90%',
        borderColor:'#3cb371',
        borderWidth:8,
        borderRadius: 30,
        marginBottom: 20,
        marginTop: 0,
        marginLeft:10
    }
      
})

export default GoalInput;