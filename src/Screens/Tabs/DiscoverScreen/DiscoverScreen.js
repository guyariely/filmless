import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { ThemesContext } from "../../../Context/ThemesContext";
import API from "../../../API/Discover";
import { withNavigationFocus } from "react-navigation";
import { getHidelistIDs } from "../../../utils/hidelistActions";
import isSmallScreen from "../../../utils/isSmallScreen";

import Form from "./Form/Form";
import MovieCardsRow from "../../../Components/MovieCardsRow";
import { DiscoverContext } from "../../../Context/DiscoverContext";

const DiscoverScreen = props => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [hidelist, setHidelist] = useState([]);

  useEffect(() => {
    getHidelistIDs().then(hidelist => {
      setHidelist(hidelist);
    });
  }, [props.isFocused, movies]);

  const queries = useContext(DiscoverContext);

  const validateQueries = () => {
    // remove keyboard and any error message
    setError(null);
    Keyboard.dismiss();

    // inputs validation
    const { rating, fromYear, toYear } = queries;

    if (!Number(rating) && rating) {
      return setError("Rating number is invalid.");
    }
    if (Number(fromYear) > Number(toYear) && toYear && fromYear) {
      return setError(
        "You can't select a start year that is bigger then the end year."
      );
    }
    if (Number(toYear) < Number(fromYear) && toYear && fromYear) {
      return setError(
        "You can't select an end year that is smaller then the start year."
      );
    }

    // fetching the movies
    setPage(1);
    loadMovies(1);
  };

  const loadMovies = page => {
    if (page == 501) return;
    if (page == 1) setIsLoading(true);

    API.Discover(queries, page).then(movieResults => {
      if (page == 1) {
        setMovies(movieResults);
      } else if (movieResults.length > 0) {
        setMovies(movies.concat(movieResults));
      }

      if (page == 1) setIsLoading(false);
      setPage(page + 1);
    });
  };

  useEffect(() => Keyboard.dismiss(), [props.isFocused]);

  const { theme } = useContext(ThemesContext);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles(theme).container}>
        <Text style={styles(theme).title}>Discover</Text>
        <View style={styles(theme).form}>
          <Form validateQueries={validateQueries} />
        </View>
        {isLoading && (
          <View style={styles(theme).activityIndicator}>
            <ActivityIndicator size="small" color={theme.text01} />
          </View>
        )}
        {error && (
          <Text style={styles(theme).error}>
            <Text style={styles(theme).errorKeyword}>Error: {""}</Text>
            {error}
          </Text>
        )}
        {!error && !isLoading && (
          <MovieCardsRow
            type="discover"
            movies={movies.filter(movie => !hidelist.includes(movie.id))}
            loadMovies={() => loadMovies(page)}
            selectMovie={movie => {
              props.navigation.push("MovieScreen", {
                movie,
                loadDetails: true
              });
            }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = theme => {
  return {
    container: {
      flex: 1,
      paddingTop: 40,
      backgroundColor: theme.base01
    },
    title: {
      justifyContent: "flex-end",
      color: theme.text01,
      fontSize: 38,
      paddingHorizontal: 28,
      paddingTop: isSmallScreen() ? 10 : 20
    },
    form: {
      height: isSmallScreen() ? 330 : 350,
      paddingHorizontal: 28,
      paddingVertical: isSmallScreen() ? 10 : 20
    },
    activityIndicator: {
      justifyContent: "center",
      flex: 6
    },
    errorKeyword: {
      color: theme.primary
    },
    error: {
      flex: 6,
      paddingHorizontal: 30,
      alignSelf: "center",
      paddingVertical: 15,
      fontSize: 20,
      color: theme.text01,
      fontStyle: "italic"
    }
  };
};

export default withNavigationFocus(DiscoverScreen);
