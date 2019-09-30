import React, { useState } from "react";
import { View, TouchableOpacity, Dimensions, ActivityIndicator, Text, StatusBar, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');
import ImageViewer from 'react-native-image-zoom-viewer';

const Lightbox = props => {

  const [showModal, setShowModal] = useState(true);

  const images = props.navigation.getParam('images', '').map(image => {
    return { url: 'https://image.tmdb.org/t/p/w780' + image.file_path };
  });

  const Header = ({currentIndex}) => {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
            setTimeout(() => setShowModal(false), 200);
          }} 
          style={styles.closeButton}
        >
          <Icon 
            color={'#fff'} 
            name="keyboard-arrow-left" 
            size={34} 
          />
        </TouchableOpacity>
        {
          images.length > 1 &&
          <View style={styles.indexIndicatorContainer}>
            <Text style={styles.indexIndicator}>
              {currentIndex + 1} / {images.length}
            </Text>
          </View>
        }
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Modal visible={showModal} transparent={true }>
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

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 50,
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
};

export default Lightbox;
