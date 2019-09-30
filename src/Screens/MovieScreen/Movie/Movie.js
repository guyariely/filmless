import React, { useState, useContext } from "react";
import { Text, View, ScrollView } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import Header from './Header';
import Info from './Info';
import Poster from './Poster';
import Overview from './Overview';
import Photos from './Photos';
import Reviews from "./Reviews";
import Videos from "./Videos";
import Actors from './Actors';

const Movie = props => {

  const [showBorder, setShowBorder] = useState(false);
  const { title, overview, images, videos, credits, reviews } = props.movie;

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).movie}>
      <Header 
        goBack={props.goBack} 
        goRoot={props.goRoot}
        movie={props.movie} 
        showBorder={showBorder}
      />
      <ScrollView 
        scrollEventThrottle={16}
        onScroll={e => setShowBorder(e.nativeEvent.contentOffset.y >= 1)}
      >
        <Text style={styles(theme).title}>{title}</Text>
        <View style={styles(theme).mainContent}>
          <Poster 
            poster={props.movie.poster_path}
            posters={images.posters} 
            openLightbox={props.openLightbox} 
          />
          <Info movie={props.movie} />
        </View>
        <Overview overview={overview} />
        {
          images.backdrops.length > 0 && 
          <Photos 
            images={images.backdrops} 
            openLightbox={props.openLightbox} 
          />
        }
        {
          videos.results.length > 0 && 
          <Videos videos={videos.results} />
        }
        {
          credits.cast.length > 0 && 
          <Actors 
            actors={credits.cast} 
            openPersonScreen={props.openPersonScreen} 
          />
        }
        {
          reviews.results.length > 0 && 
          <Reviews 
            reviews={reviews.results} 
            openReviewScreen={props.openReviewScreen} 
          />
        }
        <View style={styles(theme).bottomBuffer}></View>
      </ScrollView>
    </View>
  );
};

const styles = theme => {
  return {
    movie: {
      flex: 1,
      backgroundColor: theme.base01,
      paddingTop: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 28,
      color: theme.text01,
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
  }
};

export default Movie;
