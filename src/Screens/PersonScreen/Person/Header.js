import React, { useContext } from "react";
import { View, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = props => {

  const { theme } = useContext(ThemesContext);

  return (
    <View style={
      props.showBorder ? 
      [styles(theme).header, styles(theme).headerWithBorder] : 
      [styles(theme).header]
    }>
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
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderColor: theme.base01,
    },
    headerWithBorder: {
      borderColor: theme.base02,
    }  
  }
};

export default Header;