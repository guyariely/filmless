import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, TextInput } from "react-native";
import { ThemesContext } from '../../Context/ThemesContext';
import { withNavigationFocus } from "react-navigation";
import { removeFromWatchlist } from '../../utils/watchlistActions';
import { removeFromHidelist } from '../../utils/hidelistActions';
import MovieCard from './MovieCard';

const MovieCardsColumn = props => {

  const [movies, setMovies] = useState(props.movies);
  const [searchInput, setSearchInput] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => setMovies(props.movies), [props.movies])

  const openMovieScreen = movie => {
    props.navigation.push(
      'MovieScreen', { movie, loadDetails: false }
    );
  };

  const removeFromList = removedMovie => {
    setMovies(movies.filter(movie =>
      movie.id != removedMovie.id
    ));
    if (props.type == 'watchlist') {
      return removeFromWatchlist(removedMovie);
    }
    return removeFromHidelist(removedMovie);
  };

  const { theme } = useContext(ThemesContext);

  return (
    <View>
      <View style={styles(theme).searchContainer}>
        <TextInput
          style={styles(theme).searchInput}
          keyboardAppearance="dark"
          placeholder="Search"
          placeholderTextColor={theme.text04}
          selectionColor={theme.primary}
          onChangeText={input => {
            setFilteredMovies(movies.filter(movie => 
              movie.title.toLowerCase().includes(input.toLowerCase())
            ));
            setSearchInput(input);
          }}
          value={searchInput}
        />
      </View>
      <View style={[styles(theme).movieCards, showBorder && styles(theme).movieCardsBorder]}>
        <FlatList
          contentContainerStyle={styles(theme).flatList}
          keyExtractor={movie => movie.id.toString()}
          onScroll={e => setShowBorder(e.nativeEvent.contentOffset.y >= 1 && movies.length > 0)}
          scrollEventThrottle={16}
          data={searchInput ? filteredMovies : movies}
          renderItem={({item}) => (
            <MovieCard
              movie={item}
              openMovieScreen={openMovieScreen}
              removeFromList={removeFromList}
            />
          )}
        />
      </View>
    </View>
    
  );
};

const styles = theme => {
  return {
    searchContainer: {
      paddingHorizontal: 28,
    },
    searchInput: {
      backgroundColor: theme.base02,
      color: theme.text01,
      borderRadius: 5,
      paddingHorizontal: 15,
      paddingVertical: 15,
      fontSize: 20
    },
    movieCards: {
      marginTop: 16,
      borderTopWidth: 1,
      borderColor: theme.base01,
    },
    movieCardsBorder: {
      borderColor: theme.base02,
    },
    flatList: {
      paddingBottom: 250,
    }
  }
};

export default withNavigationFocus(MovieCardsColumn);

