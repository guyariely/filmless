import React, { useState, useEffect } from "react";
import API_KEY from '../../../env';
import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import colors from '../../Constants/colors';
import Slide from './Slide/Slide';

const MovieModal = props => {

  const [movie, setMovie] = useState(props.movie);
  const [isLoading, setIsLoading] = useState(props.loadDetails);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieDetails = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&append_to_response=images,reviews,videos,credits`
        );
        // updatedMovie.runtime = movieDetails.data.runtime;
        // updatedMovie.images = movieDetails.data.images.backdrops;
        // updatedMovie.reviews = movieDetails.data.reviews.results;
        // updatedMovie.videos = movieDetails.data.videos.results;
        // updatedMovie.actors = movieDetails.data.credits.cast;
        setMovie(movieDetails.data);
        setIsLoading(false);
      } 
      catch (error) {
        console.log(error);
      }
    }
    if (props.loadDetails) getMovieDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
      >
      {
        isLoading
        ?
        <View style={styles.activityIndicator}>
          <ActivityIndicator size='small' color={colors.text01} />
        </View> 
        :
        <Slide movie={movie} closeModal={props.closeModal} />
      } 
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.base01,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.base01,
  }
});

export default MovieModal;