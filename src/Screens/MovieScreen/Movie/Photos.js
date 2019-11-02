import React, { useContext } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { ThemesContext } from "../../../Context/ThemesContext";
import Picture from "../../../Components/Picture";

const Photos = props => {
  const { theme } = useContext(ThemesContext);

  return (
    <View>
      <Text style={styles(theme).heading}>PHOTOS</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles(theme).scrollView}
      >
        {props.images.map((image, index) => {
          return (
            <TouchableOpacity
              style={styles(theme).image}
              key={image.file_path}
              onPress={() => props.openLightbox(props.images, index)}
            >
              <Picture
                type="backdrop"
                file_path={image.file_path}
                dimensions={{ width: 280, height: 160 }}
                icon={{
                  name: "insert-photo",
                  size: 80,
                  position: { top: 40, left: 100 }
                }}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
      paddingVertical: 15
    },
    scrollView: {
      paddingLeft: 5,
      paddingRight: 20
    },
    image: {
      marginVertical: 10,
      marginLeft: 15
    }
  };
};

export default Photos;
