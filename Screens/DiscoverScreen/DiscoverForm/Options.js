import React from 'react';
import { StyleSheet, View, Text, Button } from "react-native";
import colors from '../../../Constants/colors';

class Options extends React.Component {

  constructor(props) {
    super(props);
    this.updateShowWatchedMovies = this.updateShowWatchedMovies.bind(this);
    this.updateNetflixOnly = this.updateNetflixOnly.bind(this);
    this.state = {
      showWatchedMovies: false,
      netflixOnly: false
    }
  }

  updateShowWatchedMovies(bool) {
    this.setState({showWatchedMovies: bool})
  }

  updateNetflixOnly(bool) {
    this.setState({netflixOnly: bool})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>SHOW WATCHED MOVIES</Text>
        <View style={styles.buttonsContainer}>
          <View style={
            this.state.showWatchedMovies ?
            [styles.button, styles.buttonActive] :
            styles.button
          }>
            <Button title="YES" color={colors.text} onPress={() => this.updateShowWatchedMovies(true)} />
          </View>
          <View style={
            this.state.showWatchedMovies ?
            styles.button :
            [styles.button, styles.buttonActive]
          }>
            <Button title="NO" color={colors.text} onPress={() => this.updateShowWatchedMovies(false)} />
          </View>
        </View> 

        <Text style={styles.label}>NETFLIX ONLY</Text>
        <View style={styles.buttonsContainer}>
          <View style={
            this.state.netflixOnly ?
            [styles.button, styles.buttonActive] :
            styles.button
          }>
            <Button title="YES" color={colors.text} onPress={() => this.updateNetflixOnly(true)} />
          </View>
          <View style={
            this.state.netflixOnly ?
            styles.button :
            [styles.button, styles.buttonActive]
          }>
            <Button title="NO" color={colors.text} onPress={() => this.updateNetflixOnly(false)} />
          </View>
        </View>
      </View>
    );
  }
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
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5
  },
  buttonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.highlight
  }
});

export default Options;