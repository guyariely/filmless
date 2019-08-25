import React, { useState } from 'react';
import { StyleSheet, View, Button } from "react-native";
import FormContainer from './FormNavigator';
import colors from '../../../Constants/colors';

const Form = props => {

  const [rating, setRating] = useState(null);
  const [time, setTime] = useState(null);
  const [fromYear, setFromYear] = useState(null);
  const [toYear, setToYear] = useState(null);
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [showWatchedMovies, setShowWatchedMovies] = useState(false);
  const [netflixOnly, setNetflixOnly] = useState(false);

  return (
    <View style={styles.container}>
      <FormContainer 
        screenProps={{
          rating, setRating,
          time, setTime,
          fromYear, setFromYear,
          toYear, setToYear,          
          genres, setGenres,
          languages, setLanguages,
          showWatchedMovies, setShowWatchedMovies,
          netflixOnly, setNetflixOnly
        }}
      />
      <View style={styles.button}>
        <Button 
          title="Search"
          color={colors.search}
          onPress={() => props.loadMovies(
            { rating, time, fromYear, toYear, genres, 
              languages, showWatchedMovies, netflixOnly
            })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base02,
    borderRadius: 15,
    paddingTop: 15
  },
  button: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 6 
  }
});

export default Form;