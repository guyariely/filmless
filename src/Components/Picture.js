import React, { useContext } from 'react';
import { View, Image } from 'react-native';
import { ThemesContext } from '../Context/ThemesContext';

const Picture = props => {

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).imageShadow}>
      <View style={[styles(theme).imageContainer, props.dimensions && props.dimensions]}>
        <Image
          style={styles(theme).image}
          source={{uri: 'https://image.tmdb.org/t/p/w500' + props.file_path}} 
        />
      </View>
    </View>
  );
};  

const styles = theme => {
  return {
    imageShadow: {
      flex: 1,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
    },
    imageContainer: {
      flex: 1,
      borderRadius: 15,
      overflow: 'hidden',
      backgroundColor: theme.base02
    },
    image: {
      flex: 1,
      resizeMode: 'cover'
    }
  }
};

export default Picture;