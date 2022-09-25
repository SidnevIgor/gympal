import React, {useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import colors from '../../lib/colors/colors';
import CalendarTab from '../../lib/interfaces/CalendarTab';
import TextExt from '../shared/TextExt';
import moment from 'moment';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Calendar = () => {
  const getTabs = (): CalendarTab[] => {
    const weekDayIndex = moment().isoWeekday() - 1;
    let tabs: CalendarTab[] = [];

    for (let i = 0; i < weekDays.length; i++) {
      const weekDay = weekDays[i];
      tabs.push({
        weekDay,
        date: moment().startOf('isoWeek').add(i, 'days').date(),
        isCurrentDate: i === weekDayIndex,
      });
    }
    return tabs;
  };

  const [tabs, setTabs] = useState<CalendarTab[]>(getTabs());
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
    margin: 5,
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    height: 60,
    width: '12%',
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
