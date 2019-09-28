import React, { useState, useEffect, useContext } from "react";
import useIsMounted from '../../Hooks/isMounted';
import { View, ActivityIndicator } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import API from '../../API/Movies';
import Movie from './Movie/Movie';

const MovieScreen = props => {

  const loadDetails = props.navigation.getParam('loadDetails', false);

  const [movie, setMovie] = useState(props.navigation.getParam('movie', {}));
  const [isLoading, setIsLoading] = useState(loadDetails);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (loadDetails) {
      API.GetDetails(movie).then(movieDetails => {
        if (isMounted.current) {
          setMovie(movieDetails.data);
          setIsLoading(false);
        }
      });
    } 
  }, []);

  const { theme } = useContext(ThemesContext);

  if (isLoading) {
    return (
      <View style={styles(theme).activityIndicator}>
        <ActivityIndicator size='small' color={theme.text01} />
      </View> 
    );
  }

  return (
    <View style={styles(theme).container}>
      <Movie 
        movie={movie} 
        goBack={() => props.navigation.goBack()} 
        goRoot={() => props.navigation.popToTop()}
        openLightbox={(images, index) => props.navigation.push(
          'Lightbox', { images, index }
        )}
        openReviewScreen={review => props.navigation.push(
          'ReviewScreen', { review, movieTitle: movie.title }
        )}
        openPersonScreen={person => props.navigation.push(
          'PersonScreen', { person }
        )}
      />
    </View>
  )
};

const styles = theme => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.base01
    },
    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.base01
    }  
  }
};

export default MovieScreen;