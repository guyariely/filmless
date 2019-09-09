import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../../Constants/colors';
import Header from './Header';

const ReviewScreen = props => {

  const movieTitle = props.navigation.getParam('movieTitle', '');
  const review = props.navigation.getParam('review', '');

  const [showBorder, setShowBorder] = useState(false);

  return (
    <View style={styles.slide}>
      <Header goBack={() => props.navigation.goBack()} />
      <Text style={styles.title}>{movieTitle}</Text>
      <Text style={styles.subtitle}>
        A review by <Text style={styles.authorName}>{review.author}</Text>
      </Text>
      <View 
        style={showBorder ? [styles.border, styles.borderVisible] : styles.border}>
      </View>
      <ScrollView 
        scrollEventThrottle={16}
        onScroll={e => setShowBorder(e.nativeEvent.contentOffset.y >= 1)}
      >
        <Text style={styles.review}>
          {review.content}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: colors.base01,
    paddingTop: 10,
    marginTop: 'auto',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.text01,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.text01,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  authorName: {
    color: colors.primary,
  },
  border: {
    borderTopWidth: 1,
    borderColor: colors.base01,
  },
  borderVisible: {
    borderColor: colors.base02,
  },
  review: {
    fontSize: 18,
    paddingBottom: 30,
    paddingHorizontal: 20,
    color: colors.text03,
  }
});

export default ReviewScreen;
