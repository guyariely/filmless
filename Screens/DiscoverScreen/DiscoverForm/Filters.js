import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from "react-native";
import WheelInput from 'react-native-picker-select';
import colors from '../../../Constants/colors';

const timeDurations = [
    { label: '30 MIN', value: 30 },
    { label: '45 MIN', value: 45 },
    { label: '1 HR', value: 60 },
    { label: '1 HR 15 MIN', value: 75 },
    { label: '1 HR 30 MIN', value: 90 },
    { label: '1 HR 45 MIN', value: 105 },
    { label: '2 HR', value: 120 },
    { label: '2 HR 15 MIN', value: 135 },
    { label: '2 HR 30 MIN', value: 150 },
    { label: '2 HR 45 MIN', value: 165 },
    { label: '3 HR', value: 180 }
];

const validateYear = year => {
  if (!year) return null;
  else if (year < 1) return '1';
  else if (year > new Date().getFullYear()) return new Date().getFullYear().toString();
  return year.replace(/\./g,'');
};

const Filters = props => {

  const [focusedInput, setFocusedInput] = useState(null);

  const { rating, setRating, time, setTime, fromYear, setFromYear, toYear, setToYear } = props.screenProps;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>MIN RATING</Text>
        <TextInput
        style={
            focusedInput === 'rating' ?
            [styles.input, styles.inputFocused] :
            styles.input
          }
          placeholder="NO FILTER"
          onFocus={() => setFocusedInput('rating')}
          onBlur={() => setFocusedInput('')}
          placeholderTextColor={colors.lightText}
          selectionColor={colors.highlight}
          onChangeText={rating => rating > 9.9 ? setRating('9.9') : setRating(rating)}
          keyboardType="numeric"
          maxLength={3}
          value={rating}
      />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>MAX TIME</Text>
        <WheelInput
          style={
            focusedInput === 'time' ?
            WheelInputStyles__focused :
            WheelInputStyles            
          }
          onOpen={() => setFocusedInput('time')}
          onClose={() => setFocusedInput('')} 
          placeholder={{label: 'NO FILTER'}}
          placeholderTextColor={colors.lightText}
          items={timeDurations}
          value={time}
          onValueChange={time => setTime(time)}
        />
        </View> 
      <View style={styles.inputContainer}>
        <Text style={styles.label}>FROM YEAR</Text>
        <TextInput
          style={
            focusedInput === 'fromYear' ?
            [styles.input, styles.inputFocused] :
            styles.input
          }
          placeholder="NO FILTER"
          onFocus={() => setFocusedInput('fromYear')}
          onBlur={() => setFocusedInput('')}
          placeholderTextColor={colors.lightText}
          selectionColor={colors.highlight}
          onChangeText={year => setFromYear(validateYear(year))}
          keyboardType="numeric"
          maxLength={4}
          value={fromYear}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>TO YEAR</Text>
        <TextInput
        style={
            focusedInput === 'toYear' ?
            [styles.input, styles.inputFocused] :
            styles.input
          }
          onFocus={() => setFocusedInput('toYear')}
          onBlur={() => setFocusedInput('')}
          placeholder="NO FILTER"
          placeholderTextColor={colors.lightText}
          selectionColor={colors.highlight}
          onChangeText={year => setToYear(validateYear(year))}
          keyboardType="numeric"
          maxLength={4}
          value={toYear}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  inputContainer: {
    paddingBottom: 20,
    width: 125
  },
  label: {
    color: colors.inputLabel, 
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 5,
    textAlign: 'center',
    color: colors.text,
    fontSize: 16
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: colors.highlight
  }
});

const WheelInputStyles = StyleSheet.create({
  inputIOS: {
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 5,
    textAlign: 'center',
    color: colors.text,
    fontSize: 16
  },
  inputAndroid: {
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingLeft: 15,
    textAlign: 'center',
    color: colors.text,
    fontSize: 16
  }
});

const WheelInputStyles__focused = StyleSheet.create({
  inputIOS: {
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 5,
    textAlign: 'center',
    color: colors.text,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.highlight
  },
  inputAndroid: {
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingLeft: 15,
    textAlign: 'center',
    color: colors.text,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.highlight
  }
});

export default Filters;