import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import colors from './src/Constants/colors';
import AppContainer from './src/Screens/AppNavigator';
import { ThemesProvider } from './src/Context/ThemesContext';

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['You should only render one navigator']);

const App = () => {
  
    return (
      <View style={styles.container}>
        <ThemesProvider>
          <StatusBar barStyle="light-content" />
          <AppContainer />
        </ThemesProvider>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.base01
    }
  }
);

export default App;
