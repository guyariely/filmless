import React from 'react';
import TabsNavigator from './Tabs/TabsNavigator';
import MovieScreen from './MovieScreen/MovieScreen';
import Lightbox from './Lightbox';
import ReviewScreen from './ReviewScreen/ReviewScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

const StackNavigator = createStackNavigator({
  Tabs: TabsNavigator,
  MovieScreen: MovieScreen,
  Lightbox: Lightbox,
  ReviewScreen: ReviewScreen
}, {
  headerMode: 'none'
});

export default createAppContainer(StackNavigator);