import React, {useState} from 'react';
import {Button, View,FlatList} from "react-native";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";

const ToDoList = props =>{
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(courseGoals =>[
      ...courseGoals,
      {id: Math.random().toString(), value : goalTitle}]);
    setIsAddMode(false);
  };
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View >
      <Button title={'Add new goal'} onPress={() => setIsAddMode(true)}/>
      <GoalInput addGoalHandler={addGoalHandler}
                 cancel={cancelGoalAdditionHandler}
                 visible={isAddMode}/>
      <FlatList data={courseGoals} renderItem={itemData => (
        <GoalItem title ={itemData.item.value}
                  id={itemData.item.id}
                  onDelete={removeGoalHandler}/>
      )} />

    </View>
  );
};



export default  ToDoList;
