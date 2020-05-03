import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList} from 'react-native';

import GoalInput1 from './components/ViewDetails';

export default function App() {
  const [courseGoals1, setCourseGoals1] = useState([]);
  const [isAddMode1, setIsAddMode1] = useState(false)

  console.log(courseGoals1);
   const addGoalHandler1 = goalTitle =>{
    if (goalTitle.length === 0){
      return
    }//setCourseGoals1([...courseGoals1, enteredGoal1]);
    setCourseGoals1(currentGoals1 => [...currentGoals1, 
    {id: Math.random().toString(), value: goalTitle1}
    ]);
    setIsAddMode1(false);
  };

  const cancelGoalAdditionHandler1 = () => {
    setIsAddMode1(false);
  }

  return (
    <View style={styles.screen}>
      <Button color='#3cb371' title="View Details" onPress={() => setIsAddMode1(true)} />
      <GoalInput1 
        visible={isAddMode1} 
        onCancel={cancelGoalAdditionHandler1} />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding : 50
  }, 
});
