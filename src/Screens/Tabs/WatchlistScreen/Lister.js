import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import WheelInput from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';

const Lister = props => {

  const { theme } = useContext(ThemesContext);

  const sortMethods = [
    {label: 'Release Date', value: 'Release Date', color: theme.text01},
    {label: 'Rating', value: 'Rating', color: theme.text01},
    {label: 'Alphabetical', value: 'Alphabetical', color: theme.text01},
    {label: 'Runtime', value: 'Runtime', color: theme.text01},
    {label: 'Popularity', value: 'Popularity', color: theme.text01},
  ];

  return (
    <View style={styles(theme).lister}>
      <TouchableOpacity 
        onPress={props.setSortDirection}
        style={styles(theme).sortDirectionButtonContainer}
      >
      <View style={styles(theme).sortDirectionButton}>
        <Icon 
          color={props.sortDirection == 'des' ? theme.primary : theme.text01} 
          name="long-arrow-down" 
          size={22} 
        />
      </View>
      <View style={styles(theme).sortDirectionButton}>
        <Icon 
          color={props.sortDirection == 'asc' ? theme.primary : theme.text01} 
          name="long-arrow-up" 
          size={22} 
        />
      </View>
      </TouchableOpacity>
      <View style={styles(theme).sortMethodButtonContainer}>
        <View style={styles(theme).sortMethodButton}>
          <Text style={styles(theme).sortMethodPlaceHolder}>Sorted By </Text>
          <WheelInput
            style={wheelInputStyles(theme)}
            placeholder={{label: 'Date Added', color: theme.text01}}
            placeholderTextColor={theme.primary}
            items={sortMethods}
            value={props.sortMethod}
            onValueChange={sortMethod => props.setSortMethod(sortMethod)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = theme => {
  return {
    lister: {
      flexDirection: 'row',
      paddingHorizontal: 28,
    },
    sortDirectionButtonContainer: {
      flexDirection: 'row',
      paddingVertical: 16
    },
    sortDirectionButton: {
      fontWeight: '200',
      paddingHorizontal: 2
    },
    sortMethodButtonContainer: {
      justifyContent: 'center',
      marginLeft: 'auto'
    },
    sortMethodButton: {
      flexDirection: 'row',
    },
    sortMethodPlaceHolder: {
      color: theme.text01,
      fontSize: 16,
      fontWeight: '600',
      marginVertical: 14,
    }  
  }
};

const wheelInputStyles = theme => {
  return {
    modalViewMiddle: {
      backgroundColor: theme.base02,
      borderTopWidth: 0,
    },
    modalViewBottom: {
      backgroundColor: theme.base02
    },
    chevronContainer: {
      opacity: 0.1
    },
    done: {
      color: theme.primary,
    },
    inputIOS: {
      color: theme.primary,
      fontSize: 16,
      fontWeight: '600',
      marginVertical: 14,
    },
    inputAndroid: {
      color: theme.primary,
      marginLeft: 'auto',
      fontSize: 20,
      fontWeight: '600',
      marginVertical: 14,
    }  
  }
};

export default Lister;