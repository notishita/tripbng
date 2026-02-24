import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import styles from './style';
import MenuHeader from '../../Components/MenuHeader/Index';
import {BACKICON} from '../../Assets/Images/Index';
import InputBox from '../../Components/InputBox/Index';
import SubmitBtn from '../../Components/SubmitBtn/Index';
import { SafeAreaView } from 'react-native-safe-area-context';

const Support = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.container}>
        <MenuHeader backImg={BACKICON} authTitle="Customer Support" />
        <View>
          <Text style={styles.supportName}>Hi, Vikas</Text>
          <Text style={styles.supportMessage}>
            We are here to help you at every step. Please browse through the
            options below and tap on what you’re looking for.
          </Text>
          <View style={styles.bookingBox}>
            <Text style={styles.bookingTitle}>Add Booking</Text>
            <Text style={styles.bookingDesc}>
              View and manage a booking by entering the booking ID here. For
              verifying the details, an OTP will be sent to the customer who has
              made the booking.
            </Text>
            <InputBox placeholderText="Booking ID" />
            <SubmitBtn buttonText="Send OTP" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Support;
