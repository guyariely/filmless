import React, { useContext } from "react";
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import Picture from '../../../Components/Picture';

const Filmography = props => {

  const { theme } = useContext(ThemesContext);

  return (
    <View>
      <Text style={styles(theme).heading}>FILMOGRAPHY</Text>
        <FlatList 
          horizontal={true} 
          contentContainerStyle={styles(theme).flatList}
          keyExtractor={film => film.id.toString()}
          data={props.filmography.sort((a, b) => 
            b.vote_count - a.vote_count
          )} 
          renderItem={({item: film}) => (
            <TouchableOpacity 
              style={styles(theme).film} 
              key={film.id}
              onPress={() => props.openMovieScreen({id: film.id})}
            >
              <Picture 
                type='poster'
                file_path={film.poster_path} 
                dimensions={{width: 135, height: 210}}
                icon={{name: 'local-movies', size: 70, position: {top: 64, left: 32}}}
              />
              <View style={styles(theme).text}>
                <Text 
                  style={styles(theme).title}
                  numberOfLines={1}
                  > 
                    {film.title}
                </Text>
              </View>
              <View style={styles(theme).text}>
                <Text 
                  style={styles(theme).character} 
                  numberOfLines={1}
                  >
                    {film.character}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
      paddingTop: 15,
      paddingBottom: 25,
    },
    flatList: {
      paddingLeft: 20,
      paddingRight: 20
    },
    film: {
      marginRight: 20,
      marginBottom: 10,
      width: 135,
    },
    text: {
      flex: 1,
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      textAlign: 'center'
    },
    title: {
      paddingTop: 10,
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

export default Filmography;
