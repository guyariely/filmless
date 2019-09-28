import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ThemesContext } from '../../../../Context/ThemesContext';

const Tabs = ({activeTab, setActiveTab}) => {

  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).tabs}>
    {
      ['filters', 'categories', 'sorting']
      .map(tab =>
        <TouchableOpacity 
          onPress={() => setActiveTab(tab)}
          style={styles(theme).tab}
          key={tab}
        >
          <Text style={
            activeTab == tab ? 
            [styles(theme).tabText, styles(theme).tabTextActive] : 
            styles(theme).tabText}
          >
            {tab.toUpperCase()}
          </Text>
        </TouchableOpacity>
      )
    }
    </View>
  );
};

const styles = theme => {
  return {
    tabs: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 26,
    },  
    tab: {
      paddingVertical: 5,
    },
    tabTextActive: {
      color: theme.text01
    },
    tabText: {
      color: theme.text04,
      fontSize: 14,
      fontWeight: '600',
    }  
  }
};

export default Tabs;