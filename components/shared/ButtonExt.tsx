import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

const ButtonExt = (props: {
  txt: string;
  btnClick?: Function;
  bgColor?: string;
  txtColor?: string;
  wdth?: string;
  hght?: number;
  fntSize?: number;
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.btnClick ? props.btnClick() : null;
      }}>
      <View
        style={{
          backgroundColor: props.bgColor || '#f8f4f4',
          display: 'flex',
          alignItems: 'center',
          height: props.hght || 30,
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: 10,
          width: props.wdth || '100%',
          alignSelf: 'center',
        }}
        {...props}>
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: '600',
            color: props.txtColor || 'black',
            fontSize: props.fntSize,
          }}>
          {props.txt}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default ButtonExt;
