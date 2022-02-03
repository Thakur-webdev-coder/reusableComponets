import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import AntDesign from 'react-native-vector-icons';

const CustomBtn = ({onPress, text, socialicon, bgcolor, textcolor, type}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          styles[`container_${type}`],
          bgcolor ? {backgroundColor: bgcolor} : {},
        ]}>
        <View style={{paddingRight: 20}}>{socialicon}</View>
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            textcolor ? {color: textcolor} : {},
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#0606d3',
    width: '100%',
    padding: 13,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
  },
  main: {width: '100%'},
});

// #E0E2E4
