import React, { useContext } from 'react';
import { View, Text, TextInput } from "react-native";
import { ThemesContext } from '../../../../Context/ThemesContext';
import WheelInput from 'react-native-picker-select';
import { DiscoverContext } from '../../../../Context/DiscoverContext';

const validateYear = year => {
  if (!year) return null;
  else if (year < 1) return '1';
  else if (year > new Date().getFullYear()) return new Date().getFullYear().toString();
  return year.replace(/\./g,'');
};

const Filters = props => {

  const { 
    rating, setRating, 
    time, setTime, 
    fromYear, setFromYear, 
    toYear, setToYear 
  } = useContext(DiscoverContext);

  const { theme } = useContext(ThemesContext);

  const timeDurations = [
    { label: '30 MIN', value: 30, color: theme.text01 },
    { label: '45 MIN', value: 45, color: theme.text01 },
    { label: '1 HR', value: 60, color: theme.text01 },
    { label: '1 HR 15 MIN', value: 75, color: theme.text01 },
    { label: '1 HR 30 MIN', value: 90, color: theme.text01 },
    { label: '1 HR 45 MIN', value: 105, color: theme.text01 },
    { label: '2 HR', value: 120, color: theme.text01 },
    { label: '2 HR 15 MIN', value: 135, color: theme.text01 },
    { label: '2 HR 30 MIN', value: 150, color: theme.text01 },
    { label: '2 HR 45 MIN', value: 165, color: theme.text01 },
    { label: '3 HR', value: 180, color: theme.text01 }
  ];

  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).inputContainer}>
        <Text style={styles(theme).label}>MIN RATING</Text>
        <TextInput
          style={
            rating ?
            [styles(theme).input, styles(theme).input__active] :
            styles(theme).input
          }
          keyboardAppearance="dark"
          placeholder="NO FILTER"
          placeholderTextColor={theme.text04}
          selectionColor={theme.primary}
          onChangeText={rating => rating > 9.9 ? setRating('9.9') : setRating(rating)}
          keyboardType="numeric"
          maxLength={3}
          value={rating}
        />
      </View>
      <View style={styles(theme).inputContainer}>
        <Text style={styles(theme).label}>MAX TIME</Text>
        <WheelInput
          style={time ? wheelInputStyles__active(theme) : wheelInputStyles(theme)}
          placeholder={{label: 'NO FILTER', color: theme.text01}}
          placeholderTextColor={theme.text04}
          items={timeDurations}
          value={time}
          onValueChange={time => setTime(time)}
        />
      </View> 
      <View style={styles(theme).inputContainer}>
        <Text style={styles(theme).label}>FROM YEAR</Text>
        <TextInput
          style={fromYear ? [styles(theme).input, styles(theme).input__active] : styles(theme).input}
          keyboardAppearance="dark"
          placeholder="NO FILTER"
          placeholderTextColor={theme.text04}
          selectionColor={theme.primary}
          onChangeText={year => setFromYear(validateYear(year))}
          keyboardType="numeric"
          maxLength={4}
          value={fromYear}
        />
      </View>
      <View style={styles(theme).inputContainer}>
        <Text style={styles(theme).label}>TO YEAR</Text>
        <TextInput
          style={toYear ? [styles(theme).input, styles(theme).input__active] : styles(theme).input}
          keyboardAppearance="dark"
          placeholder="NO FILTER"
          placeholderTextColor={theme.text04}
          selectionColor={theme.primary}
          onChangeText={year => setToYear(validateYear(year))}
          keyboardType="numeric"
          maxLength={4}
          value={toYear}
        />
      </View>
    </View>
  );
};

const styles = theme => {
  return {
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
      color: theme.text03, 
      fontSize: 18,
      marginBottom: 10
    },
    input: {
      height: 45,
      borderColor: theme.base01,
      borderWidth: 1,
      borderRadius: 5,
      textAlign: 'center',
      color: theme.text01,
      fontSize: 16
    },
    input__active: {
      borderWidth: 1,
      backgroundColor: theme.base01,
      borderColor: theme.primary
    }  
  }
};

const wheelInputStyles = theme => {
  return {
    modalViewMiddle: {
      backgroundColor: theme.base02,
      borderTopWidth: 0,
    },
    modalViewBottom: {
      backgroundColor: theme.base02
    },
    chevronContainer: {
      opacity: 0.1
    },
    done: {
      color: theme.primary,
    },
    inputIOS: {
      height: 45,
      borderColor: theme.base01,
      borderWidth: 1,
      borderRadius: 5,
      textAlign: 'center',
      color: theme.text01,
      fontSize: 16,
    },
    inputAndroid: {
      height: 45,
      borderColor: theme.base01,
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 15,
      textAlign: 'center',
      color: theme.text01,
      fontSize: 16
    }  
  }
};

const wheelInputStyles__active = theme => {
  return {
    modalViewMiddle: {
      backgroundColor: theme.base02,
      borderTopWidth: 0,
    },
    modalViewBottom: {
      backgroundColor: theme.base02
    },
    chevronContainer: {
      opacity: 0.1
    },
    done: {
      color: theme.primary,
    },
    inputIOS: {
      height: 45,
      backgroundColor: theme.base01,
      borderColor: theme.primary,
      borderWidth: 1,
      borderRadius: 5,
      textAlign: 'center',
      color: theme.text01,
      fontSize: 16,
      borderWidth: 1,
      borderColor: theme.primary
    },
    inputAndroid: {
      height: 45,
      backgroundColor: theme.base01,
      borderColor: theme.primary,
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 15,
      textAlign: 'center',
      color: theme.text01,
      fontSize: 16,
      borderWidth: 1,
      borderColor: theme.primary
    }  
  }
};
  
export default Filters;