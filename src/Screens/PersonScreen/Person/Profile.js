import React from "react";
import { StyleSheet, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import colors from '../../../Constants/colors';

const Profile = props => {
  return (
    <TouchableOpacity 
      style={styles.profileContainer}
      onPress={() => props.openLightbox([{file_path: props.profile}])}
    >
      <View style={styles.profile}>
        <Image
          style={styles.profileImage}
          loadingIndicatorSource={() => 
            <View style={styles.loadingScreen}>
              <ActivityIndicator />
            </View>
          }
          source={{uri: 'https://image.tmdb.org/t/p/w500' + props.profile}} 
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    width: 135,
    flex: 4,
    height: 220,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  profile: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.base02
  },
  profileImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  loadingScreen: {
    backgroundColor: colors.base02,
    justifyContent: 'center',
    flex: 1
  }
});

export default Profile;
