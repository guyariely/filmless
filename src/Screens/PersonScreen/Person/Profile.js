import React from "react";
import { TouchableOpacity } from 'react-native';
import Picture from '../../../Components/Picture';

const Profile = props => {

  return (
    <TouchableOpacity 
      onPress={() => props.openLightbox([{file_path: props.profile}, ...props.profiles])}
    >
      <Picture 
        file_path={props.profile} 
        dimensions={{width: 150, height: 220}}
      />
    </TouchableOpacity>
  );
};

export default Profile;
