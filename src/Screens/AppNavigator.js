import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';

import DiscoverScreen from './DiscoverScreen/DiscoverScreen';
import WatchlistScreen from './WatchlistScreen/WatchlistScreen';  
import SearchScreen from './SearchScreen/SearchScreen';
import SettingsScreen from './SettingsScreen';
import colors from '../Constants/colors';
import isSmallScreen from '../utils/isSmallScreen';

const AppNavigator = createMaterialTopTabNavigator(
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
    Watchlist: { 
      screen: WatchlistScreen,
      navigationOptions: {
        tabBarLabel: "",
        tabBarIcon: ({tintColor}) => (
          <Icon name="bookmark" color={tintColor} size={28} />
        )
      } 
    },
    Search: { 
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: "",
        tabBarIcon: ({tintColor}) => (
          <Icon name="search" color={tintColor} size={28} />
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
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: colors.text01,
      inactiveTintColor: colors.text02,
      style: { 
        backgroundColor: colors.base01,
        paddingTop: isSmallScreen() ? 25 : 40,
        paddingBottom: isSmallScreen() ? 5 : 5,
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true,
      showLabel: false
    }
  }
);

export default createAppContainer(AppNavigator);