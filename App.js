import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from './Constants/colors';
import AppContainer from './Screens/AppNavigator';

const App = () => {
  
    return (
      <View style={styles.container}>
        <AppContainer screenProps={{test: 'this is a test'}}/>
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
