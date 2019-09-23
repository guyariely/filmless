import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Keyboard, ScrollView } from 'react-native';
import { withNavigationFocus } from "react-navigation";
import colors from '../../../Constants/colors';
import isSmallScreen from '../../../utils/isSmallScreen';
import List from './List';

const ListsScreen = props => {

  const [showBorder, setShowBorder] = useState(false);

  const lists = ['popular', 'now_playing', 'upcoming', 'top_rated'];

  useEffect(() => Keyboard.dismiss(), [props.isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lists</Text>
      <View style={showBorder ? [styles.border, styles.borderVisible] : styles.border}></View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={e => setShowBorder(e.nativeEvent.contentOffset.y >= 1)}
      >
      {
        lists.map(list => {
          return (
            <List 
              key={list}
              listType={list}  
              selectMovie={movie => {
                props.navigation.push(
                  'MovieScreen', { movie, loadDetails: true }
                );
              }} 
            />
          );
        })
      }
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base01,
  },
  title: {
    justifyContent: 'flex-end',
    color: colors.text01,
    fontSize: 38,
    paddingHorizontal: 28,
    paddingTop: isSmallScreen() ? 10 : 20,
    paddingBottom: 15
  },
  border: {
    borderTopWidth: 1,
    borderColor: colors.base01,
  },
  borderVisible: {
    borderColor: colors.base02,
  },
});

export default withNavigationFocus(ListsScreen);
