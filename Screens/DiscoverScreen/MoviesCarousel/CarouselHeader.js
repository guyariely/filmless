import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../Constants/colors';

const CarouselHeader = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={props.closeCarousel} style={styles.closeButton}>
        <Icon color={colors.text} name="keyboard-arrow-down" size={32} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.watchedButton}>
        <Icon color={colors.text} name="visibility" size={26} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon color={colors.text} name="bookmark-border" size={26} />
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

export default CarouselHeader;