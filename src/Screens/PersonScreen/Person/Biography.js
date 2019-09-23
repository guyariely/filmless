import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../../../Constants/colors';

const Biography = props => {
  return (
    <View>
      <Text style={styles.heading}>BIOGRAPHY</Text>
      <TouchableOpacity onPress={props.openBiographyScreen}>
        <Text 
          style={styles.biography}
          numberOfLines={6}
        >
          {props.biography}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: colors.heading,
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  biography: {
    color: colors.text03,
    paddingHorizontal: 20,
    marginVertical: 5,
    fontSize: 18,
  }
});

export default Biography;
