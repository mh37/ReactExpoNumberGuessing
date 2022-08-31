import { StatusBar } from 'expo-status-bar';
import { Modal, Button, StyleSheet, Text, TextInput, Pressable, View } from 'react-native';
import React, {useState} from 'react'

export default function App() {

  const [counter, setCounter] = useState(0)
  const [randNumber, setRandNumber] = useState(0)
  const [topText, setTopText] =  React.useState("Guess a number between 1-100")
  const [inputValue, onChangeValue] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  if(randNumber == 0) {
    setRandNumber(Math.floor(Math.random() * 100) + 1)
  }

  const buttonPressed = () => {
    setCounter(counter + 1)
    if(parseInt(inputValue) < randNumber){
      setTopText("Your guess " + inputValue + " is too low")
    }else if(parseInt(inputValue) > randNumber){
      setTopText("Your guess " + inputValue + " is too high")
    }else{
      setModalVisible(!modalVisible)
    }
  }
  console.log({randNumber})

  return (

    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>You guessed the number in {counter} guesses</Text>
            <Button
              style={styles.buttons}
              onPress={() => setModalVisible(!modalVisible)}
              title="ok"
            />
          </View>
        </View>
      </Modal>

      <Text id="topText">
        {topText}
      </Text>
      <TextInput 
        id="inputValue" 
        style={styles.input}
        onChangeText={onChangeValue}
        value={inputValue}
        keyboardType="numeric"
        placeholder=''
      />
       <Button 
        style = {styles.buttons}
        title="MAKE GUESS" 
        onPress={buttonPressed} 
      />   
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: 250,
    height: 50,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8"
  },
});
