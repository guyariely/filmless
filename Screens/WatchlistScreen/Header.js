import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import WheelInput from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../Constants/colors';

const sortMethods = [
  {label: 'Release Date', value: 'Release Date'},
  {label: 'Rating', value: 'Rating'},
  {label: 'Alphabetical', value: 'Alphabetical'},
  {label: 'Runtime', value: 'Runtime'},
  {label: 'Popularity', value: 'Popularity'},
];

const Header = props => {

  return (
    <View style={styles.header}>
      <TouchableOpacity 
        onPress={props.setSortDirection}
        style={styles.sortDirectionButtonContainer}
      >
      <View style={styles.sortDirectionButton}>
        <Icon 
          color={props.sortDirection == 'des' ? colors.primary : colors.text01} 
          name="long-arrow-down" 
          size={22} 
        />
      </View>
      <View style={styles.sortDirectionButton}>
        <Icon 
          color={props.sortDirection == 'asc' ? colors.primary : colors.text01} 
          name="long-arrow-up" 
          size={22} 
        />
      </View>
      </TouchableOpacity>
      <View style={styles.sortMethodButtonContainer}>
        <View style={styles.sortMethodButton}>
          <Text style={styles.sortMethodPlaceHolder}>Sorted By </Text>
          <WheelInput
            style={wheelInputStyles}
            placeholder={{label: 'Date Added'}}
            placeholderTextColor={colors.primary}
            items={sortMethods}
            value={props.sortMethod}
            onValueChange={sortMethod => props.setSortMethod(sortMethod)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 28,
    marginVertical: 14,
  },
  sortDirectionButtonContainer: {
    flexDirection: 'row'
  },
  sortDirectionButton: {
    fontWeight: '200',
    paddingHorizontal: 2
  },
  sortMethodButtonContainer: {
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  sortMethodButton: {
    flexDirection: 'row',
  },
  sortMethodPlaceHolder: {
    color: colors.text01,
    fontSize: 16,
    fontWeight: '600',
  }
});

const wheelInputStyles = StyleSheet.create({
  inputIOS: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  inputAndroid: {
    color: colors.primary,
    marginLeft: 'auto',
    fontSize: 20,
    fontWeight: '600'
  }
});

export default Header;