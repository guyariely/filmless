import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../../../Constants/colors';
import Header from './Header';
import Profile from './Profile';
import Info from './Info';
import Biography from './Biography';
import Filmography from './Filmography';
import Photos from './Photos';

const Person = props => {

  const [showBorder, setShowBorder] = useState(false);

  const { name, profile_path, biography, movie_credits, tagged_images } = props.person;

  const photos = tagged_images.results.filter(photo => {
    return photo.height === 1080 && photo.media_type == 'movie';
  });

  return (
    <View style={styles.person}>
      <Header 
        goBack={props.goBack} 
        showBorder={showBorder} 
      />
      <ScrollView 
        scrollEventThrottle={16}
        onScroll={e => setShowBorder(e.nativeEvent.contentOffset.y >= 1)}
      >
        <Text style={styles.name}>{name}</Text>
        <View style={styles.mainContent}>
          <Profile 
            profile={profile_path} 
            openLightbox={props.openLightbox} 
          />
          <Info person={props.person} />
        </View>
        {
          biography && 
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
        <View style={styles.bottomBuffer}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  person: {
    flex: 1,
    backgroundColor: colors.base01,
    paddingTop: 10,
    marginTop: 'auto',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.text01,
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
});

export default Person;
