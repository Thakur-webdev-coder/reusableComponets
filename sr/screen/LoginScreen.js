import React, {Component} from 'react';
import {View, StyleSheet, Text, Alert, TouchableOpacity} from 'react-native';
import Header from '../ReusableComponents/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomInput from '../ReusableComponents/CustomInput';
import CustomBtn from '../ReusableComponents/CustomBtn';
import CustomModal from '../ReusableComponents/Popupmodal';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Login extends Component {
  constructor() {
    console.log('Constructor..........');
    super();
    this.state = {
      Logo: require('../assets/images/logo1.jpeg'),
      icon: <AntDesign name="menu-fold" size={30} color="#820de4" />,
      socialicon: <AntDesign name="google" size={30} color="red" />,
      username: '',
      email: '',
      password: '',
      visible: 'false',
      message: '',
      success: '',
      toggleModal: '',
    };
  }
  // handleGetItem = () => {
  //   try {
  //     AsyncStorage.getItem('email').then(value => {
  //       if (value != null) {
  //         this.setState({email: value});
  //       }
  //     });
  //   } catch (e) {
  //     alert('Failed to fetch the data to the storage ');
  //   }

  // componentDidMount() {
  //   this.handleGetItem();
  // }

  handleValidation = value => {
    // username.length ==0
    const {password, email} = this.state;
    // if (username === '') {
    //   // alert('Plaese fill username');
    //   this.setState({visible: true, message: 'Please fill user name'});
    //   console.log(' username error handling');
    //   return false;
    // } else
    if (email === '') {
      this.setState({visible: true, message: 'Please fill email address'});
      console.log(' email error handling');
      return false;
    } else if (password === '') {
      this.setState({visible: true, message: 'Please fill password'});
      console.log(' password error handling');
      return false;
    }
    return true;
  };
  handleSignInbtn = () => {
    if (this.handleValidation()) {
      console.log(' You signed in Sucessfully');
      this.props.navigation.navigate('Home');
    }
  };
  handleGoogleSignbtn = () => console.log('Social Media Login');
  toggleModal = () => {
    this.setState({visible: !this.state.visible});
  };
  // handleChangeInput(text, type) {}

  componentDidUpdate = () => {
    console.log('componentdid Update');
  };
  handleSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };
  render() {
    console.log('render');
    return (
      <View style={{backgroundColor: '#0606d3'}}>
        <View>
          <Header
            logo={this.state.Logo}
            text="welcome on this Site"
            icon={this.state.icon}
          />
        </View>
        <View style={styles.mainarea}>
          <Text style={styles.mainareaHeaderText}>Already A User? Login</Text>
        </View>
        <View style={styles.mainfield}>
          <View style={styles.inputarea}>
            <CustomInput
              placeholder="Email"
              value={this.state.email}
              setValue={value => this.setState({email: value})}
            />
          </View>
          <View style={styles.inputarea}>
            <CustomInput
              placeholder="Password"
              secureTextEntry={true}
              value={this.state.password}
              setValue={value => this.setState({password: value})}
            />
          </View>
        </View>
        <View style={styles.mainfieldbtn}>
          <View style={styles.inputarea}>
            <CustomBtn
              text="SignIn"
              textcolor="black"
              bgcolor="yellow"
              onPress={() => this.handleSignInbtn()}
            />
          </View>
          <View style={styles.inputarea}>
            <CustomBtn
              socialicon={this.state.socialicon}
              text="Login with Google"
              textcolor="black"
              bgcolor="white"
              onPress={() => this.handleGoogleSignbtn()}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.handleSignUp()}>
            <Text style={styles.membertext}>Not a member ? signUp</Text>
          </TouchableOpacity>
        </View>
        <CustomModal
          visible={this.state.visible}
          message={this.state.message}
          onPress={() => this.setState({visible: !this.state.visible})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainarea: {
    marginVertical: 80,
  },
  mainareaHeaderText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputarea: {
    width: '95%',
    alignItems: 'center',
    marginBottom: 15,
  },
  mainfield: {
    alignItems: 'center',
  },
  mainfieldbtn: {
    alignItems: 'center',
    // paddingVertical: '15%',
    marginTop: '30%',
    paddingVertical: 10,
  },
  membertext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default Login;
