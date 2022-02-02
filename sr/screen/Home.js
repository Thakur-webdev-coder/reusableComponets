import React, {Component} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import Header from '../ReusableComponents/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomInput from '../ReusableComponents/CustomInput';
import CustomBtn from '../ReusableComponents/CustomBtn';
import CustomModal from '../ReusableComponents/Popupmodal';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      Logo: require('../assets/images/logo1.jpeg'),
      icon: <AntDesign name="menu-fold" size={30} color="#820de4" />,
      username: '',
      email: '',
      password: '',
      visible: 'false',
      message: 'false',
      success: '',
      toggleModal: '',
    };
  }
  handleSignIn = () => {
    // console.log('handling Sign In');
    // Alert.alert('you clicked on sign in button');
    const {username, password, email} = this.state;
    if (username === '') {
      // alert('Plaese fill username');
      this.setState({visible: true, message: 'please fill user name'});
      console.log(' username error handling');
      return false;
    } else if (email === '') {
      this.setState({visible: true, message: 'please fill you email address'});
      console.log(' email error handling');
      return false;
    } else if (password === '') {
      this.setState({visible: true, message: 'please fill password'});
      console.log(' password error handling');
      return false;
    }
    return true;
  };
  handleSignInbtn = () => {
    if (this.handleSignIn()) {
      this.setState({visible: true, message: 'You signed in Sucessfully'});
      console.log(' You signed in Sucessfully');
      // alert('login succesfully');
    }
  };
  toggleModal = () => {
    this.setState({visible: !this.state.visible});
  };
  // handleChangeInput(text, type) {}
  render() {
    return (
      <View>
        <View>
          <Header
            logo={this.state.Logo}
            text="welcome on this Site"
            icon={this.state.icon}
          />
        </View>
        <View style={styles.mainarea}>
          <Text style={styles.mainareaHeaderText}>Let's Start Exploring</Text>
        </View>
        <View style={styles.mainfield}>
          <View style={styles.inputarea}>
            <CustomInput
              placeholder="username"
              value={this.state.name}
              // setValue={text => this.handleChangeInput(text, 'username')}
              setValue={value => this.setState({username: value})}
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
        <View style={styles.mainfieldbtn}>
          <View style={styles.inputarea}>
            <CustomBtn
              text="SignIn"
              textcolor="black"
              bgcolor="yellow"
              onPress={() => this.handleSignInbtn()}
            />
          </View>
        </View>
        <CustomModal
          visible={this.state.visible}
          // toggle={
          //   () => console.log('Modal has been closed')
          //   //   // this.setState({visible: !this.state.visible});
          // }
          message={this.state.message}
          // success={this.state.sucess}
          // text="you signed in Succesfully"
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
    fontSize: 20,
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
    paddingVertical: '40%',
  },
});

export default Home;
