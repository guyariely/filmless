import React from "react";
import { StyleSheet, Text, View, Image, Keyboard } from 'react-native';
import colors from '../../../Constants/colors';
import TMDbLogo from '../../../../assets/TMDb.png';

const Attribution = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ATTRIBUTION</Text>
      <Text style={styles.attribution}>
        The app was built and designed by Guy Arieli. This product uses the TMDb API but is not endorsed or certified by TMDb.
      </Text>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={TMDbLogo} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  heading: {
    color: colors.heading,
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 15
  },
  attribution: {
    color: colors.text03,
    fontSize: 18
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 25,
  },  
  logo: {
    opacity: 0.4,
    width: 220,
    height: 86.85,
  }
});

export default Attribution;
