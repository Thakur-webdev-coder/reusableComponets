import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Header = ({text, logo, icon}) => (
  <View style={styles.container}>
    <Image source={logo} style={styles.logoStyle} />
    <Text style={styles.textStyle}>{text}</Text>
    <View style={styles.iconStyle}>
      <TouchableOpacity>{icon}</TouchableOpacity>
    </View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'yellow',
    // backgroundColor: '#147cf0',
    width: '100%',
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoStyle: {
    height: '100%',
    width: '15%',
    // paddingLeft: 10,
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    // paddingLeft: 30,
    fontWeight: 'bold',
  },
  iconStyle: {
    // paddingLeft: 70,
  },
});
