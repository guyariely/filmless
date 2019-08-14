import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import colors from '../Constants/colors';
import container from '../Constants/container';

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Film</Text>
      <View style={styles.form}></View>
      <View style={styles.movies}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: container,
  title: {
    flex: 1,
    color: colors.text,
    fontSize: 38,
    paddingHorizontal: 28,
    paddingVertical: 42,
    backgroundColor: 'blue',
  },
  form: {
    flex: 7,
    paddingHorizontal: 28,
    paddingVertical: 42,
    backgroundColor: 'red',
  },
  movies: {
    flex: 6,
    backgroundColor: 'yellow',
  }
});

export default DiscoverScreen;
