import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import API from '../../../API/Movies';
import colors from '../../../Constants/colors';
import MovieCards from '../../../Components/MovieCards';

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

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          {props.listType.toUpperCase().replace('_', ' ')}
        </Text>
        <ActivityIndicator style={styles.activityIndicator} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {props.listType.toUpperCase().replace('_', ' ')}
      </Text>
      <MovieCards 
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

const styles = StyleSheet.create({
  container: {
    height: 340
  },
  heading: {
    color: colors.heading,
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
});

export default List;
