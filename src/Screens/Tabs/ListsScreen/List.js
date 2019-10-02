import React, { useState, useEffect, useContext } from "react";
import { View, Text, ActivityIndicator } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import API from '../../../API/Movies';
import isSmallScreen from '../../../utils/isSmallScreen';

import MovieCardsRow from '../../../Components/MovieCardsRow';

const List = props => {

  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {loadList(page).then(() => setIsLoading(false))}, []);

  const loadList = async page => {

    API.GetList(props.listType, page).then(listResult => {
      if (page == 1) {
        setList(listResult);
      } 
      else if (listResult.length > 0) {
        setList(list.concat(listResult));
      }  
      setPage(page + 1);
    });
  };

  const { theme } = useContext(ThemesContext);

  if (isLoading) {
    return (
      <View style={styles(theme).container}>
        <Text style={styles(theme).heading}>
          {props.listType.toUpperCase().replace('_', ' ')}
        </Text>
        <ActivityIndicator style={styles(theme).activityIndicator} />
      </View>
    );
  }

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).heading}>
        {props.listType.toUpperCase().replace('_', ' ')}
      </Text>
      <MovieCardsRow 
        type='list'
        movies={
          props.listType == 'upcoming' ?
          list.filter(movie => new Date(movie.release_date).getTime() > new Date().getTime()) :
          list
        } 
        loadMovies={() => loadList(page)}
        selectMovie={props.selectMovie}
      />
    </View>
  )
};

const styles = theme => {
  return {
    container: {
      height: isSmallScreen() ? 300 : 340,
      paddingBottom: isSmallScreen() ? 15 : 0
    },
    heading: {
      color: theme.heading,
      fontWeight: 'bold',
      fontSize: 20,
      paddingHorizontal: 28,
      paddingBottom: 15
    },
    activityIndicator: {
      height: 360,
      paddingHorizontal: 28,
      justifyContent: 'center',
    },  
  }
};

export default List;
