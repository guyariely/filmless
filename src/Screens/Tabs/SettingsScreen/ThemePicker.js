import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigationFocus, NavigationActions } from "react-navigation";
import { ThemesContext } from '../../../Context/ThemesContext';
import themes from '../../../Constants/themes';

const ThemePicker = props => {

  const { theme, toggleTheme } = useContext(ThemesContext);

  const themeTypes = ['default', 'light', 'dark'];

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).heading}>THEMES</Text>
      <View style={styles(theme).themeTypes}>
      {
        themeTypes.map(themeType => {
          return (
            <TouchableOpacity 
              key={themeType}
              style={[styles(theme).themeType, styles(theme).themes[themeType]]}
              onPress={() => {
                toggleTheme(themes[themeType]);
                props.navigation.dispatch(refreshAction);
              }}
            >
            </TouchableOpacity>
          );
        })
      }
      </View>
    </View>
  )
};

const styles = theme => {
  return {
    heading: {
      color: theme.heading,
      fontWeight: 'bold',
      fontSize: 20,
      paddingVertical: 15
    },
    themeTypes: {
      paddingVertical: 15,
      flexDirection: 'row'
    },
    themeType: {
      backgroundColor: theme.primary,
      height: 40,
      width: 40,
      marginRight: 20,
      borderRadius: 50
    },
    themeTypeActive: {
      borderWidth: 1,
      borderColor: theme.primary
    },
    themes: {
      default: {
        backgroundColor: '#26263D'
      },
      light: {
        backgroundColor: '#F2F2F2'
      },
      dark: {
        backgroundColor: '#111111'
      }
    }
  }
};

/* this is a workaround to get the tab icons to refresh after theme toggle.
the "refreshAction" naviagtes to the tabs screen and then back into the settings screen.
this tricks the tab icons to refresh and apply the theme theme. */
const refreshAction = NavigationActions.navigate({ 
  routeName: 'Tabs',
  action: NavigationActions.navigate({ routeName: 'Settings' }),
});

export default withNavigationFocus(ThemePicker);
