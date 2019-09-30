import React, { useContext } from "react";
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigationFocus, NavigationActions } from "react-navigation";
import { ThemesContext } from '../../../Context/ThemesContext';
import themes from '../../../Constants/themes';
import Icon from 'react-native-vector-icons/Ionicons';

const ThemePicker = props => {

  const { theme, toggleTheme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).heading}>THEMES</Text>
      <View style={styles(theme).themeTypes}>
        <ScrollView horizontal={true} contentContainerStyle={styles(theme).scrollView}>
        {
          Object.values(themes).map(themeType => {
            return (
              <TouchableOpacity 
                key={themeType.name}
                style={[styles(theme).themeType, {backgroundColor: themes[themeType.name].colors.primary}]}
                onPress={() => {
                  toggleTheme(themeType);
                  props.navigation.dispatch(refreshAction);
                }}
              >
                <View style={themeType.type == 'dark' ? styles(theme).iconContainerDark : styles(theme).iconContainerLight}>
                  <Icon 
                    color={'#F5F5F7'} 
                    name={themeType.type == 'dark' ?  'ios-moon' : 'ios-sunny'} 
                    size={26} 
                  />
                </View>
              </TouchableOpacity>
            );
          })
        }
        </ScrollView>
      </View>
    </View>
  )
};

const styles = theme => {
  return {
    heading: {
      color: theme.heading,
      paddingHorizontal: 28,
      fontWeight: 'bold',
      fontSize: 20,
      paddingVertical: 15
    },
    scrollView: {
      paddingHorizontal: 28,
      paddingVertical: 15,
    },
    themeTypes: {
      flexDirection: 'row'
    },
    themeType: {
      backgroundColor: theme.primary,
      flexDirection: 'row',
      justifyContent: 'center',
      height: 40,
      width: 70,
      marginRight: 20,
      borderRadius: 5,
      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
    },
    themeTypeActive: {
      borderWidth: 1,
      borderColor: theme.primary
    },
    iconContainerLight: {
      position: 'absolute',
      top: 7,
      bottom: 0,
      left: 25,
      right: 0
    },
    iconContainerDark: {
      position: 'absolute',
      top: 7,
      bottom: 0,
      left: 27,
      right: 0
    }
  }
};

/* this is a workaround to get the tab icons to refresh after theme toggle.
the "refreshAction" naviagtes to the tabs screen and then back into the settings screen.
this tricks the tab icons to refresh and apply the theme. */
const refreshAction = NavigationActions.navigate({ 
  routeName: 'Tabs',
  action: NavigationActions.navigate({ routeName: 'Settings' }),
});

export default withNavigationFocus(ThemePicker);
