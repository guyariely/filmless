import React, { useState, useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, TextInput } from "react-native";
import { ThemesContext } from '../Context/ThemesContext';
import runtimeText from '../utils/runtimeText';

const MovieCardsColumn = props => {

  const [searchInput, setSearchInput] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  
  const [showBorder, setShowBorder] = useState(false);

  const { theme } = useContext(ThemesContext);

  return (
    <View>
      <View style={styles(theme).searchContainer}>
        <TextInput
          style={styles(theme).searchInput}
          keyboardAppearance="dark"
          placeholder="Search"
          placeholderTextColor={theme.text04}
          selectionColor={theme.primary}
          onChangeText={input => {
            setFilteredMovies(props.movies.filter(movie => 
              movie.title.toLowerCase().includes(input.toLowerCase())
            ));
            setSearchInput(input);
          }}
          value={searchInput}
        />
      </View>
      <View style={[styles(theme).movieCards, showBorder && styles(theme).movieCardsBorder]}>
        <FlatList
          contentContainerStyle={styles(theme).flatList}
          keyExtractor={movie => movie.id.toString()}
          onScroll={e => setShowBorder(e.nativeEvent.contentOffset.y >= 1 && props.movies.length > 0)}
          scrollEventThrottle={16}
          data={searchInput ? filteredMovies : props.movies}
          renderItem={({item: movie}) => (
            <TouchableOpacity style={styles(theme).movie} onPress={() => props.selectMovie(movie)}>
              <View style={styles(theme).imageShadow}>
                <View style={styles(theme).imageContainer}>
                  <Image
                    style={styles(theme).image}
                    source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}} 
                  />
                </View>
              </View>
              <View style={styles(theme).details}>
                <Text style={styles(theme).title}>
                  {movie.title}
                </Text>
                <Text style={styles(theme).info}>
                  {movie.vote_average} | {runtimeText(movie.runtime)} | {movie.release_date.slice(0, 4)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
    
  );
};

const styles = theme => {
  return {
    searchContainer: {
      paddingHorizontal: 28,
    },
    searchInput: {
      backgroundColor: theme.base02,
      color: theme.text01,
      borderRadius: 5,
      paddingHorizontal: 15,
      paddingVertical: 15,
      fontSize: 20
    },
    movieCards: {
      marginTop: 16,
      borderTopWidth: 1,
      borderColor: theme.base01,
    },
    movieCardsBorder: {
      borderColor: theme.base02,
    },
    flatList: {
      paddingBottom: 250,
      paddingHorizontal: 28,
    },  
    movie: {
      flexDirection: 'row',
      marginBottom: 20, 
      flex: 1
    },
    imageShadow: {
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
    },
    imageContainer: {
      borderRadius: 15,
      height: 140,
      width: 100,
      overflow: 'hidden',
      backgroundColor: theme.base02
    },
    image: {
      flex: 1,
      resizeMode: 'cover'
    },
    details: {
      flex: 2,
      justifyContent: 'center',
      marginLeft: 15
    },
    title: {
      marginBottom: 8,
      color: theme.text01,
      fontSize: 22,
      fontWeight: '700',
    },
    info: {
      color: theme.text03,
      fontSize: 18,
      fontWeight: '600',
    }  
  }
};

export default MovieCardsColumn;

