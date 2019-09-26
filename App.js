import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import colors from './src/Constants/colors';
import AppContainer from './src/Screens/StackNavigator';
import DiscoverContextProvider from './src/Context/DiscoverContext';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <DiscoverContextProvider>
        <AppContainer />
      </DiscoverContextProvider>
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
