import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from './Constants/colors';
import AppContainer from './Screens/AppNavigator';

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['You should only render one navigator']);

const App = () => {
  
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary
    }
  }
);

export default App;
