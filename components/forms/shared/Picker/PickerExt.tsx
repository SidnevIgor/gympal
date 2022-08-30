import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FormikContextType, useFormikContext } from 'formik';

import colors from '../../../../lib/colors/colors';
import PickerModal from './PickerModal';

const PickerExt = ({icon, placeholder, items, pickerKey}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const formikContext: FormikContextType<any>  = useFormikContext();

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <Icon name={icon} size={30} color={colors.medium} style={styles.icon}></Icon>}
          { formikContext.values[pickerKey] ? 
            (<Text style={styles.textInput}>{ formikContext.values[pickerKey] } </Text>) : 
            (<Text style={styles.placeholder}>{ placeholder } </Text>)}
        </View>
      </TouchableWithoutFeedback>
      <PickerModal 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
        items={items}
      ></PickerModal>
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
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.black
  },
  placeholder: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.placeholder
  },
})

export default PickerExt;