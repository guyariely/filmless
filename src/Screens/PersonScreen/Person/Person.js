import React, { useState, useContext } from "react";
import { Text, View, ScrollView } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';

import Header from './Header';
import Profile from './Profile';
import Info from './Info';
import Biography from './Biography';
import Filmography from './Filmography';
import Photos from './Photos';

const Person = props => {

  const [showBorder, setShowBorder] = useState(false);

  const { name, profile_path, biography, movie_credits, tagged_images, images } = props.person;

  const photos = tagged_images.results.filter(photo => {
    return photo.height === 1080 && photo.media_type == 'movie';
  });

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).person}>
      <Header 
        goBack={props.goBack} 
        goRoot={props.goRoot}
        showBorder={showBorder} 
      />
      <ScrollView 
        scrollEventThrottle={16}
        onScroll={e => setShowBorder(e.nativeEvent.contentOffset.y >= 1)}
      >
        <Text style={styles(theme).name}>{name}</Text>
        <View style={styles(theme).mainContent}>
          <Profile 
            profile={profile_path} 
            profiles={images.profiles}
            openLightbox={props.openLightbox} 
          />
          <Info person={props.person} />
        </View>
        {
          biography.length > 0 && 
          <Biography 
            biography={biography} 
            openBiographyScreen={props.openBiographyScreen}
          />
        }
        {
          movie_credits.cast.length > 0 && 
          <Filmography 
            filmography={movie_credits.cast} 
            openMovieScreen={props.openMovieScreen} 
          /> 
        }
        {
          photos.length > 0 && 
          <Photos 
            photos={photos} 
            openLightbox={props.openLightbox} 
          />
        }
        <View style={styles(theme).bottomBuffer}></View>
      </ScrollView>
    </View>
  );
};

const styles = theme => {
  return {
    person: {
      flex: 1,
      backgroundColor: theme.base01,
      paddingTop: 10,
      marginTop: 'auto',
    },
    name: {
      fontWeight: 'bold',
      fontSize: 28,
      color: theme.text01,
      textAlign: 'center',
      paddingHorizontal: 20,
      marginBottom: 20
    },
    mainContent: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingBottom: 15
    },
    bottomBuffer: {
      marginBottom: 50
    }  
  }
};

export default Person;
