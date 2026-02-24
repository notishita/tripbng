import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import MenuHeader from '../../../../Components/MenuHeader/Index';
import { BACKICON, CLOCK, DATE, WALLET } from '../../../../Assets/Images/Index';
import FlightDetailsBox from '../../../../Components/FlightDetailsBox/Index';
import MoreFlightDetailsBox from '../../../../Components/MoreFlightDetailsBox/Index';
import PaymentFlightDetailsBox from '../../../../Components/PaymentFlightDetailsBox/Index';
import SubmitBtn from '../../../../Components/SubmitBtn/Index';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthTitle from '../../../../Components/AuthTitle/Index';

const FlightPayment = () => {
  const navigation = useNavigation();
  const flightsData = [
    {
      id: '1',
      fromCity: 'Hanoi',
      fromCountry: 'Vietnam',
      toCity: 'Danang',
      toCountry: 'Vietnam',
      departureTime: '23:00 hours',
      departureDate: 'August 28, 2021',
      arrivalTime: '8:00 AM',
      arrivalDate: 'August 29, 2021',
      airline: 'Vietnam Airway',
      price: '₹ 3000',
    },
  ];

  const renderFlightDetails = ({ item }) => {
    return <PaymentFlightDetailsBox flightData={item} />;
  };
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
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ position: 'absolute', left: 16 }}
          >
            <Image source={BACKICON} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>

          {/* Center Title */}
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>
            Payment
          </Text>
        </View>å
        <View style={{ marginTop: 20 }}></View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <View style={styles.flightPayment}>
            <FlatList
              data={flightsData}
              renderItem={renderFlightDetails}
              keyExtractor={item => item.id}
              contentContainerStyle={{ paddingBottom: 25 }}
            />
            <View style={styles.borderSepration}></View>
            <View style={styles.dateTimeView}>
              <View style={styles.dateTimeBox}>
                <Text style={styles.dateTimeLabel}>Date</Text>
                <View style={styles.dateTimeDetails}>
                  <Image source={DATE} />
                  <Text style={styles.dateTimeValue}>15/07/2022</Text>
                </View>
              </View>
              <View style={styles.dateTimeBox}>
                <Text style={styles.dateTimeLabel}>Time</Text>
                <View style={styles.dateTimeDetails}>
                  <Image source={CLOCK} />
                  <Text style={styles.dateTimeValue}>09.20</Text>
                </View>
              </View>
            </View>
            <View style={styles.borderSepration}></View>
            <View style={styles.mainPrice}>
              <Text style={styles.mainPriceLabel}>Price</Text>
              <Text style={styles.mainPriceValue}>₹230</Text>
            </View>
          </View>
          <View style={styles.walletView}>
            <Text style={styles.walletTitle}>Select payment method</Text>
            <View style={styles.walletIconView}>
              <Image source={WALLET} />
              <View>
                <Text style={styles.walletNumber}>**** **** **** 8970</Text>
                <Text style={styles.expiresDate}>Expires: 12/26</Text>
              </View>
            </View>
          </View>
          <SubmitBtn
            buttonText="Next"
            onPress={() => {
              navigation.navigate('FlightOrderDetails');
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FlightPayment;
