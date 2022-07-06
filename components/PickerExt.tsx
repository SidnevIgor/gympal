import React, { useState } from 'react';
import { Button, FlatList, InteractionManager, Modal, Platform, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../lib/colors/colors';

const PickerExt = (props: {icon?: string, placeholder?: string}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {props.icon && <Icon name={props.icon} size={30} color={colors.medium} style={styles.icon}></Icon>}
          <Text style={styles.textInput}>{props.placeholder}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalWrapper}>
          <Button title='Close' onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={[{label: "One", value: 1}, {label: "Two", value: 2}, {label: "Three", value: 3}]}
            keyExtractor={item => item.value.toString()}
            renderItem={(item) => {
              return (
                <View>
                  <Text>{item.item.label}</Text>
                </View>
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
  }
})

export default PickerExt;