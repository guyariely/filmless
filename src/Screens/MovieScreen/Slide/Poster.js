import React from "react";
import { StyleSheet, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import colors from '../../../Constants/colors';

const Poster = props => {
  return (
    <TouchableOpacity 
      style={styles.posterContainer}
      onPress={() => props.openLightbox([{file_path: props.poster}])}
    >
      <View style={styles.poster}>
        <Image
          style={styles.posterImage}
          loadingIndicatorSource={() => 
            <View style={styles.loadingScreen}>
              <ActivityIndicator />
            </View>
          }
          source={{uri: 'https://image.tmdb.org/t/p/w500' + props.poster}} 
        />
      </View>
    </TouchableOpacity>
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
    backgroundColor: colors.base02
  },
  posterImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  loadingScreen: {
    backgroundColor: colors.base02,
    justifyContent: 'center',
    flex: 1
  }
});

export default Poster;
