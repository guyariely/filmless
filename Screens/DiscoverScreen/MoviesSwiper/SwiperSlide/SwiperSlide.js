import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../../../../Constants/colors';
import MovieInfo from './MovieInfo';
import MoviePoster from './MoviePoster';
import MovieOverview from './MovieOverview';
import MoviePhotos from './MoviePhotos';
import MovieReviews from "./MovieReviews";
import MovieVideos from "./MovieVideos";

const Slide = props => {

  const { title, overview, images, videos, reviews } = props.movie;

  return (
    <ScrollView style={styles.slide}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.mainContent}>
        <MoviePoster poster={props.movie.poster_path} />
        <MovieInfo movie={props.movie} />
      </View>
      <MovieOverview overview={overview} />
      {images.length > 0 &&<MoviePhotos images={images} />}
      {videos.length > 0 &&<MovieVideos videos={videos} />}
      {reviews.length > 0 && <MovieReviews reviews={reviews} />}
      <View style={styles.bottomBuffer}></View>
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
    color: colors.text01,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  mainContent: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 15
  },
  bottomBuffer: {
    marginBottom: 50
  }
});

export default Slide;
