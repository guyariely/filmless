import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import Picture from '../../../Components/Picture';

const PersonResult = ({person, openPersonScreen}) => {

  const { theme } = useContext(ThemesContext);

  return (
    <TouchableOpacity 
      style={styles(theme).person}
      onPress={() => openPersonScreen({id: person.id})}
    >
      <Picture 
        type='profile'        
        file_path={person.profile_path} 
        dimensions={{width: 120, height: 180}}
        icon={{name: 'person', size: 70, position: {top: 56, left: 25}}}
      />
      <View style={styles(theme).details}>
        <Text style={styles(theme).title}>
          {person.name}
        </Text>
        <Text style={styles(theme).info}>
          {person.known_for_department}
        </Text>
      </View>
    </TouchableOpacity>
      
  )
};

const styles = theme => {
  return {
    person: {
      flexDirection: 'row',
      paddingBottom: 30,
      marginHorizontal: 30,
      flex: 1
    },
    details: {
      flex: 2,
      justifyContent: 'center',
      marginLeft: 50
    },
    title: {
      marginBottom: 8,
      color: theme.text01,
      fontSize: 22,
      fontWeight: '700',
    },
    info: {
      color: theme.text03,
      fontSize: 18,
      fontWeight: '600',
    }  
  }
};

export default PersonResult;
