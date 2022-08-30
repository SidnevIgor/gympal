import { FormikContextType, useFormikContext } from 'formik';
import React from 'react';
import { Button, FlatList, Modal, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PickerModal = ({ modalVisible, setModalVisible, items }) => {
  const formikContext: FormikContextType<any>  = useFormikContext();

  return (
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
  )
}

const styles = StyleSheet.create({
  modalText: {
    padding: 15
  },
  modalWrapper: {
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
  },
})

export default PickerModal;