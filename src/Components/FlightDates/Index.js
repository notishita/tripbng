import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';

const FlightDates = ({dates, selectedDate, onDateSelect}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {dates.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dateBox,
            selectedDate === item.date && styles.selectedDateBox,
          ]}
          onPress={() => onDateSelect(item.date)}
        >
          <Text>{item.displayDate}</Text>
          <Text>{item.price}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FlightDates;
