import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import colors from '../Constants/colors';

const SettingsScreen = () => {

  return (
    <View style={styles.container}>
      <Text>settings screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  }
});

export default SettingsScreen;
