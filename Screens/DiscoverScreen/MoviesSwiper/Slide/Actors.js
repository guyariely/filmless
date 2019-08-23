import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import colors from '../../../../Constants/colors';

const Actors = props => {

  return (
    <View>
      <Text style={styles.heading}>ACTORS</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        {
          props.actors.slice(0, 11).map(actor => {
            return (
              <View style={styles.actor} key={actor.id}>
                <View style={styles.imageShadow}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      source={{uri: 'https://image.tmdb.org/t/p/w500' + actor.profile_path}} 
                    />
                  </View>
                </View>
                <View style={styles.text}>
                  <Text 
                    style={styles.name}
                    numberOfLines={1}
                    > 
                      {actor.name}
                  </Text>
                </View>
                <View style={styles.text}>
                  <Text 
                    style={styles.character} 
                    numberOfLines={1}
                    >
                      {actor.character}
                  </Text>
                </View>
              </View>
            );
          })
        }
        </ScrollView>
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
  actor: {
    marginLeft: 15,
    marginBottom: 10,
    width: 150,
  },
  imageShadow: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginVertical: 10,
    height: 240,
    width: 150,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.base02
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center'
  },
  name: {
    color: colors.text01,
    fontSize: 16,
    fontWeight: '600',
  },
  character: {
    color: colors.text03,
    fontSize: 14,
  },
});

export default Actors;
