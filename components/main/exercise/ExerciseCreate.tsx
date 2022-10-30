import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../../lib/colors/colors';

const ExerciseCreate = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Create exercise page</Text>
    </View>
  );
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
