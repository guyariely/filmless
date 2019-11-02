import React, { useContext } from "react";
import { Text, View } from "react-native";
import { ThemesContext } from "../../../Context/ThemesContext";

const Info = props => {
  const {
    known_for_department,
    birthday,
    deathday,
    place_of_birth
  } = props.person;

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).infoContainer}>
      <Text style={styles(theme).info}>
        <Text style={styles(theme).infoTitle}>Known for: </Text>
        {known_for_department}
      </Text>
      <Text style={styles(theme).info}>
        <Text style={styles(theme).infoTitle}>Born: </Text>
        {formatDate(birthday)}
      </Text>
      {deathday && (
        <Text style={styles(theme).info}>
          <Text style={styles(theme).infoTitle}>Died: </Text>
          {formatDate(deathday)}
        </Text>
      )}
      {place_of_birth && (
        <Text style={styles(theme).info}>
          <Text style={styles(theme).infoTitle}>Place of birth: </Text>
          {place_of_birth}
        </Text>
      )}
    </View>
  );
};

const formatDate = date => {
  const stringDate = new Date(date).toDateString();
  return stringDate.slice(4, stringDate.length);
};

const styles = theme => {
  return {
    infoContainer: {
      flex: 4,
      paddingHorizontal: 15,
      paddingVertical: 5,
      justifyContent: "space-evenly"
    },
    info: {
      color: theme.text03,
      fontSize: 20
    },
    infoTitle: {
      color: theme.text01
    }
  };
};

export default Info;
