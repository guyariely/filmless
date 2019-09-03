import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../Constants/colors';

const SearchResults = props => {

  return (
    <ScrollView 
      contentContainerStyle={styles.scrollView}
      onScroll={e => 
        props.setShowBorder(
          e.nativeEvent.contentOffset.y >= 1 && props.searchResults.length > 0
        )
      }
      scrollEventThrottle={16}
    >
    {
      props.searchResults &&
      props.searchResults.map(movie => 
        <TouchableOpacity 
          style={styles.imageShadow} 
          key={movie.id}
          onPress={() => props.selectMovie(movie)}
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: 'https://image.tmdb.org/t/p/w1280' + movie.backdrop_path}} 
            />
            <Text 
              style={styles.movieTitle} 
              numberOfLines={3}
              >
              {movie.title.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      )
    }
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  imageShadow: {
    paddingHorizontal: 32,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    paddingBottom: 30
  },
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.base02,
    height: 180,
  },
  image: {
    flex: 1,
    opacity: 0.8,
    resizeMode: 'cover',
  },
  movieTitle: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    width: 200,
    color: colors.text01,
    fontWeight: '800',
    fontSize: 22
  }
});

export default SearchResults;
