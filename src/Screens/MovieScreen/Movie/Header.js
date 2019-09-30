import React, { useState, useEffect, useContext } from "react";
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ThemesContext } from '../../../Context/ThemesContext';
import { getWatchlistStatus, saveToWatchlist, removeFromWatchlist } from '../../../utils/watchlistActions';
import { getHidelistStatus, saveToHidelist, removeFromHidelist } from '../../../utils/hidelistActions';

const Header = props => {

  const [watchlistStatus, setWatchlistStatus] = useState(props.watchlistStatus);
  const [hidelistStatus, setHidelistStatus] = useState(props.hidelistStatus);

  useEffect(() => {
    getWatchlistStatus(props.movie.id).then(
      status => setWatchlistStatus(status)
    ).catch(error => console.log(error));

    getHidelistStatus(props.movie.id).then(
      status => setHidelistStatus(status)
    ).catch(error => console.log(error));
  }, [])

  const { theme } = useContext(ThemesContext);

  return (
    <View style={
      props.showBorder ? 
      [styles(theme).header, styles(theme).headerWithBorder] : 
      [styles(theme).header]
    }>
      <TouchableOpacity 
        onPress={props.goBack} 
        onLongPress={props.goRoot}
        style={styles(theme).closeButton}
      >
        <Icon 
          color={theme.text01} 
          name="keyboard-arrow-left" 
          size={34} 
        />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles(theme).hidelistButton}
        onPress={() => {
          setHidelistStatus(!hidelistStatus);
          hidelistStatus ? removeFromHidelist(props.movie) : saveToHidelist(props.movie);
        }}
      >
        <Icon 
          color={hidelistStatus ? theme.primary : theme.text01} 
          name={hidelistStatus ? "visibility-off" : "visibility"}
          size={28} 
        />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles(theme).watchlistButton}
        onPress={() => {
          setWatchlistStatus(!watchlistStatus);
          watchlistStatus ? removeFromWatchlist(props.movie) : saveToWatchlist(props.movie);
        }}
      > 
        <Icon 
          color={watchlistStatus ? theme.primary : theme.text01} 
          name={watchlistStatus ? "bookmark" : "bookmark-border"}
          size={28} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = theme => {
  return {
    header: {
      flexDirection: 'row',
      paddingLeft: 15,
      paddingRight: 20,
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderColor: theme.base01,
    },
    headerWithBorder: {
      borderColor: theme.base02,
    },
    hidelistButton: {
      marginLeft: 'auto',
      marginRight: 14
    }
  }
};

export default Header;