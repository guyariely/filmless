import React, { useState, useContext } from 'react';
import { View } from "react-native";
import { ThemesContext } from '../../../../Context/ThemesContext';
import FormSwitch from './FormSwitch';
import Tabs from './Tabs';
import SubmitButton from './SubmitButton';

const Form = props => {

  const [activeTab, setActiveTab] = useState('filters');

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).form}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <FormSwitch activeTab={activeTab} />
      </View>
      <SubmitButton validateQueries={props.validateQueries} />
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      flex: 1
    },
    form: {
      flex: 1,
      backgroundColor: theme.base02,
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
      color: theme.text01
    },
    tabText: {
      color: theme.text04,
      fontSize: 14,
      fontWeight: '600'
    },
    button: {
      backgroundColor: theme.primary,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      paddingVertical: 6 
    },
    buttonText: {
      color: theme.search,
      fontSize: 20,
      textAlign: 'center',
      paddingVertical: 8,
    }  
  }
};

export default Form;