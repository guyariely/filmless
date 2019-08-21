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
      <Text style={styles.headerText}></Text>
      <View style={styles.movieToggles}>
        <TouchableOpacity style={styles.watchedButton}>
          <Icon color={colors.text} name="visibility" size={26} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon color={colors.text} name="bookmark-border" size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: colors.base01,
  },  
  closeButton: {
    flex: 1
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
  },
  movieToggles: {
    flex: 1,
    flexDirection: 'row',
  },
  watchedButton: {
    marginLeft: 'auto',
    marginRight: 12
  },
});

export default CarouselHeader;