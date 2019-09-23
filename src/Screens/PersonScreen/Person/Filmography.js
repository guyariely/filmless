import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import colors from '../../../Constants/colors';

const Filmography = props => {
  return (
    <View>
      <Text style={styles.heading}>FILMOGRAPHY</Text>
        <FlatList 
          horizontal={true} 
          contentContainerStyle={styles.flatList}
          keyExtractor={film => film.id.toString()}
          data={props.filmography.sort((a, b) => 
            b.vote_count - a.vote_count
          )} 
          renderItem={({item: film}) => (
            <TouchableOpacity 
              style={styles.film} 
              key={film.id}
              onPress={() => props.openMovieScreen({id: film.id})}
            >
              <View style={styles.imageShadow}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{uri: 'https://image.tmdb.org/t/p/w500' + film.poster_path}} 
                  />
                </View>
              </View>
              <View style={styles.text}>
                <Text 
                  style={styles.title}
                  numberOfLines={1}
                  > 
                    {film.title}
                </Text>
              </View>
              <View style={styles.text}>
                <Text 
                  style={styles.character} 
                  numberOfLines={1}
                  >
                    {film.character}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
  flatList: {
    paddingLeft: 20,
    paddingRight: 20
  },
  film: {
    marginRight: 20,
    marginBottom: 10,
    width: 135,
  },
  imageShadow: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginVertical: 10,
    height: 210,
    width: 135,
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
  title: {
    color: colors.text01,
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 5
  },
  character: {
    color: colors.text03,
    fontSize: 14,
  },
});

export default Filmography;
