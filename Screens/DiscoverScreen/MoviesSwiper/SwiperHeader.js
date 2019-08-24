import React from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../Constants/colors';

const SwiperHeader = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={props.closeSwiper} style={styles.closeButton}>
        <Icon 
          color={colors.text01} 
          name="keyboard-arrow-down" 
          size={32} 
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.watchedButton}>
        <Icon 
          color={colors.text01} 
          name="visibility" 
          size={26} 
        />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {
          props.inWatchlist ? 
          props.removeFromWatchlist() : 
          props.saveToWatchlist() 
        }}
      >
        <Icon 
          color={props.inWatchlist ? colors.primary : colors.text01} 
          name={props.inWatchlist ? "bookmark" : "bookmark-border"}
          size={26} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: colors.base01,
  },
  watchedButton: {
    marginLeft: 'auto',
    marginRight: 14
  },
});

export default SwiperHeader;