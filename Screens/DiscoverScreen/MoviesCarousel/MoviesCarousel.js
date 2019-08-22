import React from "react";
import { StyleSheet, Modal, View, Dimensions } from 'react-native';
import colors from '../../../Constants/colors';
import Carousel from 'react-native-snap-carousel';
import CarouselHeader from './CarouselHeader';
import CarouselSlide from './CarouselSlide/CarouselSlide';

const MoviesCarousel = props => {

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
      >
        <CarouselHeader closeCarousel={props.closeCarousel} />
        <Carousel
          initialNumToRender={props.movies.length}
          layout="stack"
          loop={true}
          data={props.movies}
          renderItem={({item}) => <CarouselSlide movie={item} />}
          sliderWidth={ Math.round(Dimensions.get('window').width) }
          itemWidth={ Math.round(Dimensions.get('window').width) }
          firstItem={props.firstItem}
          containerCustomStyle={styles.carousel}
        />
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base01
  },
  carousel: {
    backgroundColor: colors.base01,
  }
});

export default MoviesCarousel;
