import React, { useContext } from "react";
import { Text, View } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import runtimeText from '../../../utils/runtimeText';

const Info = props => {

  const { vote_average, vote_count, runtime, release_date, genres } = props.movie;

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).infoContainer}>
      <View style={styles(theme).info}>
        <Icon color={theme.primary} name="star" size={24} />
        <Text style={styles(theme).infoText}>
          {vote_average}
          <Text style={styles(theme).voteCount}>  {vote_count}</Text>
        </Text>
      </View>
      {
      runtime &&
      <View style={styles(theme).info}>
        <Icon color={theme.primary} name="schedule" size={24} />
        <Text style={styles(theme).infoText}>
          {runtimeText(runtime)}
        </Text>
      </View>
      }
      <View style={styles(theme).info}>
        <Icon color={theme.primary} name="date-range" size={24} />
        <Text style={styles(theme).infoText}>
          {formatDate(release_date)}
        </Text>
        </View>
      <View style={styles(theme).info}>
        <Icon color={theme.primary} name="movie-creation" size={24} />
        <Text style={styles(theme).infoText}>
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

const styles = theme => {
  return {
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
      color: theme.text01,
      fontSize: 20,
      marginLeft: 10,
      justifyContent: 'flex-end',
      alignSelf: 'center',
    },
    voteCount: {
      color: theme.text04,
      fontSize: 16
    }  
  }
};

export default Info;
