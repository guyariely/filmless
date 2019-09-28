import React, { useState, useEffect, useContext } from "react";
import { Text, View, AsyncStorage, Keyboard } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import { withNavigationFocus } from "react-navigation";

import isSmallScreen from '../../../utils/isSmallScreen';
import sortMovies from '../../../utils/sortMovies';
import Lister from './Lister';
import WatchlistPreviews from './WatchlistPreviews';

const WatchlistScreen = props => {

  const [watchlist, setWatchlist] = useState([]);
  const [sortMethod, setSortMethod] = useState(null);
  const [sortDirection, setSortDirection] = useState('des');

  useEffect(() => {
    AsyncStorage.getItem('watchlist').then(watchlist => {
        if (watchlist) setWatchlist(JSON.parse(watchlist).reverse());
      } 
    ).catch(error => console.log(error));
  }, [props.isFocused]);

  useEffect(() => Keyboard.dismiss(), [props.isFocused])

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>Watchlist</Text>
      <Lister 
        sortDirection={sortDirection}
        sortMethod={sortMethod}
        setSortMethod={sortMethod => {
          setSortMethod(sortMethod);
          setWatchlist(sortMovies([...watchlist], sortMethod, sortDirection));
        }} 
        setSortDirection={() => {
          setSortDirection(sortDirection == 'asc' ? 'des' : 'asc');
          setWatchlist([...watchlist].reverse());
        }}
      />
      {
        watchlist.length > 0 &&
        <WatchlistPreviews
          watchlist={watchlist} 
          selectMovie={movie => {
            props.navigation.push(
              'MovieScreen', { movie, loadDetails: false }
            );
          }}
        />
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
