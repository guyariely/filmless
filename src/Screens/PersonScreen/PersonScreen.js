import React, { useState, useEffect, useContext } from "react";
import useIsMounted from '../../Hooks/isMounted';
import { View, ActivityIndicator } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import API from '../../API/People';
import Person from './Person/Person';

const PersonScreen = props => {

  const [person, setPerson] = useState(props.navigation.getParam('person', {}));
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useIsMounted();

  useEffect(() => {
    API.GetDetails(person).then(personDetails => {
      if (isMounted.current) {
        setPerson(personDetails.data);
        setIsLoading(false);
      }
    });
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
      <Person
        person={person}
        goBack={() => props.navigation.goBack()}
        goRoot={() => props.navigation.popToTop()}
        openLightbox={(images, index) => props.navigation.push(
          'Lightbox', { images, index }
        )}
        openBiographyScreen={() => props.navigation.push(
          'BiographyScreen', { person: person }
        )}
        openMovieScreen={movie => {
          props.navigation.push(
            'MovieScreen', { movie, loadDetails: true }
          );
        }}
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

export default PersonScreen;