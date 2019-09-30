import React from "react";
import { TouchableOpacity } from 'react-native';
import Picture from '../../../Components/Picture';

const Poster = props => {

  return (
    <TouchableOpacity 
      onPress={() => props.openLightbox(props.posters)}
    > 
      <Picture 
        file_path={props.poster} 
        dimensions={{width: 150, height: 220}}
      />
    </TouchableOpacity>
  );
};

export default Poster;
