import { API_KEY } from '../../env';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { StyleSheet, Text, View, ActivityIndicator, Keyboard } from 'react-native';
import colors from '../../Constants/colors';
import Form from './Form/Form';
import MoviesPreviews from './MoviesPreviews';
import MoviesSwiper from './MoviesSwiper/MoviesSwiper';

const DiscoverScreen = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const loadMovies = async inputs => {

    // remove keyboard and any error message
    setError(null);
    Keyboard.dismiss();

    const { 
      rating, time, fromYear, 
      toYear, genres, languages, 
      showWatchedMovies, netflixOnly 
    } = inputs;

    // inputs validation
    if (!Number(rating) && rating) {
      return setError("Rating number is invalid.");
    }
    if (Number(fromYear) > Number(toYear) && toYear && fromYear) {
      return setError("You can't select a start year that is bigger then the end year.")
    }
    if (Number(toYear) < Number(fromYear) && toYear && fromYear) {
      return setError("You can't select an end year that is smaller then the start year.")
    }

    // fetching the movies
    setIsLoading(true);
    try {
      const result = await axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY +
        '&language=en-US&sort_by=popularity.desc&include_video=false&page=1' + 
        (fromYear ? '&primary_release_date.gte=' + fromYear : '') +
        (toYear ? '&primary_release_date.lte=' + toYear : '') +
        '&vote_count.gte=1500' +
        (rating ? '&vote_average.gte=' + rating : '') +
        (genres.length > 0 ? '&with_genres=' + genres.join('%2C') : '') +
        (time ? '&with_runtime.lte=' + time : '') +
        (languages.length > 0 ? '&with_original_language=' + languages.join('%2C') : '')
      );
      setMovies(result.data.results); 
    } 
    catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const getMovieDetails = async () => {
  
      const moviesExtended = movies;
      try {
        for (let movie of moviesExtended) {
          const movieDetails = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&append_to_response=images,reviews`
          );
          movie.runtime = movieDetails.data.runtime;
          movie.images = movieDetails.data.images.backdrops;
          movie.reviews = movieDetails.data.reviews.results;
        }
        setMovies(moviesExtended);
      } 
      catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, [movies]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Film</Text>
      <View style={styles.form}>
        <Form loadMovies={loadMovies} />  
      </View>
      { 
        isLoading && 
        <View style={styles.activityIndicator}>
          <ActivityIndicator size='small' color={colors.text} />
        </View> 
      }
      { 
        error && 
        <Text style={styles.error}>
          <Text style={styles.errorKeyword}>
            Error: {''} 
          </Text>
          {error}
        </Text> 
      }
      {
        (!error && !isLoading) &&
        <MoviesPreviews 
          movies={movies} 
          openCarousel={index => { 
            setCarouselIndex(index)
            setShowCarousel(true); 
          }} 
        />
      }
      {
        showCarousel &&
       <MoviesSwiper 
          visible={showCarousel} 
          firstItem={carouselIndex}
          movies={movies} 
          closeCarousel={() => setShowCarousel(false)}
      /> 
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base01
  },
  title: {
    flex: 1,
    justifyContent: 'flex-end',
    color: colors.text,
    fontSize: 38,
    paddingHorizontal: 28,
    paddingTop: 54,
  },
  form: {
    flex: 7,
    paddingHorizontal: 28,
    paddingVertical: 20, 
  },
  activityIndicator: {
    justifyContent: 'center',
    flex: 6
  },
  errorKeyword: {
    color: colors.primary
  }, 
  error: {
    flex: 6,
    paddingHorizontal: 30,
    alignSelf: 'center',
    paddingVertical: 15,
    fontSize: 20, 
    color: colors.text,
    fontStyle: 'italic'
  }
});

export default DiscoverScreen;
