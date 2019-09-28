import React, { useContext } from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';

const PersonResult = ({person, openPersonScreen}) => {

  const { theme } = useContext(ThemesContext);

  return (
    <TouchableOpacity 
      style={styles(theme).person}
      onPress={() => openPersonScreen({id: person.id})}
    >
      <View style={styles(theme).imageShadow} >
        <View style={styles(theme).imageContainer}>
          <Image
            style={styles(theme).image}
            source={{uri: 'https://image.tmdb.org/t/p/w1280' + person.profile_path}} 
          />
        </View>
      </View>
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
    imageShadow: {
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
    },
    imageContainer: {
      borderRadius: 15,
      height: 180,
      width: 120,
      overflow: 'hidden',
      backgroundColor: theme.base02
    },
    image: {
      flex: 1,
      resizeMode: 'cover'
    },
    details: {
      flex: 2,
      justifyContent: 'center',
      marginLeft: 15
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
