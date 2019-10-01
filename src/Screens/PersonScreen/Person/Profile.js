import React from "react";
import { TouchableOpacity } from 'react-native';
import Picture from '../../../Components/Picture';

const Profile = props => {

  return (
    <TouchableOpacity 
      onPress={() => props.openLightbox([{file_path: props.profile}, ...props.profiles])}
    >
      <Picture 
        type='profile'
        file_path={props.profile} 
        dimensions={{width: 150, height: 220}}
        icon={{name: 'person', size: 80, position: {top: 66, left: 34}}}
      />
    </TouchableOpacity>
  );
};

export default Profile;
