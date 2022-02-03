import React from 'react';
import {Keyboard, StyleSheet, TextInput, View} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={secureTextEntry}
        onEndEditing={Keyboard.dismiss}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="black"
        style={styles.input}

        // autoCapitalize="none"
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
  },
  input: {
    // alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
});
