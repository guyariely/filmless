import React, { useState, useEffect, useContext } from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import { withNavigationFocus } from "react-navigation";
import { getHidelistRecentImages } from '../../../utils/hidelistActions';

const HidelistReferral = props => {

  const [images, setImages] = useState([]);

  useEffect(
    () => { getHidelistRecentImages().then(images => setImages(images))}, 
    [props.isFocused]
  );

  const { theme } = useContext(ThemesContext);

  if (images.length == 0) {
    return (
      <View style={styles(theme).container}>
      <Text style={styles(theme).heading}>FILTERED FILMS</Text>
      <Text style={styles(theme).placeholder}>
        Movies you marked as filtered will show up here.
      </Text>
    </View>
    );
  }

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).heading}>FILTERED FILMS</Text>
      <TouchableOpacity 
        style={styles(theme).content}
        onPress={() =>  props.navigation.push('HidelistScreen')}
      >
        <View style={styles(theme).images}>
        {
          images.length > 0 &&
          images.map((image, index) => {
            return (
              <View 
                key={image} 
                style={[styles(theme).imageShadow, styles(theme)['image0'+(index+1)]]}
              >
                <View style={styles(theme).imageContainer}>
                  <Image
                    style={styles(theme).image}
                    source={{uri: 'https://image.tmdb.org/t/p/w500' + image}} 
                  />
                </View>
              </View>
            );
          })
        }
        </View>
        <View style={styles(theme).textContainer}>
          <Text style={styles(theme).text}>
            See and edit films you marked as hidden
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = theme => {
  return {
    container: {
      paddingHorizontal: 28,
    },
    heading: {
      color: theme.heading,
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
      shadowColor: theme.shadow,
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
      backgroundColor: theme.base02
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
      color: theme.text02,
    },
    placeholder: {
      // textAlign: 'center',
      fontSize: 18,
      fontWeight: '600',
      color: theme.text03,
      paddingVertical: 20,
      // paddingHorizontal: 30
    }
  }
};

export default withNavigationFocus(HidelistReferral);
