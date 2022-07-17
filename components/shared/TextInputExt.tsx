import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../lib/colors/colors';

const TextInputExt = ({icon, placeholder, ...props}) => {
  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} size={30} color={colors.medium} style={styles.icon}></Icon>}
      <TextInput style={styles.textInput} placeholder={placeholder} {...props}/>
    </View>
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
    width: "80%"
  }
})

export default TextInputExt;