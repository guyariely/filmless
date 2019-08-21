import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import colors from '../../../../Constants/colors';
import MovieInfo from './MovieInfo';
import MoviePoster from './MoviePoster';
import MoviePhotos from './MoviePhotos';

const Slide = props => {
  return (
    <ScrollView style={styles.slide}>
      <Text style={styles.title}>{props.movie.title}</Text>
      <View style={styles.mainContent}>
        <MoviePoster movie={props.movie} />
        <MovieInfo movie={props.movie} />
      </View>
      <Text style={styles.heading}>PLOT SUMMARY</Text>
      <Text style={styles.plotSummary}>{props.movie.overview}</Text>
      <MoviePhotos movie={props.movie} />
      <Text style={styles.heading}>PLOT SUMMARY</Text>
      <Text style={styles.plotSummary}>{props.movie.overview}</Text>
      <Text style={styles.heading}>PLOT SUMMARY</Text>
      <Text style={styles.plotSummary}>{props.movie.overview}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: colors.base01,
    padding: 20,
    paddingTop: 10,
    borderRadius: 15,
    marginTop: 'auto',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 20
  },
  mainContent: {
    flexDirection: 'row',
    paddingBottom: 15
  },
  posterContainer: {
    width: 135,
    flex: 3,
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
  },
  infoContainer:{
    flex: 4,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'space-around'
  },
  info: {
    flexDirection: 'row'
  },
  infoText: {
    color: colors.text,
    fontSize: 20,
    marginLeft: 10,
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  heading: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 15
  },
  plotSummary: {
    color: colors.inputLabel,
    fontSize: 16,
  }
});

export default Slide;
