import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Keyboard } from 'react-native';
import { withNavigationFocus } from "react-navigation";
import colors from '../Constants/colors';
import TMDbLogo from '../../assets/TMDb-logo.png';
import isSmallScreen from '../utils/isSmallScreen';

const SettingsScreen = props => {

  useEffect(() => Keyboard.dismiss(), [props.isFocused])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.heading}>ATTRIBUTION</Text>
      <Text style={styles.attribution}>
        The app was built and designed by <Text style={styles.emphasis}>Guy Arieli</Text>. The API is powered by <Text style={styles.emphasis}>TMDb</Text>.
      </Text>
      {/** <Image style={styles.logo} source={TMDbLogo} />*/}
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
  },
  heading: {
    color: colors.heading,
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 15
  },
  attribution: {
    color: colors.text01,
    fontSize: 18
  },
  emphasis: {
    color: colors.primary,
    fontWeight: 'bold'
  },
  logo: {
    opacity: 0.8,
    marginVertical: 20,
    width: 200,
    height: 70,
  }
});

export default withNavigationFocus(SettingsScreen);
