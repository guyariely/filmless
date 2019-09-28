import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from "react-native";

const Reviews = props => {

  const { theme } = useContext(ThemesContext);

  const review = ({item: review}) => {
    return (
      <View style={styles(theme).review}>
        <TouchableOpacity 
          onPress={() => props.openReviewScreen(review)}
        >
          <Text style={styles(theme).author}>{review.author}</Text>
          <Text numberOfLines={10} style={styles(theme).content}>{review.content}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles(theme).heading}>REVIEWS</Text>
      {
        props.reviews &&
        <Carousel
          data={props.reviews}
          renderItem={review}
          sliderWidth={ Math.round(Dimensions.get('window').width) }
          itemWidth={ Math.round(Dimensions.get('window').width)  }
          containerCustomStyle={styles(theme).carousel}
          contentContainerCustomStyle={styles(theme).carouselContent}
          layout='tinder'
          loop={true}
        />
      }
    </View>
  );
};

const styles = theme => {
  return {
    heading: {
      color: theme.heading,
      fontWeight: 'bold',
      fontSize: 20,
      paddingHorizontal: 20,
      paddingVertical: 15
    },
    carousel: {
      overflow: 'visible',
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
    },
    carouselContent: {
      paddingVertical: 10
    }, 
    review: {
      backgroundColor: theme.base02,
      borderColor: theme.base01,
      borderBottomWidth: 1,
      height: 320,
      borderRadius: 15,
      paddingHorizontal: 20,
      marginHorizontal: 20,
    },
    author: {
      color: theme.primary,
      marginTop: 28,
      marginBottom: 15,
      fontWeight: 'bold',
      fontSize: 18
    },
    content: {
      color: theme.text01,
      lineHeight: 25,
      fontSize: 16,
    }  
  }
};

export default Reviews;

