import React, { useContext } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';

const Actors = props => {

  const { theme } = useContext(ThemesContext);

  return (
    <View>
      <Text style={styles(theme).heading}>ACTORS</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles(theme).scrollView}>
        {
          props.actors.map(actor => {
            return (
              <TouchableOpacity 
                style={styles(theme).actor} 
                key={actor.cast_id}
                onPress={() => props.openPersonScreen(actor)}
              >
                <View style={styles(theme).imageShadow}>
                  <View style={styles(theme).imageContainer}>
                    <Image
                      style={styles(theme).image}
                      source={{uri: 'https://image.tmdb.org/t/p/w500' + actor.profile_path}} 
                    />
                  </View>
                </View>
                <View style={styles(theme).text}>
                  <Text 
                    style={styles(theme).name}
                    numberOfLines={1}
                    > 
                      {actor.name}
                  </Text>
                </View>
                <View style={styles(theme).text}>
                  <Text 
                    style={styles(theme).character} 
                    numberOfLines={1}
                    >
                      {actor.character}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })
        }
        </ScrollView>
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
    scrollView: {
      paddingLeft: 5,
      paddingRight: 20
    },
    actor: {
      marginLeft: 15,
      marginBottom: 10,
      width: 150,
    },
    imageShadow: {
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      marginVertical: 10,
      height: 240,
      width: 150,
    },
    imageContainer: {
      flex: 1,
      borderRadius: 15,
      overflow: 'hidden',
      backgroundColor: theme.base02
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
    },
    text: {
      flex: 1,
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      textAlign: 'center'
    },
    name: {
      color: theme.text01,
      fontSize: 18,
      fontWeight: '600',
      paddingVertical: 5
    },
    character: {
      color: theme.text03,
      fontSize: 14,
    }
  }
};

export default Actors;
