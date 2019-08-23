import React from "react";
import { StyleSheet, View, Image } from 'react-native';
import colors from '../../../../Constants/colors';

const MoviePoster = props => {
  return (
    <View style={styles.posterContainer} >
      <View style={styles.poster}>
        <Image
          style={styles.posterImage}
          source={{uri: 'https://image.tmdb.org/t/p/w500' + props.poster}} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  posterContainer: {
    width: 135,
    flex: 4,
    height: 220,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  poster: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  posterImage: {
    flex: 1,
    resizeMode: 'cover',
  }
});

export default MoviePoster;
