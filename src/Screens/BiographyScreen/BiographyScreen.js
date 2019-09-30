import React, { useState, useContext } from "react";
import { Text, View, ScrollView } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import Header from './Header';

const BiographyScreen = props => {

  const { name, biography } = props.navigation.getParam('person', '');

  const [showBorder, setShowBorder] = useState(false);

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).slide}>
      <Header 
        goBack={() => props.navigation.goBack()} 
        goRoot={() => props.navigation.popToTop()}
      />
      <Text style={styles(theme).name}>{name}</Text>
      <View 
        style={showBorder ? [styles(theme).border, styles(theme).borderVisible] : styles(theme).border}>
      </View>
      <ScrollView 
        scrollEventThrottle={16}
        onScroll={e => setShowBorder(e.nativeEvent.contentOffset.y >= 1)}
      >
        <Text style={styles(theme).biography}>
          {biography}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = theme => {
  return {
    slide: {
      flex: 1,
      backgroundColor: theme.base01,
      paddingTop: 10,
      marginTop: 'auto',
    },
    name: {
      fontWeight: 'bold',
      fontSize: 28,
      color: theme.text01,
      textAlign: 'center',
      paddingHorizontal: 20,
      marginBottom: 20
    },
    border: {
      borderTopWidth: 1,
      borderColor: theme.base01,
    },
    borderVisible: {
      borderColor: theme.base02,
    },
    biography: {
      fontSize: 20,
      paddingBottom: 30,
      paddingHorizontal: 25,
      color: theme.text02,
      lineHeight: 25
    }  
  }
};

export default BiographyScreen;
