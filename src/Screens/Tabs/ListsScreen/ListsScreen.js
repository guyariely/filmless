import React, { useState, useEffect, useContext } from "react";
import { Text, View, Keyboard, ScrollView } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import { withNavigationFocus } from "react-navigation";

import isSmallScreen from '../../../utils/isSmallScreen';
import List from './List';

const ListsScreen = props => {

  const [showBorder, setShowBorder] = useState(false);

  const lists = ['popular', 'now_playing', 'upcoming', 'top_rated'];

  useEffect(() => Keyboard.dismiss(), [props.isFocused]);

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>Lists</Text>
      <View style={showBorder ? [styles(theme).border, styles(theme).borderVisible] : styles(theme).border}></View>
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
      paddingHorizontal: 28,
      paddingTop: isSmallScreen() ? 10 : 20,
      paddingBottom: 15
    },
    border: {
      borderTopWidth: 1,
      borderColor: theme.base01,
    },
    borderVisible: {
      borderColor: theme.base02,
    },  
  }
};

export default withNavigationFocus(ListsScreen);
