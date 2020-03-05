import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Modal} from "react-native";

const GoalInput = props =>{
  const [enterGoal, setEnterGoal] = useState('');
  const  goalInputHandler = (enterText) => {
    setEnterGoal(enterText);
  };
  const addGoalHandler = () => {
    props.addGoalHandler(enterGoal);
    setEnterGoal('');
  };

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput placeholder={"Course Goal"}
                   style={styles.input}
                   onChangeText={goalInputHandler}
                   value = {enterGoal} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title={"CANCEL"} color="red" onPress={props.cancel} />
          </View>
          <View style={styles.button}>
            <Button title={"ADD"} onPress={addGoalHandler}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default  GoalInput;
