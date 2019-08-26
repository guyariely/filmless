import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import colors from '../../Constants/colors';
import { withNavigationFocus } from "react-navigation";
import Header from './Header';
import WatchlistPreviews from './WatchlistPreviews';

const WatchlistScreen = props => {

  const [watchlist, setWatchlist] = useState([]);
  const [sortMethod, setSortMethod] = useState(null);
  const [sortDirection, setSortDirection] = useState('des')

  useEffect(() => {
    const loadWatchlist = async () => {
      try {
        const watchlist = await AsyncStorage.getItem('watchlist');
        if (watchlist) {
          setWatchlist(JSON.parse(watchlist));
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadWatchlist();
  }, [props.isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watchlist</Text>
      <Header 
        sortDirection={sortDirection}
        sortMethod={sortMethod}
        setSortMethod={sortMethod => setSortMethod(sortMethod)} 
        setSortDirection={
          () => setSortDirection(sortDirection == 'asc' ? 'des' : 'asc')
        }
      />
      <WatchlistPreviews watchlist={watchlist} />
    </View>
  )
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
    paddingTop: 54
  }
});

export default withNavigationFocus(WatchlistScreen);
