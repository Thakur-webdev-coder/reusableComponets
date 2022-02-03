import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const CustomModal = ({visible, toggle, text, onPress, message, title}) => {
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!visible);
        // }}
        onRequestClose={toggle}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{text}</Text>
            <Text style={styles.modalText}>{message}</Text>

            <View style={styles.btnarea}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onPress}>
                <Text style={styles.textStyle}>ok</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 15,
    width: '100%',
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    width: '80%',
    paddingVertical: 35,
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    // elevation: 2,
    // width: '100%',
    // marginTop: '50%',
    backgroundColor: 'white',
    // justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 1,
  },
  btnarea: {
    marginTop: '20%',
    marginLeft: '80%',
  },
});

export default CustomModal;
