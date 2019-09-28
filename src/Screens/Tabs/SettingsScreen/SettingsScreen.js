import React, { useEffect, useContext } from "react";
import { Text, View, Keyboard } from 'react-native';
import { withNavigationFocus } from "react-navigation";
import { ThemesContext } from '../../../Context/ThemesContext';
import isSmallScreen from '../../../utils/isSmallScreen';
import HidelistReferral from './HidelistReferral';
import Attribution from './Attribution';
import ThemePicker from './ThemePicker';

const SettingsScreen = props => {

  useEffect(() => Keyboard.dismiss(), [props.isFocused]);

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>Settings</Text>
      <ThemePicker />
      <HidelistReferral />
      <Attribution />
    </View>
  )
};

const styles = theme => {
  return {
    container: {
      flex: 1,
      paddingTop: 40,
      backgroundColor: theme.base01,
      paddingHorizontal: 28,
    },
    title: {
      justifyContent: 'flex-end',
      color: theme.text01,
      fontSize: 38,
      paddingTop: isSmallScreen() ? 10 : 20
    }
  }
};

export default withNavigationFocus(SettingsScreen);
