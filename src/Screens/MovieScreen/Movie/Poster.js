import React, { useContext } from "react";
import { View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';

const Poster = props => {

  const { theme } = useContext(ThemesContext);

  return (
    <TouchableOpacity 
      style={styles(theme).posterContainer}
      onPress={() => props.openLightbox(props.posters)}
    >
      <View style={styles(theme).poster}>
        <Image
          style={styles(theme).posterImage}
          loadingIndicatorSource={() => 
            <View style={styles(theme).loadingScreen}>
              <ActivityIndicator />
            </View>
          }
          source={{uri: 'https://image.tmdb.org/t/p/w500' + props.poster}} 
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = theme => {
  return {
    posterContainer: {
      width: 135,
      flex: 4,
      height: 220,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
    },
    poster: {
      flex: 1,
      borderRadius: 15,
      overflow: 'hidden',
      backgroundColor: theme.base02
    },
    posterImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    loadingScreen: {
      backgroundColor: theme.base02,
      justifyContent: 'center',
      flex: 1
    }  
  }
};

export default Poster;
