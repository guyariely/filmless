import React from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../Constants/colors';
import isSmallScreen from '../../../utils/isSmallScreen';

const Header = props => {

  return (
    <View style={
      props.showBorder ? 
      [styles.header, styles.headerWithBorder] : 
      [styles.header]
    }>
      <TouchableOpacity onPress={props.goBack} style={styles.closeButton}>
        <Icon 
          color={colors.text01} 
          name="keyboard-arrow-left" 
          size={34} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: isSmallScreen() ? 25 : 40,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: colors.base01,
  },
  headerWithBorder: {
    borderColor: colors.base02,
  }
});

export default Header;