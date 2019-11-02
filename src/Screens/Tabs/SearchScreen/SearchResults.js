import React, { useContext } from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
import { ThemesContext } from "../../../Context/ThemesContext";

import MovieResult from "./MovieResult";
import PersonResult from "./PersonResult";

const SearchResults = props => {
  const { theme } = useContext(ThemesContext);

  if (props.isLoading) {
    return (
      <View style={styles(theme).activityIndicator}>
        <ActivityIndicator size="small" color={theme.text01} />
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles(theme).scrollView}
      onScroll={e =>
        props.setShowBorder(
          e.nativeEvent.contentOffset.y >= 1 && props.searchResults.length > 0
        )
      }
      scrollEventThrottle={16}
    >
      {props.searchResults &&
        props.searchResults
          .sort((a, b) => b.popularity - a.popularity)
          .map(result => {
            switch (result.media_type) {
              case "movie":
                return (
                  <MovieResult
                    key={result.id}
                    movie={result}
                    selectMovie={props.selectMovie}
                  />
                );
              case "person":
                return (
                  <PersonResult
                    key={result.id}
                    person={result}
                    openPersonScreen={props.openPersonScreen}
                  />
                );
              default:
                return;
            }
          })}
    </ScrollView>
  );
};

const styles = theme => {
  return {
    activityIndicator: {
      flex: 1,
      justifyContent: "center"
    },
    imageShadow: {
      paddingHorizontal: 32,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      paddingBottom: 30
    },
    imageContainer: {
      flex: 1,
      borderRadius: 15,
      overflow: "hidden",
      backgroundColor: theme.base02,
      height: 180
    },
    image: {
      flex: 1,
      opacity: 0.8,
      resizeMode: "cover"
    },
    movieTitle: {
      position: "absolute",
      bottom: 10,
      left: 15,
      width: 200,
      color: theme.text01,
      fontWeight: "800",
      fontSize: 22
    }
  };
};

export default SearchResults;
