import React from 'react';
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';

import DiscoverScreen from './DiscoverScreen';
import WatchListScreen from './WatchListScreen';  
import SettingsScreen from './SettingsScreen';
import Colors from '../Constants/colors';

const MainNavigator = createMaterialBottomTabNavigator(
  {
    Discover: { 
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarLabel: "",
        tabBarIcon: ({tintColor}) => (
          <Icon name="local-movies" color={tintColor} size={28} />
        )
      } 
    },
    WatchList: { 
      screen: WatchListScreen,
      navigationOptions: {
        tabBarLabel: "",
        tabBarIcon: ({tintColor}) => (
          <Icon name="bookmark" color={tintColor} size={28} />
        )
      } 
    },
    Settings: { 
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: "",
        tabBarIcon: ({tintColor}) => (
          <Icon name="settings" color={tintColor} size={28} />
        )
      } 
    }
  }, 
  {
    initialRouteName: 'Discover',
    labeled: false,
    activeColor: Colors.text,
    inactiveColor: Colors.lightText,
    barStyle: { 
      backgroundColor: Colors.primary,
      shadowOpacity: 0
    },
  }
);

export default createAppContainer(MainNavigator);
