import React, { useState, useEffect, useContext } from "react";
import { Text, View, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import { withNavigationFocus } from "react-navigation";
import isSmallScreen from '../../../utils/isSmallScreen';
import API from '../../../API/Search';
import SearchResults from './SearchResults';

const SearchScreen = props => {

  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  const getSearchResults = () => {
    if (!input) return;
    setShowBorder(false);
    setIsLoading(true);

    API.MultiSearch(input).then(searchResults => {
      setSearchResults(searchResults.data.results);
      setIsLoading(false);
    });
  }

  useEffect(() => Keyboard.dismiss(), [props.isFocused]);

  const { theme } = useContext(ThemesContext);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles(theme).container}>
        <Text style={styles(theme).title}>Search</Text>
        <View style={
          showBorder ?
            [styles(theme).searchButtonContainer, styles(theme).searchButtonContainerBorder] :
            styles(theme).searchButtonContainer}
        >
          <TextInput
            style={input ? [styles(theme).searchButton, styles(theme).searchButton__active] : styles(theme).searchButton}
            keyboardAppearance="dark"
            placeholder="Search"
            placeholderTextColor={theme.text04}
            selectionColor={theme.primary}
            onChangeText={input => setInput(input)}
            value={input}
            returnKeyType="go"
            keyboardType={'ascii-capable'}
            onSubmitEditing={getSearchResults}
          />
        </View>
        <SearchResults
          isLoading={isLoading}
          searchResults={searchResults}
          setShowBorder={setShowBorder}
          selectMovie={movie => {
            props.navigation.push(
              'MovieScreen', { movie, loadDetails: true }
            );
          }}
          openPersonScreen={person => {
            props.navigation.push(
              'PersonScreen', { person, loadDetails: true }
            );
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  )
};


const styles = theme => {
  return {
    container: {
      flex: 1,
      paddingTop: 40,
      backgroundColor: theme.base01,
    },
    title: {
      paddingHorizontal: 28,
      justifyContent: 'flex-end',
      color: theme.text01,
      fontSize: 38,
      paddingTop: isSmallScreen() ? 10 : 20
    },
    searchButtonContainer: {
      paddingTop: 15,
      paddingHorizontal: 28,
      paddingBottom: 30,
      borderBottomWidth: 1,
      borderColor: theme.base01,
    },
    searchButtonContainerBorder: {
      borderColor: theme.base02,
    },
    searchButton: {
      backgroundColor: theme.base02,
      color: theme.text01,
      borderRadius: 5,
      paddingHorizontal: 15,
      paddingVertical: 20,
      fontSize: 24,
    },
    searchButton__active: {
      borderColor: theme.primary,
      borderWidth: 1,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.8,
      shadowRadius: 20,
    }
  }
};

export default withNavigationFocus(SearchScreen);
