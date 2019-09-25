import React from "react";
import { StyleSheet, ScrollView, View, ActivityIndicator } from 'react-native';
import colors from '../../../Constants/colors';
import MovieResult from './MovieResult';
import PersonResult from './PersonResult';

const SearchResults = props => {

  if (props.isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size='small' color={colors.text01} />
      </View>  
    );
  }

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
      props.searchResults.map(result => {
        switch (result.media_type) {
          case 'movie':
            return (
              <MovieResult 
                key={result.id}
                movie={result}
                selectMovie={props.selectMovie} 
              />
            );
          case 'person': 
            return (
              <PersonResult 
                key={result.id}
                person={result}
                openPersonScreen={props.openPersonScreen} 
              />
            );
          default:
            return;
        }
      })
    }
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center'
  },
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
