import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import AntDesign from 'react-native-vector-icons';

const CustomBtn = ({onPress, text, icon, bgcolor, textcolor, type}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          styles[`container_${type}`],
          bgcolor ? {backgroundColor: bgcolor} : {},
        ]}>
        {icon}
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
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  main: {width: '100%'},
});

// #E0E2E4
