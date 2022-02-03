import React, {Component} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import Header from '../ReusableComponents/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomInput from '../ReusableComponents/CustomInput';
import CustomBtn from '../ReusableComponents/CustomBtn';
import CustomModal from '../ReusableComponents/Popupmodal';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      Logo: require('../assets/images/logo1.jpeg'),
      icon: <AntDesign name="back" size={30} color="#820de4" />,
      username: '',
      email: '',
      password: '',
      visible: 'false',
      message: '',
      success: '',
      toggleModal: '',
    };
  }

  handleExlorebtn = () => {
    console.log('exlore your limits');
  };
  handleGetItem = () => {
    try {
      AsyncStorage.getItem('firstname').then(value => {
        if (value != null) {
          this.setState({firstname: value});
        }
      });
    } catch (error) {
      alert('Failed to feth username');
    }

    try {
      AsyncStorage.getItem('email').then(value => {
        if (value != null) {
          this.setState({email: value});
        }
      });
    } catch (e) {
      alert('Failed to fetch the data to the storage ');
    }
  };

  componentDidMount() {
    this.handleGetItem();
  }
  render() {
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
          <Text style={styles.mainareaHeaderText}>Home Page</Text>
        </View>
        <View style={styles.mainfield}>
          <View style={styles.inputarea}>
            <CustomInput
              placeholder="username"
              value={this.state.firstname}
              // setValue={text => this.handleChangeInput(text, 'username')}
              // setValue={value => this.setState({username: value})}
            />
          </View>
          <View style={styles.inputarea}>
            <CustomInput
              placeholder="Email"
              value={this.state.email}
              // setValue={value => this.setState({email: value})}
            />
          </View>
          <View style={{paddingVertical: 40}}>
            <Text style={styles.mainareaHeaderText}>Welcome User</Text>
          </View>
        </View>
        <View style={styles.mainfieldbtn}>
          <View style={styles.inputarea}>
            <CustomBtn
              text="Let's start Exploring"
              textcolor="black"
              bgcolor="yellow"
              onPress={() => this.handleExlorebtn()}
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
    marginBottom: 25,
  },
  mainfield: {
    alignItems: 'center',
  },
  mainfieldbtn: {
    alignItems: 'center',
    paddingVertical: '25%',
  },
});

export default Home;
