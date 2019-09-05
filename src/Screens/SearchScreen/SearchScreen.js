import React, { useState, useEffect } from "react";
import API_KEY from '../../../env';
import { StyleSheet, Text, View, TextInput, ActivityIndicator, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { withNavigationFocus } from "react-navigation";
import SearchResults from './SearchResults';
import MovieModal from './MovieModal';
import axios from 'axios';
import colors from '../../Constants/colors';
import isSmallScreen from '../../utils/isSmallScreen';

const SearchScreen = props => {

  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getSearchResults = async () => {
    if (!input) return;
    setShowBorder(false);
    setIsLoading(true);
    const searchResults = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${escape(input)}&include_adult=false`);
    setSearchResults(searchResults.data.results);
    setIsLoading(false);
  }
  
  useEffect(() => Keyboard.dismiss(), [props.isFocused])
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Search</Text>
        <View style={
          showBorder ? 
          [styles.searchButtonContainer, styles.searchButtonContainerBorder] : 
          styles.searchButtonContainer}
        >
          <TextInput
            style={input ? [styles.searchButton, styles.searchButton__active] : styles.searchButton}
            keyboardAppearance="dark"
            placeholder="Search movies"
            placeholderTextColor={colors.text03}
            selectionColor={colors.primary}
            onChangeText={input => setInput(input)}
            value={input}
            returnKeyType="go"
            keyboardType={'ascii-capable'}
            onSubmitEditing={getSearchResults}
          />
        </View>
        { 
          isLoading ?
          <View style={styles.activityIndicator}>
            <ActivityIndicator size='small' color={colors.text01} />
          </View> 
          :
          <SearchResults 
            searchResults={searchResults}
            setShowBorder={setShowBorder}
            selectMovie={movie => {
              setSelectedMovie(movie);
              setShowModal(true);
            }}
          />
        }
        {
          showModal &&
          <MovieModal 
            visible={showModal} 
            movie={selectedMovie}
            closeModal={() => setShowModal(false)}
          /> 
        }
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base01,
  },
  title: {
    paddingHorizontal: 28,
    justifyContent: 'flex-end',
    color: colors.text01,
    fontSize: 38,
    paddingTop: isSmallScreen() ? 10 : 20
  },
  searchButtonContainer: {
    paddingTop: 15,
    paddingHorizontal: 28,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: colors.base01,
  },
  searchButtonContainerBorder: {
    borderColor: colors.base02,
  },
  searchButton: {
    backgroundColor: colors.base02,
    color: colors.text01,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
    fontSize: 24,
  },
  searchButton__active: {
    borderColor: colors.primary,
    borderWidth: 1,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default withNavigationFocus(SearchScreen);
