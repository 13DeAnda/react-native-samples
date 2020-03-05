import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import ToDoList from "./components/toDoList/ToDoList";

export default function App() {

  return (
    <View style ={styles.screen} >
      <Text> TODO LIST </Text>
      <ToDoList/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
