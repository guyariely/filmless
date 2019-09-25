import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import FormSwitch from './FormSwitch';
import Tabs from './Tabs';
import Button from './Button';
import colors from '../../../../Constants/colors';

const Form = props => {

  const [activeTab, setActiveTab] = useState('filters');

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <FormSwitch activeTab={activeTab} />
      </View>
      <Button validateQueries={props.validateQueries} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    flex: 1,
    backgroundColor: colors.base02,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 15
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 26,
  },  
  tabTextActive: {
    color: colors.text01
  },
  tabText: {
    color: colors.text04,
    fontSize: 14,
    fontWeight: '600'
  },
  button: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 6 
  },
  buttonText: {
    color: colors.search,
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 8,
  }
});

export default Form;