import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../../Constants/colors';

const Photos = props => {

  return (
    <View>
      <Text style={styles.heading}>PHOTOS</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        {
          props.photos.map((photo, index) => {
            return (
              <TouchableOpacity 
                key={photo.file_path}
                style={styles.photo}
                onPress={() => props.openLightbox(props.photos, index)}
              >
                <View style={styles.imageShadow}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      source={{uri: 'https://image.tmdb.org/t/p/w780' + photo.file_path}} 
                    />
                  </View>
                </View>
                <Text style={styles.title} numberOfLines={1}>
                  {photo.media.title + '  '}
                    <Text style={styles.subtitle}>
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

const styles = StyleSheet.create({
  heading: {
    color: colors.heading,
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
    shadowColor: colors.shadow,
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
    backgroundColor: colors.base02
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    width: 280,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text01,
    paddingTop: 15,
    paddingLeft: 5
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.text03
  }
});

export default Photos;
