import React, { useState, useEffect, useContext } from "react";
import { Text, View } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import { withNavigationFocus } from "react-navigation";
import { getHidelist } from '../../utils/hidelistActions';
import Header from './Header';
import MovieCardsColumn from '../../Components/MoviesCardsColumn/MovieCardsColumn';

const HidelistScreen = props => {

  const [hidelist, setHidelist] = useState([]);

  useEffect(() => {
    getHidelist().then(hidelist => setHidelist(hidelist.reverse()))
    .catch(error => console.log(error));
  }, [props.isFocused]);

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).slide}>
      <Header 
        goBack={() => props.navigation.goBack()} 
        goRoot={() => props.navigation.popToTop()}
      />
      <Text style={styles(theme).title}>Filtered Films</Text>
      {
        hidelist.length > 0 &&
        <MovieCardsColumn movies={hidelist} type='hidelist' />
      }
    </View>
  );
};

const styles = theme => {
  return {
    slide: {
      flex: 1,
      backgroundColor: theme.base01,
      paddingTop: 10,
      marginTop: 'auto',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 28,
      color: theme.text01,
      textAlign: 'center',
      paddingHorizontal: 20,
      marginBottom: 20
    }
  }
};

export default withNavigationFocus(HidelistScreen);
