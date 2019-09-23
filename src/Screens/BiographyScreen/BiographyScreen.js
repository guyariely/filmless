import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../../Constants/colors';
import Header from './Header';

const ReviewScreen = props => {

  const { name, biography } = props.navigation.getParam('person', '');

  const [showBorder, setShowBorder] = useState(false);

  return (
    <View style={styles.slide}>
      <Header goBack={() => props.navigation.goBack()} />
      <Text style={styles.name}>{name}</Text>
      <View 
        style={showBorder ? [styles.border, styles.borderVisible] : styles.border}>
      </View>
      <ScrollView 
        scrollEventThrottle={16}
        onScroll={e => setShowBorder(e.nativeEvent.contentOffset.y >= 1)}
      >
        <Text style={styles.biography}>
          {biography}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: colors.base01,
    paddingTop: 10,
    marginTop: 'auto',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.text01,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  border: {
    borderTopWidth: 1,
    borderColor: colors.base01,
  },
  borderVisible: {
    borderColor: colors.base02,
  },
  biography: {
    fontSize: 20,
    paddingBottom: 30,
    paddingHorizontal: 25,
    color: colors.text03,
    lineHeight: 25
  }
});

export default ReviewScreen;
