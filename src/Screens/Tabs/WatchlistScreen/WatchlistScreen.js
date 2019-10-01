import React, { useState, useEffect, useContext } from "react";
import { Text, View, AsyncStorage, Keyboard } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import { withNavigationFocus } from "react-navigation";
import { getWatchlist } from '../../../utils/watchlistActions';

import isSmallScreen from '../../../utils/isSmallScreen';
import sortMovies from '../../../utils/sortMovies';
import Lister from './Lister';
import MovieCardsColumn from '../../../Components/MoviesCardsColumn/MovieCardsColumn';

const WatchlistScreen = props => {

  const [watchlist, setWatchlist] = useState([]);
  const [sortMethod, setSortMethod] = useState(null);
  const [sortDirection, setSortDirection] = useState('des');

  useEffect(() => {
    Keyboard.dismiss();

    getWatchlist().then(watchlist => setWatchlist(watchlist))
    .catch(error => console.log(error));
  }, [props.isFocused]);

  const toggleSortMethod = sortMethod => {
    setSortMethod(sortMethod);
    setWatchlist(sortMovies([...watchlist], sortMethod, sortDirection));
  };

  const toggleSortDirection = () => {
    setSortDirection(sortDirection == 'asc' ? 'des' : 'asc');
    setWatchlist([...watchlist].reverse());
  };

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>Watchlist</Text>
      <Lister 
        sortDirection={sortDirection}
        sortMethod={sortMethod}
        setSortMethod={toggleSortMethod} 
        setSortDirection={toggleSortDirection}
      />
      {
        watchlist.length > 0 &&
        <MovieCardsColumn movies={watchlist} type='watchlist' />
      }
    </View>
  )
};

const styles = theme => {
  return {
    container: {
      flex: 1,
      paddingTop: 40,
      backgroundColor: theme.base01,
    },
    title: {
      justifyContent: 'flex-end',
      color: theme.text01,
      fontSize: 38,
      paddingTop: isSmallScreen() ? 10 : 20,
      paddingHorizontal: 28,
    }  
  }
};

export default withNavigationFocus(WatchlistScreen);
