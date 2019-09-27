import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import { withNavigationFocus } from "react-navigation";
import isSmallScreen from '../../../utils/isSmallScreen';
import colors from '../../../Constants/colors';
import HidelistReferral from './HidelistReferral';
import Attribution from './Attribution';

const SettingsScreen = props => {


  

  useEffect(() => Keyboard.dismiss(), [props.isFocused])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <HidelistReferral isFocused={props.isFocused} />
      <Attribution />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base01,
    paddingHorizontal: 28,
  },
  title: {
    justifyContent: 'flex-end',
    color: colors.text01,
    fontSize: 38,
    paddingTop: isSmallScreen() ? 10 : 20
  }
});

export default withNavigationFocus(SettingsScreen);
