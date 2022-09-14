import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

const TextExt = ({children, ...props}) => {
  return <Text {...props}>{children}</Text>;
};

const styles = StyleSheet.create({
  txt: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default TextExt;
