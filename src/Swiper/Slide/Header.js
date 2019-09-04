import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../Constants/colors';
import isSmallScreen from '../../utils/isSmallScreen';

const Header = props => {

  const [inWatchlist, setInWatchlist] = useState(props.inWatchlist);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={props.closeSwiper} style={styles.closeButton}>
        <Icon 
          color={colors.text01} 
          name="keyboard-arrow-down" 
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
          setInWatchlist(!inWatchlist);
          inWatchlist ? props.removeFromWatchlist() : props.saveToWatchlist();
        }}
      >
        <Icon 
          color={inWatchlist ? colors.primary : colors.text01} 
          name={inWatchlist ? "bookmark" : "bookmark-border"}
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
    paddingBottom: 5,
    backgroundColor: colors.base01,
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