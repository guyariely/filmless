import React, { useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { ThemesContext } from '../Context/ThemesContext';
import isSmallScreen from '../utils/isSmallScreen';

const MovieCards = props => {

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).movieCards}>
      <FlatList
        contentContainerStyle={styles(theme).flatList}
        horizontal={true}
        onEndReachedThreshold={0.5}
        onEndReached={props.loadMovies}
        keyExtractor={movie => movie.id.toString()}
        data={props.movies}
        renderItem={({item: movie}) => (
          <TouchableOpacity style={styles(theme).movie} onPress={() => props.selectMovie(movie)}>
            <View style={styles(theme).imageShadow}>
              <View style={styles(theme).imageContainer}>
                <Image
                  style={styles(theme).image}
                  source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}} 
                />
              </View>
            </View>
            <View style={styles(theme).text}>
              <Text 
                style={styles(theme).title} 
                numberOfLines={1}>
                  {movie.title}
              </Text>
            </View>
            {
              !isSmallScreen() &&
              <View style={styles(theme).text}>
                <Text 
                  style={styles(theme).rating} 
                  numberOfLines={1}
                >
                    {movie.vote_average}
                    <Text>  •  </Text>
                    {movie.release_date.slice(0, 4)}
                </Text>
              </View>
            }
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = theme => {
  return {
    movieCards: {
      flex: 1
    },
    flatList: {
      paddingHorizontal: 28
    },  
    movie: {
      flex: 1,
      width: 135,
      marginTop: isSmallScreen() ? 5 : 8, 
      marginBottom: isSmallScreen() ? 5 : 26, 
      marginRight: isSmallScreen() ? 0 : 15,
    },
    imageShadow: {
      flex: 5,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      paddingHorizontal: isSmallScreen() ? 15 : 0
    },
    imageContainer: {
      flex: 1,
      borderRadius: 15,
      overflow: 'hidden',
      backgroundColor: theme.base02,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
    },
    text: {
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignSelf: 'center'
    },
    title: {
      marginTop: 12,
      marginBottom: 4,
      color: theme.text01,
      fontSize: 18,
      fontWeight: '700',
    },
    rating: {
      color: theme.text03,
      fontSize: 16,
      fontWeight: '600',
    }  
  }
};

export default MovieCards;

