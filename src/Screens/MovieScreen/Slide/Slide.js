import React, { useState } from "react";
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

  const [showBorder, setShowBorder] = useState(false);
  const { title, overview, images, videos, credits, reviews } = props.movie;

  return (
    <View style={styles.slide}>
      <Header 
        goBack={props.goBack} 
        movie={props.movie} 
        showBorder={showBorder}
      />
      <ScrollView 
        scrollEventThrottle={16}
        onScroll={e => setShowBorder(e.nativeEvent.contentOffset.y >= 1)}
      >
        <Text style={styles.title}>{title}</Text>
        <View style={styles.mainContent}>
          <Poster poster={props.movie.poster_path} openLightbox={props.openLightbox} />
          <Info movie={props.movie} />
        </View>
        <Overview overview={overview} />
        {images.backdrops.length > 0 && <Photos images={images.backdrops} openLightbox={props.openLightbox} />}
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
