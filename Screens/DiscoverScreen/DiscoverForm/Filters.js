import React from 'react';
import { StyleSheet, View, Text, TextInput } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
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

class Filters extends React.Component {

  constructor(props) {
    super(props);
    this.updateRating = this.updateRating.bind(this);
    this.state = {
      rating: null,
      time: null,
      fromYear: null,
      toYear: null,
      focusedInput: null
    }
  }

  updateRating(value) {
    if (value > 9.9) value = '9.9';
    this.setState({rating: value});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>MIN RATING</Text>
          <TextInput
          style={
              this.state.focusedInput === 'rating' ?
              [styles.input, styles.inputFocused] :
              styles.input
            }
            placeholder="NO FILTER"
            onFocus={ () => this.setState({focusedInput: 'rating'}) }
            onBlur={ () => this.setState({focusedInput: ''})}
            placeholderTextColor={colors.lightText}
            selectionColor={colors.highlight}
            onChangeText={rating => this.updateRating(rating)}
            keyboardType="numeric"
            maxLength={3}
            value={this.state.rating}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>MAX TIME</Text>
          <RNPickerSelect
            style={
              this.state.focusedInput === 'time' ?
              pickerSelectStylesFocused :
              pickerSelectStyles            
            }
            onOpen={ () => this.setState({focusedInput: 'time'}) }
            onClose={ () => this.setState({focusedInput: ''})} 
            placeholder={{label: 'NO FILTER'}}
            placeholderTextColor={colors.lightText}
            items={timeDurations}
            value={this.state.time}
            onValueChange={value => this.setState({time: value})}
          />
        </View> 
        <View style={styles.inputContainer}>
          <Text style={styles.label}>FROM YEAR</Text>
          <TextInput
            style={
              this.state.focusedInput === 'fromYear' ?
              [styles.input, styles.inputFocused] :
              styles.input
            }
            placeholder="NO FILTER"
            onFocus={ () => this.setState({focusedInput: 'fromYear'}) }
            onBlur={ () => this.setState({focusedInput: ''})}
            placeholderTextColor={colors.lightText}
            selectionColor={colors.highlight}
            onChangeText={year => this.setState({fromYear: validateYear(year)})}
            keyboardType="numeric"
            maxLength={4}
            value={this.state.fromYear}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>TO YEAR</Text>
          <TextInput
          style={
              this.state.focusedInput === 'toYear' ?
              [styles.input, styles.inputFocused] :
              styles.input
            }
            onFocus={ () => this.setState({focusedInput: 'toYear'}) }
            onBlur={ () => this.setState({focusedInput: ''})}
            placeholder="NO FILTER"
            placeholderTextColor={colors.lightText}
            selectionColor={colors.highlight}
            onChangeText={year => this.setState({toYear: validateYear(year)})}
            keyboardType="numeric"
            maxLength={4}
            value={this.state.toYear}
          />
        </View>
      </View>
    );
  }
}

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

const pickerSelectStyles = StyleSheet.create({
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

const pickerSelectStylesFocused = StyleSheet.create({
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