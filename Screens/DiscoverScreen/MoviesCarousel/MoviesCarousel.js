import { API_KEY } from '../../../env';
import React, { useState, useEffect } from "react";
import { StyleSheet, Modal, View } from 'react-native';
import axios from 'axios';
import colors from '../../../Constants/colors';
import Carousel from 'react-native-snap-carousel';
import CarouselHeader from './CarouselHeader';
import CarouselSlide from './CarouselSlide/CarouselSlide';
import { Dimensions } from "react-native";

const MoviesCarousel = props => {

  const [movies, setMovies] = useState(props.movies);

  useEffect(() => {
    const getMovieDetails = async () => {

      // get runtimes
      const moviesWithRuntimes = movies;
      try {
        for (let movie of moviesWithRuntimes) {
          const movieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`);
          movie.runtime = movieDetails.data.runtime;
        }
        setMovies(moviesWithRuntimes);
      } 
      catch (error) {
        console.log(error);
      }

      // get images
      const moviesWithImages = movies;
      try {
        for (let movie of moviesWithImages) {
          const images = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=${API_KEY}`);
          movie.images = images.data.backdrops;
        }
        setMovies(moviesWithImages);
      } 
      catch (error) {
        console.log(error);
      }

      // get reviews
      const moviesWithReviews = movies;
      try {
        for (let movie of moviesWithReviews) {
          const movieReviews = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/reviews?api_key=${API_KEY}`);
          movie.reviews = movieReviews.data.results;
        }
        setMovies(moviesWithReviews);
      } 
      catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
      > 
        <CarouselHeader closeCarousel={props.closeCarousel} />
        <Carousel
          initialNumToRender={movies.length}
          loop={true}
          data={movies}
          renderItem={({item}) => <CarouselSlide movie={item} />}
          sliderWidth={ Math.round(Dimensions.get('window').width) }
          itemWidth={ Math.round(Dimensions.get('window').width) }
          firstItem={props.index}
          containerCustomStyle={styles.carousel}
        />
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base01
  },
  carousel: {
    backgroundColor: colors.base01,
  }
});

export default MoviesCarousel;
