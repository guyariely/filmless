import React from 'react';
import { StyleSheet, View, Text, TextInput } from "react-native";
import WheelInput from 'react-native-picker-select';
import colors from '../../../../Constants/colors';

const timeDurations = [
    { label: '30 MIN', value: 30, color: colors.text01 },
    { label: '45 MIN', value: 45, color: colors.text01 },
    { label: '1 HR', value: 60, color: colors.text01 },
    { label: '1 HR 15 MIN', value: 75, color: colors.text01 },
    { label: '1 HR 30 MIN', value: 90, color: colors.text01 },
    { label: '1 HR 45 MIN', value: 105, color: colors.text01 },
    { label: '2 HR', value: 120, color: colors.text01 },
    { label: '2 HR 15 MIN', value: 135, color: colors.text01 },
    { label: '2 HR 30 MIN', value: 150, color: colors.text01 },
    { label: '2 HR 45 MIN', value: 165, color: colors.text01 },
    { label: '3 HR', value: 180, color: colors.text01 }
];

const validateYear = year => {
  if (!year) return null;
  else if (year < 1) return '1';
  else if (year > new Date().getFullYear()) return new Date().getFullYear().toString();
  return year.replace(/\./g,'');
};

const Filters = props => {

  const { rating, setRating, time, setTime, fromYear, setFromYear, toYear, setToYear } = props.screenProps;

  return (

    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>MIN RATING</Text>
          <TextInput
            style={
                rating ?
                [styles.input, styles.input__active] :
                styles.input
              }
              keyboardAppearance="dark"
              placeholder="NO FILTER"
              placeholderTextColor={colors.text02}
              selectionColor={colors.primary}
              onChangeText={rating => rating > 9.9 ? setRating('9.9') : setRating(rating)}
              keyboardType="numeric"
              maxLength={3}
              value={rating}
          />
        
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>MAX TIME</Text>
        <WheelInput
          style={time ? wheelInputStyles__active : wheelInputStyles}
          placeholder={{label: 'NO FILTER', color: colors.text01}}
          placeholderTextColor={colors.text02}
          items={timeDurations}
          value={time}
          onValueChange={time => setTime(time)}
        />
      </View> 
      <View style={styles.inputContainer}>
        <Text style={styles.label}>FROM YEAR</Text>
        <TextInput
          style={fromYear ? [styles.input, styles.input__active] : styles.input}
          keyboardAppearance="dark"
          placeholder="NO FILTER"
          placeholderTextColor={colors.text02}
          selectionColor={colors.primary}
          onChangeText={year => setFromYear(validateYear(year))}
          keyboardType="numeric"
          maxLength={4}
          value={fromYear}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>TO YEAR</Text>
        <TextInput
          style={toYear ? [styles.input, styles.input__active] : styles.input}
          keyboardAppearance="dark"
          placeholder="NO FILTER"
          placeholderTextColor={colors.text02}
          selectionColor={colors.primary}
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
    color: colors.text03, 
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    height: 45,
    borderColor: colors.base01,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    color: colors.text01,
    fontSize: 16
  },
  input__active: {
    borderWidth: 1,
    backgroundColor: colors.base01,
    borderColor: colors.primary
  }
});

const wheelInputStyles = StyleSheet.create({
  modalViewMiddle: {
    backgroundColor: colors.base02,
    borderTopWidth: 0,
  },
  modalViewBottom: {
    backgroundColor: colors.base02
  },
  chevronContainer: {
    opacity: 0.1
  },
  done: {
    color: colors.primary,
  },
  inputIOS: {
    height: 45,
    borderColor: colors.base01,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    color: colors.text01,
    fontSize: 16,
  },
  inputAndroid: {
    height: 45,
    borderColor: colors.base01,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    textAlign: 'center',
    color: colors.text01,
    fontSize: 16
  }
});

const wheelInputStyles__active = StyleSheet.create({
  modalViewMiddle: {
    backgroundColor: colors.base02,
    borderTopWidth: 0,
  },
  modalViewBottom: {
    backgroundColor: colors.base02
  },
  chevronContainer: {
    opacity: 0.1
  },
  done: {
    color: colors.primary,
  },
  inputIOS: {
    height: 45,
    backgroundColor: colors.base01,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    color: colors.text01,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.primary
  },
  inputAndroid: {
    height: 45,
    backgroundColor: colors.base01,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    textAlign: 'center',
    color: colors.text01,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.primary
  }
});

export default Filters;