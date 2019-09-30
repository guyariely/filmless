import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { ThemesContext } from '../../../../Context/ThemesContext';
import { DiscoverContext } from '../../../../Context/DiscoverContext';

const Sorting = props => {

  const { sortBy, setSortBy } = useContext(DiscoverContext); 

  const sortOptions = [
    {name: 'POPULARITY', parameter: ''},
    {name: 'RATING', parameter: 'vote_average'},
    {name: 'RELEASE DATE', parameter: 'release_date'},
    {name: 'VOTE COUNT', parameter: 'vote_count'}
  ];

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).label}>CHOOSE A SORTING METHOD</Text>
      <View style={styles(theme).buttonsContainer}>
      {
        sortOptions.map((sortMethod, index) => {
          return (
            <TouchableOpacity 
              key={sortMethod.parameter} 
              style={[
                styles(theme).button, 
                sortBy == sortMethod.parameter && styles(theme).buttonActive,
                index > 1 && styles(theme).secondLineButton
              ]}
              onPress={() => {
                sortBy == sortMethod.parameter ?
                setSortBy(null) :
                setSortBy(sortMethod.parameter)
              }} 
            >
              <Text style={[
                styles(theme).text,
                sortBy == sortMethod.parameter && styles(theme).textActive
              ]}>
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

const styles = theme => {
  return {
    container: {
      paddingHorizontal: 26,
      paddingVertical: 20
    },
    label: {
      color: theme.text03, 
      fontSize: 18,
    },
    buttonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    button: {
      paddingVertical: 15,
      marginTop: 20,
      width: 120,
      borderColor: theme.base01,
      borderWidth: 1,
      borderRadius: 5
    },
    secondLineButton: {
      marginTop: 30
    },
    buttonActive: {
      backgroundColor: theme.base01,
      borderColor: theme.primary,
    },
    text: {
      textAlign: 'center',
      color: theme.text04,
      fontSize: 15
    },
    textActive: {
      color: theme.text01,
    }  
  }
};

export default Sorting;