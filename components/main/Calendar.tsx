import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Calendar = () => {
  const tabs = [
    {weekDay: 'Mon', weekNum: 8},
    {weekDay: 'Tue', weekNum: 9},
    {weekDay: 'Wed', weekNum: 10},
    {weekDay: 'Thu', weekNum: 11},
    {weekDay: 'Fri', weekNum: 12},
    {weekDay: 'Sat', weekNum: 13},
    {weekDay: 'Sun', weekNum: 14},
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.tab}>
        <Text>{tabs[0].weekDay}</Text>
        <Text>{tabs[0].weekNum}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});

export default Calendar;
