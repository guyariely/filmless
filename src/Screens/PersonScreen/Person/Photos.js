import React, { useContext } from "react";
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';
import Picture from '../../../Components/Picture';

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
                <Picture
                  type='backdrop'
                  file_path={photo.file_path} 
                  dimensions={{width: 280, height: 160}}
                  icon={{name: 'insert-photo', size: 80, position: {top: 40, left: 100}}}
                />
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
