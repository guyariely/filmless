import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import colors from '../Constants/colors';

const SettingsScreen = () => {

  const [counter, setCounter] = useState(null);

  useEffect(() => {
    const getCounter = async () => {
      try {
        const counter =  await AsyncStorage.getItem('counter');
        if (counter) {
          return setCounter(JSON.parse(counter));
        }
        setCounter(0);
      } 
      catch (error) {
        console.log(error);
      }
    };
    getCounter();
  },[])

  const updateCounter = async () => {
    setCounter(counter + 1);
    try {
      await AsyncStorage.setItem('counter', JSON.stringify(counter + 1));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SETTINGS</Text>
      <Button 
        color={colors.text} 
        title={"Counter: " + counter} 
        onPress={updateCounter}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.base01
  },
  title: {
    textAlign: 'center',
    color: colors.text01,
    fontWeight: '600'
  }
});

export default SettingsScreen;
