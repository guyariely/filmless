import React, { useState } from "react";
import { StyleSheet, Modal, View, ActivityIndicator, AsyncStorage } from 'react-native';
import colors from '../../Constants/colors';
import Swiper from '../../Swiper/Swiper';
import Slide from '../../Swiper/Slide/Slide';

const MoviesSwiper = props => {

  const [watchlist, setWatchlist] = useState(props.watchlist);
  const [currentIndex, setCurrentIndex] = useState(props.firstItem);

  const saveToWatchlist = async () => {
    const updatedMovies = props.movies;
    updatedMovies[currentIndex].inWatchlist = true;
    props.setMovies(updatedMovies);

    const updatedWatchlist = watchlist;
    updatedWatchlist.push(props.movies[currentIndex]);
    setWatchlist(updatedWatchlist)

    try {
      await AsyncStorage.setItem(
        'watchlist', JSON.stringify(updatedWatchlist)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWatchlist = async () => {
    const updatedMovies = props.movies;
    updatedMovies[currentIndex].inWatchlist = false;
    props.setMovies(updatedMovies);

    const updatedWatchlist = watchlist.filter(
      movie => movie.id != props.movies[currentIndex].id
    );
    setWatchlist(updatedWatchlist);

    try {
      await AsyncStorage.setItem(
        'watchlist', JSON.stringify(updatedWatchlist)
      );
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
      >
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
            onIndexChanged={index => setCurrentIndex(index)}
          > 
            {props.movies.map(movie =>
              <Slide 
                movie={movie} 
                key={movie.id} 
                closeSwiper={props.closeSwiper}
                removeFromWatchlist={removeFromWatchlist}
                saveToWatchlist={saveToWatchlist}
              />
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