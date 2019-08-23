import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import colors from '../../../Constants/colors';
import Filters from './Filters';
import Categories from './Categories';
import Options from './Options';

const FormNavigator = createMaterialTopTabNavigator(
  {
    Filters: { screen: Filters },
    Categories: { screen: Categories },
    Options: { screen: Options }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'transparent',
      },
      tabStyle: {
        padding: 0
      },
      labelStyle: {
        fontSize: 15,
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


