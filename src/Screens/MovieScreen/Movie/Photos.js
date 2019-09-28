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
          props.images.map((image, index) => {
            return (
              <TouchableOpacity 
                style={styles(theme).imageShadow} 
                key={image.file_path}
                onPress={() => props.openLightbox(props.images, index)}
              >
                <View style={styles(theme).imageContainer}>
                  <Image
                    style={styles(theme).image}
                    source={{uri: 'https://image.tmdb.org/t/p/w780' + image.file_path}} 
                  />
                </View>
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
    imageShadow: {
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      marginVertical: 10,
      marginLeft: 15,
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
    }  
  }
};

export default Photos;
