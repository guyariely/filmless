import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import colors from '../Constants/colors';

const WatchListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>watch list scree</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base01
  }
});

export default WatchListScreen;
