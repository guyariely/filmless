import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from '../../../../Constants/colors';

const Sorting = props => {

  const { sortBy, setSortBy } = props.screenProps; 

  const sortOptions = [
    {name: 'POPULARITY', parameter: 'popularity'},
    {name: 'RATING', parameter: 'vote_average'},
    {name: 'RELEASE DATE', parameter: 'release_date'},
    {name: 'VOTE COUNT', parameter: 'vote_count'}
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>CHOOSE A SORTING METHOD</Text>
      <View style={styles.buttonsContainer}>
      {
        sortOptions.map(sortMethod => {
          return (
            <TouchableOpacity 
              key={sortMethod.parameter} 
              style={
                sortBy == sortMethod.parameter ?
                [styles.button, styles.buttonActive] :
                styles.button
              }
              onPress={() => {
                sortBy == sortMethod.parameter ?
                setSortBy(null) :
                setSortBy(sortMethod.parameter)
              }} 
            >
              <Text style={
                sortBy == sortMethod.parameter ?
                [styles.text, styles.textActive] :
                styles.text
              }>
                {sortMethod.name}
              </Text>
            </TouchableOpacity>
          );
        })
      }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingVertical: 20
  },
  label: {
    color: colors.text03, 
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  button: {
    paddingVertical: 15,
    marginTop: 20,
    width: 120,
    borderColor: colors.base01,
    borderWidth: 1,
    borderRadius: 5
  },
  buttonActive: {
    backgroundColor: colors.base01,
    borderColor: colors.primary,
  },
  text: {
    textAlign: 'center',
    color: colors.text02,
    fontSize: 15
  },
  textActive: {
    color: colors.text01,
  }
});

export default Sorting;