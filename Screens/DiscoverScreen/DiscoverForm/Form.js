import React from 'react';
import { StyleSheet, View } from "react-native";
import colors from '../../../Constants/colors';
import FormContainer from './FormNavigator';

const Form = () => {
  return (
    <View style={styles.container}>
      <FormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkPrimary,
    borderRadius: 15,
    paddingVertical: 15
  }
});

export default Form;