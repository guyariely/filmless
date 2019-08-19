import React from 'react';
import { StyleSheet, View, Text, Button } from "react-native";
import colors from '../../../Constants/colors';

const Options = props => {

  const { showWatchedMovies, setShowWatchedMovies, netflixOnly, setNetflixOnly } = props.screenProps; 

  return (
    <View style={styles.container}>
      <Text style={styles.label}>SHOW WATCHED MOVIES</Text>
      <View style={styles.buttonsContainer}>
        <View style={
          showWatchedMovies ?
          [styles.button, styles.buttonActive] :
          styles.button
        }>
          <Button 
            title="YES" 
            color={colors.text} 
            onPress={() => setShowWatchedMovies(true)} 
          />
        </View>
        <View style={
          showWatchedMovies ?
          styles.button :
          [styles.button, styles.buttonActive]
        }>
          <Button 
            title="NO" 
            color={colors.text} 
            onPress={() => setShowWatchedMovies(false)} 
          />
        </View>
      </View> 

      <Text style={styles.label}>NETFLIX ONLY</Text>
      <View style={styles.buttonsContainer}>
        <View style={
          netflixOnly ?
          [styles.button, styles.buttonActive] :
          styles.button
        }>
          <Button 
            title="YES" 
            color={colors.text} 
            onPress={() => setNetflixOnly(true)} 
          />
        </View>
        <View style={
          netflixOnly ?
          styles.button :
          [styles.button, styles.buttonActive]
        }>
          <Button 
            title="NO" 
            color={colors.text} 
            onPress={() => setNetflixOnly(false)} 
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingVertical: 20
  },
  label: {
    color: colors.inputLabel, 
    fontSize: 18,
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 21
  },
  button: {
    paddingVertical: 3,
    width: 125,
    borderColor: colors.base01,
    borderWidth: 1,
    borderRadius: 5
  },
  buttonActive: {
    backgroundColor: colors.base01,
    borderColor: colors.primary
  }
});

export default Options;