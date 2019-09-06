import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../../../Constants/colors';
import Header from './Header';
import Info from './Info';
import Poster from './Poster';
import Overview from './Overview';
import Photos from './Photos';
import Reviews from "./Reviews";
import Videos from "./Videos";
import Actors from './Actors';

const Slide = props => {

  const { title, overview, images, videos, credits, reviews } = props.movie;

  return (
    <View style={styles.slide}>
      <Header 
        closeModal={props.closeModal} 
        inWatchlist={props.movie.inWatchlist}
        removeFromWatchlist={props.removeFromWatchlist}
        saveToWatchlist={props.saveToWatchlist}
      />
      <ScrollView >
        <Text style={styles.title}>{title}</Text>
        <View style={styles.mainContent}>
          <Poster poster={props.movie.poster_path} />
          <Info movie={props.movie} />
        </View>
        <Overview overview={overview} />
        {images.backdrops.length > 0 && <Photos images={images.backdrops} />}
        {videos.results.length > 0 && <Videos videos={videos.results} />}
        {credits.cast.length > 0 && <Actors actors={credits.cast} />}
        {reviews.results.length > 0 && <Reviews reviews={reviews.results} />}
        <View style={styles.bottomBuffer}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: colors.base01,
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
