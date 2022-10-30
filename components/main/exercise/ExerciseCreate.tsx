import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../../lib/colors/colors';

const ExerciseCreate = ({date: Date}) => {
  return <View style={styles.wrapper}></View>;
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: colors.background,
  },
});

export default ExerciseCreate;
