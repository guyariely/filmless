import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';

const Biography = props => {

  const { theme } = useContext(ThemesContext);

  return (
    <View>
      <Text style={styles(theme).heading}>BIOGRAPHY</Text>
      <TouchableOpacity onPress={props.openBiographyScreen}>
        <Text 
          style={styles(theme).biography}
          numberOfLines={6}
        >
          {props.biography}
        </Text>
      </TouchableOpacity>
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
    biography: {
      color: theme.text03,
      paddingHorizontal: 20,
      marginVertical: 5,
      fontSize: 18,
    }  
  }
};

export default Biography;
