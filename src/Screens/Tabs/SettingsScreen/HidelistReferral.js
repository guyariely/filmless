import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { getHidelistRecentImages } from '../../../utils/hidelistActions';
import colors from '../../../Constants/colors';

const HidelistReferral = props => {

  const [images, setImages] = useState([]);

  useEffect(
    () => { getHidelistRecentImages().then(images => setImages(images))}, 
    [props.isFocused]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FILTERED FILMS</Text>
      <TouchableOpacity style={styles.content}>
        <View style={styles.images}>
        {
          images.length > 0 &&
          images.map((image, index) => {
            return (
              <View 
                key={image} 
                style={[styles.imageShadow, styles['image0'+(index+1)]]}
              >
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{uri: 'https://image.tmdb.org/t/p/w500' + image}} 
                  />
                </View>
              </View>
            );
          })
        }
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            See and edit films you marked as hidden
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  heading: {
    color: colors.heading,
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 15
  },
  content: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  image01: {
    paddingTop: 16
  },
  image02: {
    opacity: 0.8,
    zIndex: -1,
    position: 'absolute',
    top: 8,
    left: 8
  },
  image03: {
    opacity: 0.6,
    zIndex: -2,
    position: 'absolute',
    top: 0,
    left: 16
  },
  imageShadow: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  imageContainer: {
    borderRadius: 15,
    height: 160,
    width: 110,
    overflow: 'hidden',
    backgroundColor: colors.base02
  },
  image: {
    flex: 1,
    resizeMode: 'cover'
  },
  textContainer: {
    paddingLeft: 45,
    paddingRight: 115,
    justifyContent: 'center'
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: colors.text02,
  }
});

export default HidelistReferral;
