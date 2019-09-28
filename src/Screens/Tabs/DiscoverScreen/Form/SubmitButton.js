import React, { useContext } from 'react';
import { Text, TouchableOpacity } from "react-native";
import { ThemesContext } from '../../../../Context/ThemesContext';

const SubmitButton = props => {

  const { theme } = useContext(ThemesContext);

  return (
    <TouchableOpacity 
      style={styles(theme).button}
      onPress={() => props.validateQueries()}
    >
      <Text style={styles(theme).buttonText}>
        Search
      </Text>
    </TouchableOpacity>
  );
};

const styles = theme => {
  return {
    button: {
      backgroundColor: theme.primary,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      paddingVertical: 6 
    },
    buttonText: {
      color: theme.search,
      fontSize: 20,
      textAlign: 'center',
      paddingVertical: 8,
    }  
  }
};

export default SubmitButton;