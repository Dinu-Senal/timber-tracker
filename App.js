import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList} from 'react-native';


import GoalInput from './components/ViewDetails';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  console.log(courseGoals);
   const addGoalHandler = goalTitle =>{
    if (goalTitle.length === 0){
      return
    }
    //setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [...currentGoals, 
    {id: Math.random().toString(), value: goalTitle}
    ]);
    setIsAddMode(false);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button color='#3cb371' title="View Details" onPress={() => setIsAddMode(true)} />
      <GoalInput 
        visible={isAddMode} 
       
        onCancel={cancelGoalAdditionHandler} />

    </View>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    padding : 50
  },

  
});