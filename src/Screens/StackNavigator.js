import TabsNavigator from './Tabs/TabsNavigator';
import MovieScreen from './MovieScreen/MovieScreen';
import Lightbox from './Lightbox';
import ReviewScreen from './ReviewScreen/ReviewScreen';
import PersonScreen from './PersonScreen/PersonScreen';
import BiographyScreen from './BiographyScreen/BiographyScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

const StackNavigator = createStackNavigator({
  Tabs: TabsNavigator,
  MovieScreen: MovieScreen,
  Lightbox: Lightbox,
  ReviewScreen: ReviewScreen,
  PersonScreen: PersonScreen,
  BiographyScreen: BiographyScreen,
}, {
  headerMode: 'none'
});

export default createAppContainer(StackNavigator);