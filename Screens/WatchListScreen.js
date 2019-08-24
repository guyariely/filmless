import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import colors from '../Constants/colors';
import { withNavigationFocus } from "react-navigation";

const WatchlistScreen = props => {

  const [watchlist, setWatchlist] = useState([]);

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
      <Text style={styles.title}>WATCH LIST</Text>
      {
        watchlist.map(movie => 
          <Text style={{color: colors.text01, textAlign: 'center', marginVertical: 5}} key={movie.id}>
            {movie.title}
          </Text>
        )
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.base01
  },
  title: {
    textAlign: 'center',
    color: colors.text01,
    fontWeight: '600'
  }
});

export default withNavigationFocus(WatchlistScreen);
