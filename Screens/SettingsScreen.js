import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import colors from '../Constants/colors';
import container from '../Constants/container';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>settings screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: container,
});

export default SettingsScreen;
