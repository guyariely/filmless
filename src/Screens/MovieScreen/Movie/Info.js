import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../Constants/colors';
import runtimeText from '../../../utils/runtimeText';

const Info = props => {

  const { vote_average, vote_count, runtime, release_date, genres } = props.movie;

  return (
    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <Icon color={colors.primary} name="star" size={24} />
        <Text style={styles.infoText}>
          {vote_average}
          <Text style={styles.voteCount}>  {vote_count}</Text>
        </Text>
      </View>
      {
      runtime &&
      <View style={styles.info}>
        <Icon color={colors.primary} name="schedule" size={24} />
        <Text style={styles.infoText}>
          {runtimeText(runtime)}
        </Text>
      </View>
      }
      <View style={styles.info}>
        <Icon color={colors.primary} name="date-range" size={24} />
        <Text style={styles.infoText}>
          {formatDate(release_date)}
        </Text>
        </View>
      <View style={styles.info}>
        <Icon color={colors.primary} name="movie-creation" size={24} />
        <Text style={styles.infoText}>
          {genres.map(genre => genre.name).join(', ')}
        </Text>
      </View>
    </View>
  );
};

const formatDate = date => {
  const stringDate =  new Date(date).toDateString();
  return stringDate.slice(4, stringDate.length);
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
    color: colors.text04,
    fontSize: 16
  }
});

export default Info;
