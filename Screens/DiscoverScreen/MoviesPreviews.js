import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import runtimeText from '../../utils/runtimeText';
import colors from '../../Constants/colors';

const MoviesPreviews = props => {
  return (
    <View style={styles.moviesPreviews}>
      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal={true}
        keyExtractor={movie => movie.id.toString()}
        data={props.movies}
        renderItem={({item: movie}) => (
          <View style={styles.movie}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}} 
              />
            </View>
            <View style={styles.title}>
              <Text 
                style={styles.titleText} 
                numberOfLines={1}>
                  {movie.title}
              </Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.rating}>{movie.vote_average}</Text>
              <Text style={styles.time}>{movie.runtime ? runtimeText(movie.runtime) : ''}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  moviesPreviews: {
    flex: 6
  },
  flatList: {
    paddingHorizontal: 28
  },  
  movie: {
    flex: 1,
    width: 135,
    backgroundColor: colors.text,
    marginVertical: 10, 
    marginRight: 15,
    borderRadius: 15,

    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
  },
  imageContainer: {
    flex: 5,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  titleText: {
    color: colors.base02,
    fontSize: 18,
    fontWeight: '700',
  },
  details: {
    flex: 0.8,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  rating: {
    fontWeight: 'bold',
    opacity: 0.6,
    color: colors.base02
  },
  time: {
    marginLeft: 'auto',
    color: colors.base02,
    opacity: 0.6,
    fontWeight: 'bold'
  }
});

export default MoviesPreviews;

