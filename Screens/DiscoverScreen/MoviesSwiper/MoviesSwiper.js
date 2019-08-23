import React from "react";
import { StyleSheet, Modal, View, Dimensions } from 'react-native';
import colors from '../../../Constants/colors';
import Swiper from 'react-native-swiper';
import SwiperHeader from './SwiperHeader';
import SwiperSlide from './SwiperSlide/SwiperSlide';

const MoviesSwiper = props => {

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
      >
        <SwiperHeader closeSwiper={props.closeSwiper} />
        <Swiper 
          showsPagination={false} 
          index={props.firstItem}
          loadMinimal={true}
          containerStyle={styles.container}
        >
        {
          props.movies.map(movie =>
            <SwiperSlide movie={movie} key={movie.id} />
          )
        }
        </Swiper>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.base01
  }
});

export default MoviesSwiper;
