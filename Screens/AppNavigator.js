import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';

import DiscoverScreen from './DiscoverScreen/DiscoverScreen';
import WatchListScreen from './WatchListScreen';  
import SettingsScreen from './SettingsScreen';
import colors from '../Constants/colors';

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
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: colors.text01,
      inactiveTintColor: colors.text02,
      style: { 
        backgroundColor: colors.base01,
        paddingBottom: 30
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

// const AppNavigator = createMaterialBottomTabNavigator(
  //   {
  //     Discover: { 
  //       screen: DiscoverScreen,
  //       navigationOptions: {
  //         tabBarLabel: "",
  //         tabBarIcon: ({tintColor}) => (
  //           <Icon name="local-movies" color={tintColor} size={28} />
  //         )
  //       } 
  //     },
  //     WatchList: { 
  //       screen: WatchListScreen,
  //       navigationOptions: {
  //         tabBarLabel: "",
  //         tabBarIcon: ({tintColor}) => (
  //           <Icon name="bookmark" color={tintColor} size={28} />
  //         )
  //       } 
  //     },
  //     Settings: { 
  //       screen: SettingsScreen,
  //       navigationOptions: {
  //         tabBarLabel: "",
  //         tabBarIcon: ({tintColor}) => (
  //           <Icon name="settings" color={tintColor} size={28} />
  //         )
  //       } 
  //     }
  //   }, 
  //   {
  //     initialRouteName: 'Discover',
  //     labeled: false,
  //     activeColor: Colors.text01,
  //     inactiveColor: Colors.text02,
  //     barStyle: { 
  //       backgroundColor: Colors.base01,
  //       shadowOpacity: 0
  //     },
  //   }
  // );
  
  // export default createAppContainer(AppNavigator);
  
