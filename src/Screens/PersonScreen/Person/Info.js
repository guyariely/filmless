import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../../Constants/colors';

const Info = props => {

  const { known_for_department, birthday, deathday, place_of_birth } = props.person;

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.info}>
        <Text style={styles.infoTitle}>Known for: </Text>
        {known_for_department}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.infoTitle}>Born: </Text>
        {formatDate(birthday)}
       </Text>
       {
        deathday &&
        <Text style={styles.info}>
          <Text style={styles.infoTitle}>Died: </Text>
          {formatDate(deathday)}
        </Text>
       }
       <Text style={styles.info}>
        <Text style={styles.infoTitle}>Place of birth: </Text>
        {place_of_birth}
      </Text>
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
    justifyContent: 'space-evenly'
  },
  info: {
    color: colors.text03,
    fontSize: 20,
  },
  infoTitle: {
    color: colors.text01
  }
});

export default Info;
