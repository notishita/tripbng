import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style';

const ReviewDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Review Details</Text>
      <Text style={styles.subtext}>
        Please ensure that the spelling of your name and other details match
        your document/govt. ID, as these
      </Text>

      <View style={styles.card}>
        <Text style={styles.adultTitle}>ADULT 1</Text>
        <View style={styles.row}>
          <Text style={styles.label}>First & Middle Name :</Text>
          <Text style={styles.value}>nal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Last Name :</Text>
          <Text style={styles.value}>tel</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender :</Text>
          <Text style={styles.value}>male</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('FlightBookDetails')}>
          <Text style={styles.edit}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FlightSeats')}>
          <Text style={styles.confirm}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewDetails;
