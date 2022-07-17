import React, { useState } from 'react';
import { Button, FlatList, Modal, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FormikContextType, useFormikContext } from 'formik';

import colors from '../../../lib/colors/colors';

const PickerExt = ({icon, placeholder, items}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const formikContext: FormikContextType<any>  = useFormikContext();

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <Icon name={icon} size={30} color={colors.medium} style={styles.icon}></Icon>}
          <Text style={styles.textInput}>{formikContext.values.age ? formikContext.values.age : placeholder}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalWrapper}>
          <Button title='Close' onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={(item) => {
              return (
                <TouchableOpacity onPress={() =>{
                  setModalVisible(false);
                  formikContext.setFieldValue("age", item.item.value);
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