import React from 'react';
import TabsNavigator from './Tabs/TabsNavigator';
import MovieScreen from './MovieScreen/MovieScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

const StackNavigator = createStackNavigator({
  Tabs: TabsNavigator,
  MovieScreen: MovieScreen
}, {
  headerMode: 'none'
});

export default createAppContainer(StackNavigator);