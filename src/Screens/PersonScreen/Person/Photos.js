import React, { useContext } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';

const Photos = props => {

  const { theme } = useContext(ThemesContext);

  return (
    <View>
      <Text style={styles(theme).heading}>PHOTOS</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles(theme).scrollView}>
        {
          props.photos.map((photo, index) => {
            return (
              <TouchableOpacity 
                key={photo.file_path}
                style={styles(theme).photo}
                onPress={() => props.openLightbox(props.photos, index)}
              >
                <View style={styles(theme).imageShadow}>
                  <View style={styles(theme).imageContainer}>
                    <Image
                      style={styles(theme).image}
                      source={{uri: 'https://image.tmdb.org/t/p/w780' + photo.file_path}} 
                    />
                  </View>
                </View>
                <Text style={styles(theme).title} numberOfLines={1}>
                  {photo.media.title + '  '}
                    <Text style={styles(theme).subtitle}>
                      {photo.media.release_date.slice(0, 4)}
                    </Text>
                </Text>
              </TouchableOpacity>
            );
          })
        }
        </ScrollView>
    </View>
  );
};

const styles = theme => {
  return {
    heading: {
      color: theme.heading,
      fontWeight: 'bold',
      fontSize: 20,
      paddingHorizontal: 20,
      paddingVertical: 15
    },
    scrollView: {
      paddingLeft: 5,
      paddingRight: 20
    },
    photo: {
      marginVertical: 10,
      marginLeft: 15,
    },
    imageShadow: {
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      height: 160,
      width: 280,
    },
    imageContainer: {
      flex: 1,
      borderRadius: 15,
      overflow: 'hidden',
      backgroundColor: theme.base02
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
    },
    title: {
      width: 280,
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.text01,
      paddingTop: 15,
      paddingLeft: 5
    },
    subtitle: {
      fontSize: 16,
      fontWeight: 'normal',
      color: theme.text03
    }  
  }
};

export default Photos;
