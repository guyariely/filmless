import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../../../Constants/colors';

const MoviePhotos = props => {
  return (
    <View>
      <Text style={styles.heading}>PHOTOS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 15
  },
});

export default MoviePhotos;
