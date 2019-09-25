import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { getWatchlistStatus, saveToWatchlist, removeFromWatchlist } from '../../../utils/watchlistActions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../Constants/colors';
import isSmallScreen from '../../../utils/isSmallScreen';

const Header = props => {

  const [watchlistStatus, setWatchlistStatus] = useState(props.watchlistStatus);

  useEffect(() => {
    getWatchlistStatus(props.movie.id).then(
      status => setWatchlistStatus(status)
    ).catch(error => console.log(error));
  }, [])

  return (
    <View style={
      props.showBorder ? 
      [styles.header, styles.headerWithBorder] : 
      [styles.header]
    }>
      <TouchableOpacity 
        onPress={props.goBack} 
        onLongPress={props.goRoot}
        style={styles.closeButton}
      >
        <Icon 
          color={colors.text01} 
          name="keyboard-arrow-left" 
          size={34} 
        />
      </TouchableOpacity>
      {/*<TouchableOpacity style={styles.watchedButton}>
        <Icon 
          color={colors.text01} 
          name="visibility" 
          size={28} 
        />
      </TouchableOpacity>*/}
      <TouchableOpacity 
        style={styles.bookmarkButton}
        onPress={() => {
          setWatchlistStatus(!watchlistStatus);
          watchlistStatus ? removeFromWatchlist(props.movie) : saveToWatchlist(props.movie);
        }}
      > 
        <Icon 
          color={watchlistStatus ? colors.primary : colors.text01} 
          name={watchlistStatus ? "bookmark" : "bookmark-border"}
          size={28} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: isSmallScreen() ? 25 : 40,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: colors.base01,
  },
  headerWithBorder: {
    borderColor: colors.base02,
  },
  watchedButton: {
    marginLeft: 'auto',
    marginRight: 14
  },
  bookmarkButton: {
    marginLeft: 'auto',
  },
});

export default Header;