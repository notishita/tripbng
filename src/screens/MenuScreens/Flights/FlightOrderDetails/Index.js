import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import MenuHeader from '../../../../Components/MenuHeader/Index';
import {
  AIRWAY,
  AIRWAYLARGE,
  BACKICON,
  DIRECTION,
} from '../../../../Assets/Images/Index';
import Color from '../../../../Theme/Color';
import SubmitBtn from '../../../../Components/SubmitBtn/Index';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthTitle from '../../../../Components/AuthTitle/Index';

const FlightOrderDetails = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={styles.container}>
        <View
          style={{
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            borderBottomWidth: 1,
            borderColor: '#eee',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ position: 'absolute', left: 16 }}
          >
            <Image source={BACKICON} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>
            Order Detail
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <Text style={styles.orderTitle}>Book ticket</Text>
          <View style={styles.orderDetailsView}>
            <View style={styles.airwayView}>
              <Image source={AIRWAYLARGE} />
              <Text style={styles.airwayTitle}>Vietnam Airway</Text>
            </View>
            <View style={styles.detailsView}>
              <View style={styles.leftSide}>
                <Text style={styles.detailsName}>Hanoi</Text>
                <Text style={styles.detailsDesc}>Vietnam</Text>
              </View>
              <View style={styles.timingView}>
                <Image source={DIRECTION} />
                <Text>23:00 hours</Text>
              </View>
              <View style={styles.rightSide}>
                <Text style={styles.detailsName}>Danang</Text>
                <Text style={styles.detailsDesc}>Vietnam</Text>
              </View>
            </View>
            <View style={styles.borderSperation}></View>
            <View style={styles.bookingDateView}>
              <View style={styles.bookingDateBox}>
                <Text style={styles.dateTitle}>Date Booking</Text>
                <Text style={styles.dateValue}>12 Aug - 8</Text>
              </View>
              <View style={styles.bookingDateBox}>
                <Text style={styles.dateTitle}>Class</Text>
                <Text style={styles.dateValue}>Standart</Text>
              </View>
              <View style={styles.bookingDateBox}>
                <Text style={styles.dateTitle}>Seat No</Text>
                <Text style={styles.dateValue}>P533</Text>
              </View>
              <View style={styles.bookingDateBox}>
                <Text style={styles.dateTitle}>Location</Text>
                <Text style={styles.dateValue}>
                  Loky - 15 Vincom Royal City
                </Text>
              </View>
              <View style={styles.bookingDateBox}>
                <Text style={styles.dateTitle}>Price</Text>
                <Text style={styles.dateValue}>₹120 x 2</Text>
              </View>
              <View style={styles.bookingDateBox}>
                <Text style={styles.dateTitle}>Apps Fee</Text>
                <Text style={styles.dateValue}>5%</Text>
              </View>
              <View style={styles.bookingDateBox}>
                <Text style={styles.dateTitle}>Promo Code</Text>
                <Text style={[styles.dateValue, { color: Color.mainText }]}>
                  XTRAFREE
                </Text>
              </View>
              <View style={styles.bookingDateBox}>
                <Text style={styles.dateTitleTotal}>Total Price</Text>
                <Text style={styles.dateValueTotal}>₹240</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomBtn}>
        <SubmitBtn buttonText="Download Ticket PDF" />
        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Text style={styles.homeBtnText}>Back to Homepage</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FlightOrderDetails;
