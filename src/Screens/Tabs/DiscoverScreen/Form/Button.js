import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from '../../../../Constants/colors';

const Button = props => {

  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={() => props.validateQueries()}
    >
      <Text style={styles.buttonText}>
        Search
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 6 
  },
  buttonText: {
    color: colors.search,
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 8,
  }
});

export default Button;