import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colors from '../../../Constants/colors';

const PersonResult = ({person, openPersonScreen}) => {

  return (
    <TouchableOpacity 
      style={styles.person}
      onPress={() => openPersonScreen({id: person.id})}
    >
      <View style={styles.imageShadow} >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: 'https://image.tmdb.org/t/p/w1280' + person.profile_path}} 
          />
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>
          {person.name}
        </Text>
        <Text style={styles.info}>
          {person.known_for_department}
        </Text>
      </View>
    </TouchableOpacity>
      
  )
};

const styles = StyleSheet.create({
  person: {
    flexDirection: 'row',
    paddingBottom: 30,
    marginHorizontal: 30,
    flex: 1
  },
  imageShadow: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  imageContainer: {
    borderRadius: 15,
    height: 180,
    width: 120,
    overflow: 'hidden',
    backgroundColor: colors.base02
  },
  image: {
    flex: 1,
    resizeMode: 'cover'
  },
  details: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: 15
  },
  title: {
    marginBottom: 8,
    color: colors.text01,
    fontSize: 22,
    fontWeight: '700',
  },
  info: {
    color: colors.text03,
    fontSize: 18,
    fontWeight: '600',
  }
});

export default PersonResult;
