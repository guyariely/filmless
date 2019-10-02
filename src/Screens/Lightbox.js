import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Dimensions, ActivityIndicator, Text, StatusBar, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');
import ImageViewer from 'react-native-image-zoom-viewer';
import { ThemesContext } from '../Context/ThemesContext';
import isSmallScreen from '../utils/isSmallScreen';

const Lightbox = props => {

  const [showModal, setShowModal] = useState(true);

  const images = props.navigation.getParam('images', '').map(image => {
    return { url: 'https://image.tmdb.org/t/p/w780' + image.file_path };
  });

  const { theme } = useContext(ThemesContext);

  const Header = ({currentIndex}) => {
    return (
      <View style={styles(theme).header}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
            setShowModal(false);
          }} 
          style={styles(theme).closeButton}
        >
          <Icon 
            color={'#fff'} 
            name="keyboard-arrow-left" 
            size={34} 
          />
        </TouchableOpacity>
        {
          images.length > 1 &&
          <View style={styles(theme).indexIndicatorContainer}>
            <Text style={styles(theme).indexIndicator}>
              {currentIndex + 1} / {images.length}
            </Text>
          </View>
        }
      </View>
    );
  }

  return (
    <View style={styles(theme).container}>
      <StatusBar hidden={true} />
      <Modal visible={showModal} transparent={true}>
        <ImageViewer
          backgroundColor={'#000'}
          imageUrls={images}
          loadingRender={() => <ActivityIndicator />}
          index={props.navigation.getParam('index', 0)}
          renderHeader={currentIndex => <Header currentIndex={currentIndex} />}
          renderIndicator={() => null}
        />
      </Modal>
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.base01
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      top: isSmallScreen() ? 10 : 50,
      width: width,
      paddingLeft: 14,
      paddingRight: 20,
      zIndex: 1
    },
    indexIndicatorContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginRight: 10
    },
    indexIndicator: {
      color: '#fff',
      fontWeight: '500',
      fontSize: 20,
    }    
  }
};

export default Lightbox;
