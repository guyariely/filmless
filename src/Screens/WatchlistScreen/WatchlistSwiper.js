import React, { useState } from "react";
import { StyleSheet, Modal, View, AsyncStorage } from 'react-native';
import colors from '../../Constants/colors';
import Swiper from '../../Swiper/Swiper';
import Slide from '../../Swiper/Slide/Slide';

const WatchlistSwiper = props => {

  const [currentIndex, setCurrentIndex] = useState(props.firstItem);
  const [watchlist, setWatchlist] = useState(props.watchlist);

  const saveToWatchlist = async () => {

    // marking it as 'saved' locally in the swiper
    const updatedLocalWatchlist = watchlist;
    updatedLocalWatchlist[currentIndex].inWatchlist = true;
    setWatchlist(updatedLocalWatchlist);

    // saving it in the original watchlist 
    const savedMovie = watchlist[currentIndex];
    savedMovie.dateAdded = new Date().getTime();
    const updatedWatchlist = props.watchlist;
    updatedWatchlist.push(savedMovie);
    props.setWatchlist(updatedWatchlist);

    try {
      await AsyncStorage.setItem(
        'watchlist', JSON.stringify(updatedWatchlist)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWatchlist = async () => {
    
    // marking it as 'removed' locally in the swiper
    const updatedLocalWatchlist = watchlist;
    updatedLocalWatchlist[currentIndex].inWatchlist = false;
    setWatchlist(updatedLocalWatchlist);

    // removing it from the original watchlist 
    const updatedWatchlist = props.watchlist.filter(
      movie => movie.id != watchlist[currentIndex].id
    );
    props.setWatchlist(updatedWatchlist);

    // removing it from the local storage
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
          <Swiper 
            showsPagination={false} 
            index={props.firstItem}
            loadMinimal={true}
            containerStyle={styles.swiper}
            onIndexChanged={index => setCurrentIndex(index)}
          > 
            {watchlist.map(movie =>
              <Slide 
                movie={movie} 
                key={movie.id} 
                closeSwiper={props.closeSwiper}
                removeFromWatchlist={removeFromWatchlist}
                saveToWatchlist={saveToWatchlist}
              />
            )}
          </Swiper>
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

export default WatchlistSwiper;