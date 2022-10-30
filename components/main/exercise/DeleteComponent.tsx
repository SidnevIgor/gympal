import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DeleteComponent = (props: {onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.wrapper}>
        <Icon name="delete" size={30} color="#900" />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.2,
    justifyContent: "flex-start",
    alignItems: "center"
  }
})

export default DeleteComponent;