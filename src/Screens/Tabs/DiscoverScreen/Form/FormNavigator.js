import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import colors from '../../../../Constants/colors';
import Filters from './Filters';
import Categories from './Categories';
import Sorting from './Sorting';

const FormNavigator = createMaterialTopTabNavigator(
  {
    Filters: { screen: Filters },
    Categories: { screen: Categories },
    Sorting: { screen: Sorting }
  },
  {
    initialRouteName: 'Filters',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: 'transparent',
      },
      tabStyle: {
        padding: 0
      },
      labelStyle: {
        fontSize: 14,
        fontWeight: '600'
      },
      activeTintColor: colors.text01,
      inactiveTintColor: colors.text02,
      indicatorStyle: {
        display: 'none'
      }
    }
  }
);

export default createAppContainer(FormNavigator);


