import React from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions, ActivityIndicator, Text, StatusBar } from 'react-native';
import colors from '../Constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('window');
import ImageViewer from 'react-native-image-zoom-viewer';

const Lightbox = props => {

  const images = props.navigation.getParam('images', '').map(image => {
    return { url: 'https://image.tmdb.org/t/p/w780' + image.file_path };
  });

  const Header = ({currentIndex}) => {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()} 
          style={styles.closeButton}
        >
          <Icon 
            color={colors.text01} 
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
      <ImageViewer 
        imageUrls={images}
        loadingRender={() => <ActivityIndicator />}
        index={props.navigation.getParam('index', 0)}
        renderHeader={currentIndex => <Header currentIndex={currentIndex} />}
        renderIndicator={() => null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 50,
    width: width,
    paddingHorizontal: 20,
    zIndex: 1
  },
  indexIndicatorContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 10
  },
  indexIndicator: {
    color: colors.text01,
    fontWeight: '500',
    fontSize: 20,
  }
});

export default Lightbox;
