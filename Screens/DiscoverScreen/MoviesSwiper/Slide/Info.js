import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../../Constants/colors';
import runtimeText from '../../../../utils/runtimeText';

const Info = props => {

  return (
    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <Icon color={colors.primary} name="star" size={24} />
        <Text style={styles.infoText}>
          {props.movie.vote_average}
          <Text style={styles.voteCount}>  {props.movie.vote_count}</Text>
        </Text>
      </View>
      {
      props.movie.runtime &&
      <View style={styles.info}>
        <Icon color={colors.primary} name="schedule" size={24} />
        <Text style={styles.infoText}>
          {runtimeText(props.movie.runtime)}
        </Text>
      </View>
      }
      <View style={styles.info}>
        <Icon color={colors.primary} name="date-range" size={24} />
        <Text style={styles.infoText}>
          {formatDate(props.movie.release_date)}
        </Text>
        </View>
      <View style={styles.info}>
        <Icon color={colors.primary} name="movie-creation" size={24} />
        <Text style={styles.infoText}>
          {parseIDsToGenres(props.movie.genre_ids)}
        </Text>
      </View>
    </View>
  );
};

const formatDate = date => {
  return date.split('-').reverse().join('.');
};

const parseIDsToGenres = IDs => {

  const genres = { 
    '12': 'Adventure',
    '14': 'Fantasy',
    '16': 'Animation',
    '18': 'Drama',
    '27': 'Horror',
    '28': 'Action',
    '35': 'Comedy',
    '36': 'History',
    '37': 'Western',
    '53': 'Thriller',
    '80': 'Crime',
    '99': 'Documentary',
    '878': 'Science Fiction',
    '9648': 'Mystery',
    '10402': 'Music',
    '10749': 'Romance',
    '10751': 'Family',
    '10752': 'War',
    '10770': 'TV Movie' 
  };

  return IDs.map(id => genres[id]).join(', ');
};

const styles = StyleSheet.create({
  infoContainer:{
    flex: 4,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'space-around'
  },
  info: {
    flexDirection: 'row'
  },
  infoText: {
    color: colors.text01,
    fontSize: 20,
    marginLeft: 10,
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  voteCount: {
    color: colors.text02,
    fontSize: 16
  }
});

export default Info;
