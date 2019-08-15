import React from 'react';
import { StyleSheet, View, Text, TextInput } from "react-native";
import colors from '../../../Constants/colors';

class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      genres: '',
      languages: '',
      focusedInput: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>GENRES</Text>
          <TextInput
            style={
              this.state.focusedInput === 'genres' ?
              [styles.input, styles.inputFocused] : 
              styles.input
            }
            onFocus={ () => this.setState({focusedInput: 'genres'}) }
            onBlur={ () => this.setState({focusedInput: ''})}
            placeholder="ALL GENRES"
            placeholderTextColor={colors.lightText}
            selectionColor={colors.highlight}
            onChangeText={genres => this.setState({genres})}
            value={this.state.text}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>LANGUAGES</Text>
          <TextInput
          style={
              this.state.focusedInput === 'languages' ?
              [styles.input, styles.inputFocused] : 
              styles.input
            }
            onFocus={ () => this.setState({focusedInput: 'languages'}) }
            onBlur={ () => this.setState({focusedInput: ''})}
            placeholder="ALL LANGUAGES"
            placeholderTextColor={colors.lightText}
            selectionColor={colors.highlight}
            onChangeText={languages => this.setState({languages})}
            value={this.state.text}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingVertical: 20
  },
  inputContainer: {
    paddingBottom: 20
  },
  label: {
    color: colors.inputLabel, 
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingLeft: 15,
    color: colors.text,
    fontSize: 16
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: colors.highlight
  }
});

export default Categories;