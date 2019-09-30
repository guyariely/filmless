import React, { useContext } from "react";
import { Text, View, Image } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import TMDbLogo from '../../../../assets/TMDb.png';

const Attribution = () => {

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).heading}>ATTRIBUTION</Text>
      <Text style={styles(theme).attribution}>
        The app was built and designed by Guy Arieli. This product uses the TMDb API but is not endorsed or certified by TMDb.
      </Text>
      <View style={styles(theme).logoContainer}>
        <Image style={styles(theme).logo} source={TMDbLogo} />
      </View>
    </View>
  )
};

const styles = theme => {
  return {
    container: {
      paddingHorizontal: 28,
    },
    heading: {
      color: theme.heading,
      fontWeight: 'bold',
      fontSize: 20,
      paddingVertical: 15
    },
    attribution: {
      color: theme.text03,
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
  }
};

export default Attribution;
