import React, { useContext } from "react";
import { View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../../Context/ThemesContext';

const Profile = props => {

  const { theme } = useContext(ThemesContext);

  return (
    <TouchableOpacity 
      style={styles(theme).profileContainer}
      onPress={() => props.openLightbox([{file_path: props.profile}])}
    >
      <View style={styles(theme).profile}>
        <Image
          style={styles(theme).profileImage}
          loadingIndicatorSource={() => 
            <View style={styles(theme).loadingScreen}>
              <ActivityIndicator />
            </View>
          }
          source={{uri: 'https://image.tmdb.org/t/p/w500' + props.profile}} 
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = theme => {
  return {
    profileContainer: {
      width: 135,
      flex: 4,
      height: 220,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
    },
    profile: {
      flex: 1,
      borderRadius: 15,
      overflow: 'hidden',
      backgroundColor: theme.base02
    },
    profileImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    loadingScreen: {
      backgroundColor: theme.base02,
      justifyContent: 'center',
      flex: 1
    }  
  }
};

export default Profile;
