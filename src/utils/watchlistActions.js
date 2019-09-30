import { AsyncStorage } from 'react-native';

const getWatchlist = async () => {
  try {
    const watchlist = await AsyncStorage.getItem('watchlist');
    if (!watchlist) {
      return [];
    }
    return JSON.parse(watchlist).reverse();  
  } 
  catch (error) {
    console.log(error);
  }
};

const getWatchlistStatus = async movieId => {
  try {
    const watchlist = await AsyncStorage.getItem('watchlist');
    if (!watchlist) return false;
    const watchlistIds = JSON.parse(watchlist).map(movie => movie.id);
    return watchlistIds.includes(movieId);  
  } 
  catch (error) {
    console.log(error);
  }
};

const saveToWatchlist = async movie => {
  try {
    movie.dateAdded = new Date().getTime();
    let updatedWatchlist = [];

    const watchlist = await AsyncStorage.getItem('watchlist');
    if (watchlist) updatedWatchlist = JSON.parse(watchlist);

    updatedWatchlist.push(movie);
    await AsyncStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  } catch (error) {
    console.log(error);
  }
};

const removeFromWatchlist = async movie => {
  try {
    const watchlist = await AsyncStorage.getItem('watchlist');
    const updatedWatchlist = JSON.parse(watchlist).filter(
      savedMovie => savedMovie.id != movie.id
    );

    await AsyncStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  } catch (error) {
    console.log(error);
  }
};


export { 
  getWatchlist, 
  getWatchlistStatus, 
  saveToWatchlist, 
  removeFromWatchlist 
};

