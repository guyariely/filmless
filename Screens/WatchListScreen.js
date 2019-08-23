import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import colors from '../Constants/colors';

const WatchListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WATCH LIST</Text>
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

export default WatchListScreen;
