import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import colors from '../../../../Constants/colors';

const MovieOverview = props => {
  return (
    <View>
      <Text style={styles.heading}>PLOT SUMMARY</Text>
      <Text style={styles.overview}>{props.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: colors.heading,
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  overview: {
    color: colors.text03,
    paddingHorizontal: 20,
    marginVertical: 5,
    fontSize: 18,
  }
});

export default MovieOverview;
