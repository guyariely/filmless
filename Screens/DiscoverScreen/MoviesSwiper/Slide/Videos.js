import React from "react";
import { StyleSheet, Text, View, ScrollView, WebView } from 'react-native';
import colors from '../../../../Constants/colors';
import { ActivityIndicator } from "react-native";

const Videos = props => {

  return (
    <View>
      <Text style={styles.heading}>VIDEOS</Text>
      {
        props.videos &&
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        {
          props.videos.slice(0, 4).map(video => {
            return (
              <View style={styles.videoShadow} key={video.id}>
                <View style={styles.videoContainer}>
                  <WebView
                    style={styles.video}
                    javaScriptEnabled={true}
                    renderLoading={() => 
                      <View style={styles.loadingScreen}>
                        <ActivityIndicator />
                      </View>
                    }
                    startInLoadingState
                    source={{uri: 'https://www.youtube.com/embed/' + video.key + '?&modestbranding=1'}}
                  />
              </View>
            </View>
            );
          })
        }
        </ScrollView>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: colors.heading,
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  scrollView: {
    paddingLeft: 5,
    paddingRight: 20
  },
  videoShadow: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginVertical: 10,
    marginLeft: 15,
    height: 160,
    width: 280,
  },
  videoContainer: {
    borderRadius: 15,
    height: 160,
    width: 280,
    overflow: 'hidden',
  },
  video: {
    flex: 1,
  },
  loadingScreen: {
    backgroundColor: colors.base02,
    justifyContent: 'center',
    flex: 1
  }
});

export default Videos;
