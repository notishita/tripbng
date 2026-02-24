import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import styles from './style';
import MenuHeader from '../../Components/MenuHeader/Index';
import {BACKICON} from '../../Assets/Images/Index';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PrivacyPolice = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.container}>
        <MenuHeader backImg={BACKICON} authTitle="Privacy Police" onPress={()=>{
            navigation.goBack()
        }} />
        <View>
          <Text style={styles.policeDesc}>
            These Terms and Conditions govern your use of the website and
            services. By accessing or using our website, you agree to be bound
            by these Terms and Conditions. If you do not agree with any part of
            these terms, you may not use our services.
          </Text>
          <View style={styles.policeList}>
            <Text style={styles.pliceTitle}>Use of Our Services</Text>
            <Text style={styles.policeDesc}>
              -{'>'}You agree to provide accurate and complete information when
              using our services, including during registration and booking
              processes.
            </Text>
            <Text style={styles.policeDesc}>
              -{'>'}You are responsible for maintaining the confidentiality of
              your account credentials and for all activities that occur under
              your account.
            </Text>
          </View>
          <View style={styles.policeList}>
            <Text style={styles.pliceTitle}>Use of Our Services</Text>
            <Text style={styles.policeDesc}>
              -{'>'}All bookings made through our website are subject to
              availability and confirmation by the company and our service
              provide rs.
            </Text>
            <Text style={styles.policeDesc}>
              -{'>'}Prices displayed on our website are subject to change
              without prior notice. We reserve the right to modify or cancel
              bookings if inaccuracies are found.
            </Text>
            <Text style={styles.policeDesc}>
              -{'>'}Payment for bookings must be made in full at the time of
              booking unless otherwise specified.
            </Text>
            <Text style={styles.policeDesc}>
              -{'>'}Refunds, cancellations, and modifications to bookings are
              subject to our Refund and Cancellation Policy, which is outlined
              separately on our website.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PrivacyPolice;
