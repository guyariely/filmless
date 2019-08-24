import React, { useState, useEffect } from "react";
import { StyleSheet, Modal, View, ActivityIndicator, AsyncStorage } from 'react-native';
import colors from '../../../Constants/colors';
import Swiper from '../../../utils/Swiper';
import SwiperHeader from './SwiperHeader';
import Slide from './Slide/Slide';

const MoviesSwiper = props => {

  const [activeMovie, setActiveMovie] = useState(props.movies[props.firstItem]);
  const [isMovieInWatchlist, setIsMovieInWatchlist] = useState(false);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const loadWatchlist = async () => {
      try {
        const watchlist = await AsyncStorage.getItem('watchlist');
        if (watchlist) {
          setWatchlist(JSON.parse(watchlist));
          checkMovieWatchlistStatus(props.firstItem, JSON.parse(watchlist));
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadWatchlist();
  }, []);

  const checkMovieWatchlistStatus = (index, watchlist) => {
    console.log('checking if', props.movies[index].title, 'is in', watchlist);
    const inWatchlist = watchlist.some(movie => {
      return movie.id == props.movies[index].id;
    });
    setIsMovieInWatchlist(inWatchlist);
  };

  const saveToWatchlist = async () => {
    console.log('saving to watchlist', activeMovie.title);
    setIsMovieInWatchlist(true);

    const updatedWatchlist = watchlist;
    updatedWatchlist.push(activeMovie);
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
    console.log('removing from watchlist', activeMovie.title);
    setIsMovieInWatchlist(false);

    const updatedWatchlist = watchlist.filter(
      movie => movie.id != activeMovie.id
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
        <SwiperHeader 
          closeSwiper={props.closeSwiper} 
          inWatchlist={isMovieInWatchlist}
          saveToWatchlist={saveToWatchlist}
          removeFromWatchlist={removeFromWatchlist}
        />
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
            onIndexChanged={index => {
              setActiveMovie(props.movies[index]);
              checkMovieWatchlistStatus(index, watchlist);
            }}
          > 
            {props.movies.map(movie =>
              <Slide movie={movie} key={movie.id} />
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
