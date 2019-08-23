import React from "react";
import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native';
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
        {
          props.isLoading 
          ?
          <View style={styles.loadingScreen}>
            <ActivityIndicator />
          </View> 
          :
          <Swiper 
            showsPagination={false} 
            index={props.firstItem}
            loadMinimal={true}
            containerStyle={styles.swiper}
            > 
            {props.movies.map(movie =>
              <SwiperSlide movie={movie} key={movie.id} />
            )}
          </Swiper>
        }
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.base01,
  },
  swiper: {
    backgroundColor: colors.base01,
  },
  loadingScreen: {
    backgroundColor: colors.base01,
    justifyContent: 'center',
    flex: 1
  }
});

export default MoviesSwiper;
