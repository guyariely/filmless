import React, { useContext } from "react";
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import Picture from '../../../Components/Picture';

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
                <Picture 
                  type='profile'
                  file_path={actor.profile_path} 
                  dimensions={{width: 150, height: 240}}
                  icon={{name: 'person', size: 90, position: {top: 70, left: 30}}}
                />
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
      marginVertical: 10,
      marginLeft: 15,
      width: 150,
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
      paddingTop: 15,
      paddingBottom: 5
    },
    character: {
      color: theme.text03,
      fontSize: 14,
    }
  }
};

export default Actors;
