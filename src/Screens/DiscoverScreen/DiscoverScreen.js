import { API_KEY } from '../../../env';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Keyboard, AsyncStorage } from 'react-native';
import { withNavigationFocus } from "react-navigation";
import isSmallScreen from '../../utils/isSmallScreen';
import axios from 'axios';
import colors from '../../Constants/colors';
import Form from './Form/Form';
import MoviesPreviews from './MoviesPreviews';
import MoviesSwiper from './MoviesSwiper';

const DiscoverScreen = props => {

  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [isLoadingSwiper, setIsLoadingSwiper] = useState(false);
  const [showSwiper, setShowSwiper] = useState(false);
  const [swiperIndex, setSwiperIndex] = useState(0);

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
        (fromYear ? '&primary_release_date.gte=' + fromYear + '-01-01' : '') +
        (toYear ? '&primary_release_date.lte=' + toYear + '-12-31' : '') +
        (rating ? '&sort_by=vote_count.desc&vote_average.gte=' + rating : '') +
        (genres.length > 0 ? '&with_genres=' + genres.join('%2C') : '') +
        (time ? '&with_runtime.lte=' + time : '') +
        (languages.length > 0 ? '&with_original_language=' + languages.join('%2C') : '')
      );
      setMovies(result.data.results); 
      console.log(result.data.results);
    } 
    catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoadingSwiper(true);
      const moviesExtended = movies;
      try {
        // fetchs additional info about the movies
        for (let movie of moviesExtended) {
          const movieDetails = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&append_to_response=images,reviews,videos,credits`
          );
          movie.runtime = movieDetails.data.runtime;
          movie.images = movieDetails.data.images.backdrops;
          movie.reviews = movieDetails.data.reviews.results;
          movie.videos = movieDetails.data.videos.results;
          movie.actors = movieDetails.data.credits.cast;
          movie.inWatchlist = false;
        }

        // updates the fetched movies watchlist status
        let watchlist = await AsyncStorage.getItem('watchlist');
        if (watchlist) {
          setWatchlist(JSON.parse(watchlist));
          watchlist = JSON.parse(watchlist).map(movie => movie.id);
          for (let i = 0; i < moviesExtended.length; i++) {
            if (watchlist.indexOf(moviesExtended[i].id) != -1) {
              moviesExtended[i].inWatchlist = true;
            }
          }         
        }         
        setIsLoadingSwiper(false);
        setMovies(moviesExtended);
      }
      catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, [movies]);

  useEffect(() => {
    // updates the fetched movies watchlist status
    const updateWatchlist = async () => {
      let watchlist = await AsyncStorage.getItem('watchlist');
      if (watchlist) {
        setWatchlist(JSON.parse(watchlist));

        watchlist = JSON.parse(watchlist).map(movie => movie.id);
        const updatedMovies = movies;
        for (let i = 0; i < updatedMovies.length; i++) {
          updatedMovies[i].inWatchlist = (
            watchlist.indexOf(updatedMovies[i].id) != -1 ? true : false
          );
        }         
        setMovies(updatedMovies);
      }
    };
    updateWatchlist();
  }, [props.isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Film</Text>
      <View style={styles.form}>
        <Form loadMovies={loadMovies} />  
      </View>
      { 
        isLoading && 
        <View style={styles.activityIndicator}>
          <ActivityIndicator size='small' color={colors.text01} />
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
          openSwiper={index => { 
            setSwiperIndex(index)
            setShowSwiper(true); 
          }} 
        />
      }
      {
        showSwiper &&
       <MoviesSwiper 
          visible={showSwiper} 
          firstItem={swiperIndex}
          movies={movies} 
          watchlist={watchlist}
          isLoading={isLoadingSwiper}
          closeSwiper={() => setShowSwiper(false)}
          setMovies={movies => setMovies(movies)}
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
    justifyContent: 'flex-end',
    color: colors.text01,
    fontSize: 38,
    paddingHorizontal: 28,
    paddingTop: isSmallScreen() ? 32 : 54,
    paddingBottom: isSmallScreen() ? 4 : 0
  },
  form: {
    height: isSmallScreen() ? 330 : 350,
    paddingHorizontal: 28,
    paddingVertical: isSmallScreen() ? 10 : 20, 
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
    color: colors.text01,
    fontStyle: 'italic'
  }
});

export default withNavigationFocus(DiscoverScreen);
