import React, { useContext } from "react";
import { View, Image } from "react-native";
import { ThemesContext } from "../Context/ThemesContext";
import Icon from "react-native-vector-icons/MaterialIcons";

const Picture = props => {
  const { name, size, position } = props.icon;

  let quality;
  switch (props.type) {
    case "poster":
      quality = "w342";
    case "profile":
      quality = "w185";
    case "backdrop":
      quality = "w780";
  }

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).imageShadow}>
      <View
        style={[
          styles(theme).imageContainer,
          props.dimensions && props.dimensions
        ]}
      >
        <Image
          style={styles(theme).image}
          source={{
            uri: "https://image.tmdb.org/t/p/" + quality + props.file_path
          }}
        />
        <View style={[styles(theme).iconContainer, position]}>
          <Icon color={theme.text04} name={name} size={size} />
        </View>
      </View>
    </View>
  );
};

const styles = theme => {
  return {
    imageShadow: {
      flex: 1,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14
    },
    imageContainer: {
      flex: 1,
      borderRadius: 15,
      overflow: "hidden",
      backgroundColor: theme.base02
    },
    image: {
      flex: 1,
      resizeMode: "cover"
    },
    iconContainer: {
      position: "absolute",
      zIndex: -1
    }
  };
};

export default Picture;
