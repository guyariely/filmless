import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import colors from '../../Constants/colors';
import isSmallScreen from '../../utils/isSmallScreen';

const MoviesPreviews = props => {
  return (
    <View style={styles.moviesPreviews}>
      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal={true}
        keyExtractor={movie => movie.id.toString()}
        data={props.movies}
        renderItem={({item: movie, index}) => (
          <TouchableOpacity style={styles.movie} onPress={() => props.openSwiper(index)}>
            <View style={styles.imageShadow}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}} 
                />
              </View>
            </View>
            <View style={styles.text}>
              <Text 
                style={styles.title} 
                numberOfLines={1}>
                  {movie.title}
              </Text>
            </View>
            {
              !isSmallScreen() &&
              <View style={styles.text}>
                <Text 
                  style={styles.rating} 
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
    marginTop: isSmallScreen() ? 5 : 8, 
    marginBottom: isSmallScreen() ? 5 : 26, 
    marginRight: isSmallScreen() ? 0 : 15,
  },
  imageShadow: {
    flex: 5,
    shadowColor: colors.shadow,
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
    backgroundColor: colors.base02,
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
    color: colors.text01,
    fontSize: 18,
    fontWeight: '700',
  },
  rating: {
    color: colors.text03,
    fontSize: 16,
    fontWeight: '600',
  }
});

export default MoviesPreviews;

