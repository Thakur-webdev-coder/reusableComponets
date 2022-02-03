import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Header = ({text, logo, icon, onPress}) => (
  <View style={styles.container}>
    <View style={styles.iconStyle}>
      <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>
    </View>
    <Text style={styles.textStyle}>{text}</Text>
    <Image source={logo} style={styles.logoStyle} />
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
    height: '150%',
    width: '15%',
    // paddingLeft: 10,
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    // paddingLeft: 30,
    fontWeight: 'bold',
  },
  iconStyle: {
    // paddingLeft: 70,
  },
});
