import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../../../../Constants/colors';
import MovieInfo from './MovieInfo';
import MoviePoster from './MoviePoster';
import MoviePhotos from './MoviePhotos';
import MovieReviews from "./MovieReviews";
import MovieVideos from "./MovieVideos";

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
      <MovieVideos movie={props.movie} />
      <MovieReviews movie={props.movie} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: colors.base01,
    paddingBottom: 20,
    paddingTop: 10,
    marginTop: 'auto',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.text,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  mainContent: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 15
  },
  heading: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  plotSummary: {
    color: colors.inputLabel,
    paddingHorizontal: 20,
    fontSize: 16,
  }
});

export default Slide;
