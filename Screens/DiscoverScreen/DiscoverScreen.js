import React, { useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Keyboard } from 'react-native';
import colors from '../../Constants/colors';
import Form from './DiscoverForm/Form';

const DiscoverScreen = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadMovies = async inputs => {

    // remove keyboard and any error message
    setError(null);
    Keyboard.dismiss();

    const { 
      rating, time, fromYear, 
      toYear, genres, languages, 
      showWatchedMovies, netflixOnly 
    } = inputs;

    if (fromYear > toYear) {
      return setError("You can't select a start year that is bigger then the end year.")
    }

    if (toYear < fromYear) {
      return setError("You can't select an end year that is smaller then the start year.")
    }

    setIsLoading(true);

    setTimeout(() => {
      console.log(`
      rating: ${rating},
      time: ${time},
      fromYear: ${fromYear},
      toYear: ${toYear},
      genres: ${genres},
      languages: ${languages},
      showWatchedMovies: ${showWatchedMovies},
      netflixOnly: ${netflixOnly}
    `);

    }, 3000);

    setIsLoading(false);

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Film</Text>
      <View style={styles.form}>
        <Form loadMovies={loadMovies} />  
      </View>
      <View style={styles.movies}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
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
  movies: {
    flex: 6,
  },
  activityIndicator: {
    justifyContent: 'center',
    flex: 6
  },
  errorKeyword: {
    color: colors.highlight
  }, 
  error: {
    paddingHorizontal: 30,
    flex: 6,
    alignSelf: 'center',
    paddingVertical: 15,
    fontSize: 20, 
    color: colors.text,
    fontStyle: 'italic'
  }
});

export default DiscoverScreen;
