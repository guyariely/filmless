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
        icon={{name: 'local-movies', size: 80, position: {top: 66, left: 34}}}
      />
    </TouchableOpacity>
  );
};

export default Poster;
