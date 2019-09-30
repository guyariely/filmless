import React, { useContext } from "react";
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ThemesContext } from '../../Context/ThemesContext';

const Header = props => {

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).header}>
      <TouchableOpacity 
        onPress={props.goBack} 
        onLongPress={props.goRoot}
        style={styles(theme).closeButton}
      >
        <Icon 
          color={theme.text01} 
          name="keyboard-arrow-left" 
          size={34} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = theme => {
  return {
    header: {
      flexDirection: 'row',
      paddingLeft: 14,
      paddingRight: 20,
      paddingBottom: 8
    }  
  }
};

export default Header;