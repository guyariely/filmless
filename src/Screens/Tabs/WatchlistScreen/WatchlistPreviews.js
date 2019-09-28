import React, { useState, useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { ThemesContext } from '../../../Context/ThemesContext';
import runtimeText from '../../../utils/runtimeText';

const WatchlistPreviews = props => {

  const [showBorder, setShowBorder] = useState(false);

  const { theme } = useContext(ThemesContext);

  return (
    <View style={showBorder ? [styles(theme).watchlistPreviews, styles(theme).watchlistPreviewsBorder] : styles(theme).watchlistPreviews}>
      <FlatList
        contentContainerStyle={styles(theme).flatList}
        keyExtractor={movie => movie.id.toString()}
        onScroll={e => setShowBorder(e.nativeEvent.contentOffset.y >= 1 && props.watchlist.length > 0)}
        scrollEventThrottle={16}
        data={props.watchlist}
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
  );
};

const styles = theme => {
  return {
    watchlistPreviews: {
      marginTop: 5,
      borderTopWidth: 1,
      borderColor: theme.base01,
    },
    watchlistPreviewsBorder: {
      borderColor: theme.base02,
    },
    flatList: {
      paddingBottom: 150,
      paddingHorizontal: 28,
    },  
    movie: {
      flexDirection: 'row',
      marginVertical: 10, 
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

export default WatchlistPreviews;

