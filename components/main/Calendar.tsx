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
      {tabs.map((tab, index) => (
        <View style={styles.tab} key={tab.weekDay + index}>
          <Text>{tab.weekDay}</Text>
          <Text>{tab.weekNum}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'blue',
    borderRadius: 10,
    height: 60,
    width: '15%',
    marginRight: 10,
  },
});

export default Calendar;
