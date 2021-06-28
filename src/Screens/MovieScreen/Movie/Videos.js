import React, { useContext } from "react";
import { Text, View, ScrollView, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";
import { ThemesContext } from "../../../Context/ThemesContext";

const Videos = props => {
  const { theme } = useContext(ThemesContext);

  return (
    <View>
      <Text style={styles(theme).heading}>VIDEOS</Text>
      {props.videos && (
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles(theme).scrollView}
        >
          {props.videos.map(video => {
            return (
              <View style={styles(theme).videoShadow} key={video.id}>
                <View style={styles(theme).videoContainer}>
                  <WebView
                    style={styles(theme).video}
                    javaScriptEnabled={true}
                    renderLoading={() => (
                      <View style={styles(theme).loadingScreen}>
                        <ActivityIndicator />
                      </View>
                    )}
                    startInLoadingState
                    source={{
                      uri:
                        "https://www.youtube.com/embed/" +
                        video.key +
                        "?&modestbranding=1",
                    }}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = theme => {
  return {
    heading: {
      color: theme.heading,
      fontWeight: "bold",
      fontSize: 20,
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    scrollView: {
      paddingLeft: 5,
      paddingRight: 20,
    },
    videoShadow: {
      shadowColor: theme.shadow,
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
      overflow: "hidden",
    },
    video: {
      flex: 1,
    },
    loadingScreen: {
      backgroundColor: theme.base02,
      justifyContent: "center",
      flex: 1,
    },
  };
};

export default Videos;
