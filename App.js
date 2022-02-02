import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeComponent from './sr/screen/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <HomeComponent />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#009688',
    backgroundColor: '#0606d3',
  },
});
