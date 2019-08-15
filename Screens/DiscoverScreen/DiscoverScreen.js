import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../Constants/colors';
import Form from './DiscoverForm/Form';

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Film</Text>
      <View style={styles.form}>
        <Form />
      </View>
      <View style={styles.movies}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  title: {
    flex: 1,
    justifyContent: 'flex-end',
    color: colors.text,
    fontSize: 38,
    paddingHorizontal: 28,
    paddingTop: 54,
  },
  form: {
    flex: 7,
    paddingHorizontal: 28,
    paddingVertical: 20, 
  },
  movies: {
    flex: 6,
  }
});

export default DiscoverScreen;
