import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import colors from '../../../../Constants/colors';

const Tabs = ({activeTab, setActiveTab}) => {

  return (
    <View style={styles.tabs}>
    {
      ['filters', 'categories', 'sorting']
      .map(tab =>
        <TouchableOpacity 
          onPress={() => setActiveTab(tab)}
          style={styles.tab}
          key={tab}
        >
          <Text style={
            activeTab == tab ? 
            [styles.tabText, styles.tabTextActive] : 
            styles.tabText}
          >
            {tab.toUpperCase()}
          </Text>
        </TouchableOpacity>
      )
    }
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
  },  
  tab: {
    paddingVertical: 5,
  },
  tabTextActive: {
    color: colors.text01
  },
  tabText: {
    color: colors.text04,
    fontSize: 14,
    fontWeight: '600',
  }
});

export default Tabs;