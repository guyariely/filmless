import React, { useContext } from "react";
import { View, Text } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';

const Overview = props => {

  const { theme } = useContext(ThemesContext);

  return (
    <View>
      <Text style={styles(theme).heading}>PLOT SUMMARY</Text>
      <Text style={styles(theme).overview}>{props.overview}</Text>
    </View>
  );
};

const styles = theme => {
  return {
    heading: {
      color: theme.heading,
      fontWeight: 'bold',
      fontSize: 20,
      paddingHorizontal: 20,
      paddingVertical: 15
    },
    overview: {
      color: theme.text03,
      paddingHorizontal: 20,
      marginVertical: 5,
      fontSize: 18,
    }  
  }
};

export default Overview;
