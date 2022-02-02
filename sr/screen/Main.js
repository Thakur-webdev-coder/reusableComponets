import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomInput from '../ReusableComponents/CustomInput';
import CustomBtn from '../ReusableComponents/CustomBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Main = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleLogin = () => {
    console.log('enter email and password');
  };
  const signInwithGoogle = () => {
    console.log('sign with google');
  };
  const signInwithFacebook = () => {
    console.log('login with faceBook');
  };
  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.headretext}>Login Screen</Text>
      </View>
      <View style={styles.inputarea}>
        <CustomInput
          placeholder="Enter Email"
          value={email}
          setValue={setEmail}
        />
      </View>
      <View style={styles.inputarea}>
        <CustomInput
          placeholder="Enter Password"
          value={password}
          setValue={setPassword}

          // style={styles.inputfield}
        />
      </View>
      <View style={styles.btnarea}>
        <CustomBtn text="SignIn" onPress={handleLogin} />
      </View>
      <View style={styles.middlefield}>
        <View style={styles.line} />
        <Text style={styles.middlefieldtext}>ForgetPassword</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.loginarea}>
        <View style={styles.btnarea1}>
          <CustomBtn
            text="Login with Google"
            onPress={signInwithGoogle}
            bgcolor="white"
            textcolor="red"
            icon={<AntDesign name="google" color="red" size={30} />}
          />
        </View>
        <View style={styles.btnarea1}>
          <CustomBtn
            text="Login with Facebook"
            onPress={signInwithFacebook}
            bgcolor="white"
            textcolor="#147cf0"
          />
        </View>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#009688',
    flex: 1,
    alignItems: 'center',
  },
  headretext: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  field: {
    paddingVertical: 40,
  },
  inputfield: {},
  inputarea: {width: '95%', marginBottom: 10, alignItems: 'center'},
  btnarea: {
    paddingVertical: 20,
    width: '95%',
  },
  btnarea1: {
    paddingVertical: 20,
    width: '95%',
    flexDirection: 'row',
  },
  middlefield: {
    flexDirection: 'row',
    paddingVertical: 30,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    width: '28%',
    marginTop: 10,
  },
  middlefieldtext: {
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },
  loginarea: {
    paddingVertical: 20,
  },
});
