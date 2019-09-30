import { AsyncStorage } from 'react-native';

const getHidelist = async () => {
  try {
    const hidelist = await AsyncStorage.getItem('hidelist');
    if (hidelist) {
      return JSON.parse(hidelist);
    }
    return [];  
  } 
  catch (error) {
    console.log(error);
  }
};

const getHidelistIDs = async () => {
  try {
    const hidelist = await AsyncStorage.getItem('hidelist');
    if (hidelist) {
      return JSON.parse(hidelist).map(movie => movie.id);
    }
    return [];  
  } 
  catch (error) {
    console.log(error);
  }
  
};

const getHidelistRecentImages = async () => {
  try {
    const hidelist = await AsyncStorage.getItem('hidelist');
    if (hidelist) {
      return JSON.parse(hidelist).reverse().slice(0, 3).map(
        movie => movie.poster_path
      );
    }
    return [];  
  } 
  catch (error) {
    console.log(error);
  }
};

const getHidelistStatus = async movieId => {
  try {
    const hidelist = await AsyncStorage.getItem('hidelist');
    if (!hidelist) return false;
    const hidelistIds = JSON.parse(hidelist).map(movie => movie.id);
    return hidelistIds.includes(movieId);
  } 
  catch (error) {
    console.log(error);
  }
  
};

const saveToHidelist = async movie => {
  try {
    movie.dateAdded = new Date().getTime();
    let updatedHidelist = [];

    const hidelist = await AsyncStorage.getItem('hidelist');
    if (hidelist) updatedHidelist = JSON.parse(hidelist);

    updatedHidelist.push(movie);
    await AsyncStorage.setItem('hidelist', JSON.stringify(updatedHidelist));
  } catch (error) {
    console.log(error);
  }
};

const removeFromHidelist = async movie => {
  try {
    const hidelist = await AsyncStorage.getItem('hidelist');
    const updatedHidelist = JSON.parse(hidelist).filter(
      savedMovie => savedMovie.id != movie.id
    );

    await AsyncStorage.setItem('hidelist', JSON.stringify(updatedHidelist));
  } catch (error) {
    console.log(error);
  }
};


export { 
  getHidelist, 
  getHidelistIDs, 
  getHidelistRecentImages, 
  getHidelistStatus, 
  saveToHidelist, 
  removeFromHidelist 
};

