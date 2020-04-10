import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

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
 
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return  currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button color='#3cb371' title="Add New Feedback" onPress={() => setIsAddMode(true)} />
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoalAdditionHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}    
        renderItem={itemData => 
          <GoalItem 
            id={itemData.item.id} 
            onDelete={removeGoalHandler}
            title={itemData.item.value} />}
      
      />

    </View>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    padding : 50
  },

  
});

 // <View style={{padding: 50,flexDirection: 'row',width:'80%',height:300,justifyContent:'space-between', alignItems:'center'}}>
    //   <View style={{backgroundColor:'red',width: 100,height:100,justifyContent:'center',alignItems:'center'}}>
    //     <Text>1</Text>
    //   </View>
    //   <View style={{backgroundColor:'blue',flex:1,justifyContent:'center',alignItems:'center'}}>
    //     <Text>2</Text>
    //   </View>
    //   <View style={{backgroundColor:'green',flex:2,justifyContent:'center',alignItems:'center'}}>
    //     <Text>3</Text>
    //   </View>
    // </View>