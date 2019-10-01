import React, { useContext } from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MovieResult = ({movie, selectMovie}) => {

  const { theme } = useContext(ThemesContext);

  return (
    <TouchableOpacity 
      style={styles(theme).imageShadow} 
      onPress={() => selectMovie(movie)}
    >
      <View style={styles(theme).imageContainer}>
        <Image
          style={styles(theme).image}
          source={{uri: 'https://image.tmdb.org/t/p/w780' + movie.backdrop_path}} 
        />
        <Text 
          style={styles(theme).movieTitle} 
          numberOfLines={3}
        >
          {movie.title.toUpperCase()} 
          {
            movie.release_date &&
            <Text style={styles(theme).movieDate}> 
              {` (${movie.release_date.slice(0, 4)})`}
            </Text>  
          }
        </Text>
        {
          !movie.backdrop_path &&
          <View style={styles(theme).iconContainer}>
            <Icon color={theme.text04} name='local-movies' size={80} />
          </View>
        }
      </View>
    </TouchableOpacity>
  )
};

const styles = theme => {
  return {
    imageShadow: {
      paddingHorizontal: 32,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      paddingBottom: 30,
    },
    imageContainer: {
      flex: 1,
      borderRadius: 15,
      overflow: 'hidden',
      backgroundColor: theme.base02,
      height: 180,
    },
    image: {
      flex: 1,
      opacity: 0.7,
      resizeMode: 'cover',
    },
    movieTitle: {
      position: 'absolute',
      bottom: 10,
      left: 15,
      width: 200,
      color: theme.text01,
      fontWeight: '800',
      fontSize: 20
    },
    movieDate: {
      fontWeight: '400'
    },
    iconContainer: {
      position: 'absolute',
      zIndex: -1,
      top: 48,
      left: 115
    }
  }
};

export default MovieResult;
