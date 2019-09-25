import React, { useState, useEffect } from "react";
import API_KEY from '../../../env';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import colors from '../../Constants/colors';
import Movie from './Movie/Movie';

const MovieScreen = props => {

  const loadDetails = props.navigation.getParam('loadDetails', false);

  const [movie, setMovie] = useState(props.navigation.getParam('movie', {}));
  const [isLoading, setIsLoading] = useState(loadDetails);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getMovieDetails = async () => {
      try {
        const movieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&append_to_response=images,reviews,videos,credits`, { cancelToken: source.token });
        setMovie(movieDetails.data);
        setIsLoading(false);
      } 
      catch (error) {
        console.log(error);
      }
    }
    if (loadDetails) getMovieDetails();

    return () => source.cancel();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size='small' color={colors.text01} />
      </View> 
    );
  }

  return (
    <View style={styles.container}>
      <Movie 
        movie={movie} 
        goBack={() => props.navigation.goBack()} 
        goRoot={() => props.navigation.popToTop()}
        openLightbox={(images, index) => props.navigation.push(
          'Lightbox', { images, index }
        )}
        openReviewScreen={review => props.navigation.push(
          'ReviewScreen', { review, movieTitle: movie.title }
        )}
        openPersonScreen={person => props.navigation.push(
          'PersonScreen', { person }
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base01
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.base01
  }
});

export default MovieScreen;