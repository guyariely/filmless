import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, PanResponder } from "react-native";
import { ThemesContext } from '../../Context/ThemesContext';
import Picture from '../Picture';
import runtimeText from '../../utils/runtimeText';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MovieCard = ({movie, openMovieScreen, removeFromList}) => {

  const { theme } = useContext(ThemesContext);

  const RemoveButton = () => {
    return (
      <TouchableOpacity 
        style={styles(theme).removeButton}
        onPress={() => removeFromList(movie)}
      > 
      <View style={styles(theme).removeButtonContainer}>
        <Icon color={theme.primary} name='remove-circle-outline' size={35} />
      </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeout 
      right={[{
        backgroundColor: 'transparent', 
        component: <RemoveButton />
      }]}
      style={styles(theme).container}
    >
      <TouchableOpacity 
        onPress={() => openMovieScreen(movie)} 
        style={styles(theme).movie}
      >
        <Picture 
          type='poster'
          file_path={movie.poster_path} 
          dimensions={{width: 100, height: 140}}
          icon={{name: 'local-movies', size: 60, position: {top: 40, left: 20}}}
        />
        <View style={styles(theme).details}>
          <Text style={styles(theme).title}>
            {movie.title}
          </Text>
          <Text style={styles(theme).info}>
            {movie.vote_average} | {runtimeText(movie.runtime)} | {movie.release_date.slice(0, 4)}
          </Text>
        </View>
      </TouchableOpacity>
    </Swipeout>
  );
};

const styles = theme => {
  return {
    container: {
      paddingHorizontal: 28,
      paddingBottom: 20,
      backgroundColor: theme.base01
    },
    movie: {
      flex: 1,
      flexDirection: 'row',
    },
    details: {
      flex: 2,
      justifyContent: 'center',
      marginLeft: 15
    },
    title: {
      marginBottom: 8,
      color: theme.text01,
      fontSize: 22,
      fontWeight: '700',
    },
    info: {
      color: theme.text03,
      fontSize: 18,
      fontWeight: '600',
    },
    removeButtonContainer: {
      flexDirection: 'row', 
      justifyContent: 'center'
    },
    removeButton: {
      flex: 1,
      justifyContent: 'center'
    }
  }
};

export default MovieCard;

