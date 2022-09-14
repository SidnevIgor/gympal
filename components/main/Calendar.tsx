import React, {useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import colors from '../../lib/colors/colors';
import TextExt from '../shared/TextExt';

const Calendar = () => {
  const [tabs, setTabs] = useState([
    {weekDay: 'Mon', date: 8, isCurrentDate: false},
    {weekDay: 'Tue', date: 9, isCurrentDate: false},
    {weekDay: 'Wed', date: 10, isCurrentDate: false},
    {weekDay: 'Thu', date: 11, isCurrentDate: false},
    {weekDay: 'Fri', date: 12, isCurrentDate: true},
    {weekDay: 'Sat', date: 13, isCurrentDate: false},
    {weekDay: 'Sun', date: 14, isCurrentDate: false},
  ]);
  const handleTabClick = chosenDate => {
    setTabs(prevTabs => {
      const arrCopy = [...prevTabs];
      arrCopy.forEach(tab => {
        tab.isCurrentDate = tab.date === chosenDate;
      });
      return arrCopy;
    });
  };

  return (
    <View style={styles.wrapper}>
      {tabs.map((tab, index) => (
        <TouchableWithoutFeedback
          onPress={() => handleTabClick(tab.date)}
          key={tab.weekDay + index}>
          <View style={tab.isCurrentDate ? styles.tabCurrent : styles.tab}>
            <TextExt style={styles.tabText}>{tab.weekDay}</TextExt>
            <TextExt style={styles.tabText}>{tab.date}</TextExt>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    height: 60,
    width: '13%',
    margin: '1%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 6,
  },
  tabCurrent: {
    backgroundColor: colors.secondary,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    height: 60,
    width: '13%',
    margin: '1%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 6,
  },
  tabText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Calendar;
