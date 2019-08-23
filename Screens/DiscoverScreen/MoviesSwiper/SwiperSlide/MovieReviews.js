import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../../../../Constants/colors';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from "react-native";

const MovieReviews = props => {

  const review = ({item: review}) => {
    return (
      <ScrollView style={styles.review}>
        <Text style={styles.author}>{review.author}</Text>
        <Text style={styles.content}>{review.content}</Text>
      </ScrollView>
    );
  };

  return (
    <View>
      <Text style={styles.heading}>REVIEWS</Text>
      {
        props.movie.reviews &&
        <Carousel
          data={props.movie.reviews}
          renderItem={review}
          sliderWidth={ Math.round(Dimensions.get('window').width) }
          itemWidth={ Math.round(Dimensions.get('window').width)  }
          containerCustomStyle={styles.carousel}
          contentContainerCustomStyle={styles.carouselContent}
          layout='tinder'
          loop={true}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  carousel: {
    marginBottom: 50,
    overflow: 'visible',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
  },
  carouselContent: {
    paddingVertical: 10
  }, 
  review: {
    backgroundColor: colors.base02,
    borderColor: colors.base01,
    borderBottomWidth: 1,
    height: 300,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  author: {
    color: colors.primary,
    marginTop: 28,
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 18
  },
  content: {
    color: colors.text,
    lineHeight: 25,
    fontSize: 16,
    paddingVertical: 0,
    marginBottom: 30
  }
});

export default MovieReviews;

