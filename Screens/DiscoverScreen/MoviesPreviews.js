import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../Constants/colors';

const MoviesPreviews = props => {
  return (
    <View style={styles.moviesPreviews}>
      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal={true}
        keyExtractor={movie => movie.id.toString()}
        data={props.movies}
        renderItem={({item: movie, index}) => (
          <TouchableOpacity style={styles.movie} onPress={() => props.openCarousel(index)}>
            <View style={styles.imageShadow}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}} 
                />
                <View style={styles.ratingContainer}>
                  <Icon name="star" color={colors.rating} size={15} />
                  <Text style={styles.rating}>
                    {movie.vote_average}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.title}>
              <Text 
                style={styles.titleText} 
                numberOfLines={1}>
                  {movie.title}
              </Text>
            </View>
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
    marginVertical: 10, 
    marginRight: 15,
  },
  imageShadow: {
    flex: 5,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  ratingContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.primary,
    backgroundColor: colors.transparentPrimary
  },  
  rating :{
    color: colors.rating,
    fontWeight: '600',
    paddingHorizontal: 2
  },  
  title: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  titleText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  }
});

export default MoviesPreviews;

