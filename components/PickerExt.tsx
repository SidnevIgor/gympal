import React, { useState } from 'react';
import { Button, FlatList, Modal, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../lib/colors/colors';

const PickerExt = (props: {icon?: string, placeholder?: string, items: Array<{label: string, value: string}>, onSelectItem: any, pickedItem: any}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {props.icon && <Icon name={props.icon} size={30} color={colors.medium} style={styles.icon}></Icon>}
          <Text style={styles.textInput}>{props.pickedItem ? props.pickedItem.label : props.placeholder}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalWrapper}>
          <Button title='Close' onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={props.items}
            keyExtractor={item => item.value.toString()}
            renderItem={(item) => {
              return (
                <TouchableOpacity onPress={() =>{
                  setModalVisible(false);
                  props.onSelectItem(item.item);
                }}>
                  <Text style={styles.modalText}>{item.item.label}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </Modal>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: Platform.OS === "android" ? 4 : 15,
    marginVertical: 10,
    alignItems: "center"
  },
  icon: {
    margin: Platform.OS === "android" ? 10 : 3
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  },
  modalWrapper: {
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
  },
  modalText: {
    padding: 15
  }
})

export default PickerExt;