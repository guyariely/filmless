import React from 'react';
import { createMaterialTopTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';

import DiscoverScreen from './DiscoverScreen/DiscoverScreen';
import ListsScreen from './ListsScreen/ListsScreen';
import WatchlistScreen from './WatchlistScreen/WatchlistScreen';  
import SearchScreen from './SearchScreen/SearchScreen';
import SettingsScreen from './SettingsScreen/SettingsScreen';

const TabsNavigator = createMaterialTopTabNavigator(
  {
    Discover: { 
      screen: DiscoverScreen,
      navigationOptions({screenProps}) {
        const { theme } = screenProps;
        return {
          tabBarLabel: "",
          tabBarIcon: ({focused}) => {
            return (
              <Icon 
                name="local-movies" 
                color={focused ? theme.text01 : theme.text04} 
                size={28} 
              />
            ) 
          }
        }
      } 
    },
    Lists: { 
      screen: ListsScreen,
      navigationOptions({screenProps}) {
        const { theme } = screenProps;
        return {
          tabBarLabel: "",
          tabBarIcon: ({focused}) => {
            return (
              <Icon 
                name="format-list-bulleted" 
                color={focused ? theme.text01 : theme.text04} 
                size={28} 
              />
            ) 
          }
        }
      } 
    },
    Watchlist: { 
      screen: WatchlistScreen,
      navigationOptions({screenProps}) {
        const { theme } = screenProps;
        return {
          tabBarLabel: "",
          tabBarIcon: ({focused}) => {
            return (
              <Icon 
                name="bookmark" 
                color={focused ? theme.text01 : theme.text04} 
                size={28} 
              />
            ) 
          }
        }
      } 
    },
    Search: { 
      screen: SearchScreen,
      navigationOptions({screenProps}) {
        const { theme } = screenProps;
        return {
          tabBarLabel: "",
          tabBarIcon: ({focused}) => {
            return (
              <Icon 
                name="search" 
                color={focused ? theme.text01 : theme.text04} 
                size={28} 
              />
            ) 
          }
        }
      } 
    },
    Settings: { 
      screen: SettingsScreen,
      navigationOptions({screenProps}) {
        const { theme } = screenProps;
        return {
          tabBarLabel: "",
          tabBarIcon: ({focused}) => {
            return (
              <Icon 
                name="settings" 
                color={focused ? theme.text01 : theme.text04} 
                size={28} 
              />
            ) 
          }
        }
      } 
    }
  }, 
  {
    initialRouteName: 'Discover',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      style: { 
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true,
      showLabel: false
    }
  }
);

export default TabsNavigator;