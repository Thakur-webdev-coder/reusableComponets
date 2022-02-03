import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../ReusableComponents/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomInput from '../ReusableComponents/CustomInput';
import CustomBtn from '../ReusableComponents/CustomBtn';
import CustomModal from '../ReusableComponents/Popupmodal';
// import AsyncStorageLib from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import Home from './Home';

class SignUp extends Component {
  constructor() {
    console.log('Constructor..........');
    super();
    this.state = {
      Logo: require('../assets/images/logo1.jpeg'),
      icon: <AntDesign name="back" size={30} color="#820de4" />,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      visible: 'false',
      message: '',
      success: '',
      toggleModal: '',
      textInputValue: '',
      value: '',
    };
  }
  handleValidation = value => {
    // console.log('handling Sign In');
    // Alert.alert('you clicked on sign in button');
    // value.trim().length > 1
    const {firstname, lastname, password, email} = this.state;
    if (firstname === '') {
      // alert('Plaese fill First Name');
      this.setState({visible: true, message: 'Please fill firstname'});
      return false;
    } else if (lastname === '') {
      this.setState({visible: true, message: 'Please fill lastname'});
      console.log(' email error handling');
      return false;
    } else if (email === '') {
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
  handleSignUpbtn = () => {
    if (this.handleValidation()) {
      this.handleSetItem();
      // this.setState({
      //   visible: true,
      //   message: 'Congracts ! You SignUp SuccessFully',
      // });
      console.log(' You signed Up Sucessfully');
      // this.props.navigation.navigate('Home');
    }
  };
  handleSetItem = async () => {
    const {firstname, email} = this.state;
    try {
      await AsyncStorage.setItem('firstname', firstname);
      // await AsyncStorage.setItem('lastname', lastname);
      await AsyncStorage.setItem('email', email);
      // await AsyncStorage.setItem('password', password);
      // eslint-disable-next-line no-alert
      alert('Data succesfully saved');
      this.props.navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
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
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={styles.mainarea}>
          <Text style={styles.mainareaHeaderText}>Sign Up For New User</Text>
        </View>
        <View style={styles.mainfield}>
          <View style={styles.inputarea}>
            <CustomInput
              placeholder="First Name"
              value={this.state.firstname}
              // setValue={text => this.handleChangeInput(text, 'First Name')}
              setValue={value => this.setState({firstname: value})}
            />
          </View>
          <View style={styles.inputarea}>
            <CustomInput
              placeholder="Last Name"
              value={this.state.lastname}
              // setValue={text => this.handleChangeInput(text, 'First Name')}
              setValue={value => this.setState({lastname: value})}
            />
          </View>
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
        <View>
          <Text style={styles.membertext}>{this.state.username}</Text>
        </View>
        <View style={styles.mainfieldbtn}>
          <View style={styles.inputarea}>
            <CustomBtn
              text="SignUp"
              textcolor="black"
              bgcolor="yellow"
              onPress={() => this.handleSignUpbtn()}
            />
          </View>
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
  mainfieldSubmitbtn: {
    alignItems: 'center',
    // paddingVertical: '15%',
    // marginTop: '10%',
    paddingVertical: 5,
  },
  mainfieldbtn: {
    alignItems: 'center',
    // paddingVertical: '15%',
    marginTop: '15%',
    // paddingVertical: 10,
  },
  membertext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default SignUp;
