import { AsyncStorage } from 'react-native';

const getTheme = async () => {
  try {
    const theme = await AsyncStorage.getItem('theme');
    if (theme) {
      return JSON.parse(theme);
    }
    return false; 
  } 
  catch (error) {
    console.log(error);
  }
};

const saveTheme = async theme => {
  try {
    await AsyncStorage.setItem('theme', JSON.stringify(theme));
  } 
  catch (error) {
    console.log(error);
  }
};

export { getTheme, saveTheme };

