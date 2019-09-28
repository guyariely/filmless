import React, { useState, useContext } from "react";
import { Text, View, ScrollView } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import Header from './Header';

const ReviewScreen = props => {

  const movieTitle = props.navigation.getParam('movieTitle', '');
  const review = props.navigation.getParam('review', '');

  const [showBorder, setShowBorder] = useState(false);

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).slide}>
      <Header 
        goBack={() => props.navigation.goBack()} 
        goRoot={() => props.navigation.popToTop()}
      />
      <Text style={styles(theme).title}>{movieTitle}</Text>
      <Text style={styles(theme).subtitle}>
        A review by <Text style={styles(theme).authorName}>{review.author}</Text>
      </Text>
      <View 
        style={showBorder ? [styles(theme).border, styles(theme).borderVisible] : styles(theme).border}>
      </View>
      <ScrollView 
        scrollEventThrottle={16}
        onScroll={e => setShowBorder(e.nativeEvent.contentOffset.y >= 1)}
      >
        <Text style={styles(theme).review}>
          {review.content}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = theme => {
  return {
    slide: {
      flex: 1,
      backgroundColor: theme.base01,
      paddingTop: 10,
      marginTop: 'auto',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 28,
      color: theme.text01,
      textAlign: 'center',
      paddingHorizontal: 20,
      marginBottom: 20
    },
    subtitle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: theme.text01,
      paddingHorizontal: 20,
      marginBottom: 20
    },
    authorName: {
      color: theme.primary,
    },
    border: {
      borderTopWidth: 1,
      borderColor: theme.base01,
    },
    borderVisible: {
      borderColor: theme.base02,
    },
    review: {
      fontSize: 18,
      paddingBottom: 30,
      paddingHorizontal: 20,
      color: theme.text02,
    }  
  }
};

export default ReviewScreen;
