import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const ButtonExt = (props: {txt: string, btnClick: Function, bgColor?: string, txtColor?: string, wdth?: string, hght?: number}) => {
  return (
    <TouchableHighlight onPress={() => {props.btnClick()}}>
      <View style={{
      backgroundColor: props.bgColor || '#f8f4f4', 
      display: 'flex', 
      alignItems: "center", 
      height: props.hght || 30, 
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: 10,
      width: props.wdth || "100%",
      alignSelf: "center"
      }}
      >
        <Text style={{alignSelf: "center", fontWeight: "600", color: props.txtColor || "black"}}>
          {props.txt}
        </Text>
      </View>
    </TouchableHighlight>
  )
}
export default ButtonExt;