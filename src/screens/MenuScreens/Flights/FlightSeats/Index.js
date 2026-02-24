import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import MenuHeader from '../../../../Components/MenuHeader/Index';
import { BACKICON, SEATS } from '../../../../Assets/Images/Index';
import Color from '../../../../Theme/Color';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FlightSeats = () => {
  const navigation = useNavigation();

  // Dummy data for left and right column groups of seats
  const dummySeatsDataLeft = [
    [
      { id: '1A', status: 'reserved' },
      { id: '1B', status: 'available' },
    ],
    [
      { id: '1C', status: 'selected' },
      { id: '1D', status: 'reserved' },
    ],
    [
      { id: '2C', status: 'available' },
      { id: '2D', status: 'selected' },
    ],
    [
      { id: '1A', status: 'reserved' },
      { id: '1B', status: 'available' },
    ],
    [
      { id: '1C', status: 'selected' },
      { id: '1D', status: 'reserved' },
    ],
    [
      { id: '2C', status: 'available' },
      { id: '2D', status: 'selected' },
    ],
  ];

  const dummySeatsDataRight = [
    [
      { id: '1A', status: 'reserved' },
      { id: '1B', status: 'available' },
    ],
    [
      { id: '2A', status: 'selected' },
      { id: '2B', status: 'reserved' },
    ],
    [
      { id: '3A', status: 'available' },
      { id: '3B', status: 'selected' },
    ],
    [
      { id: '1A', status: 'reserved' },
      { id: '1B', status: 'available' },
    ],
    [
      { id: '2A', status: 'selected' },
      { id: '2B', status: 'reserved' },
    ],
    [
      { id: '3A', status: 'available' },
      { id: '3B', status: 'selected' },
    ],
  ];

  const getBackgroundColor = status => {
    switch (status) {
      case 'reserved':
        return Color.flightReserved;
      case 'selected':
        return Color.flightSelected;
      case 'available':
        return Color.flightAvailable;
      default:
        return 'transparent';
    }
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
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ position: 'absolute', left: 16 }}
          >
            <Image source={BACKICON} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>
            Choose Seats
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <View style={styles.seatsDetails}>
            <Text style={styles.seatsText}>Choose Seats</Text>
          </View>
          <View style={styles.seatOptions}>
            <View style={styles.seatOptionsBox}>
              <View style={styles.seatCheck}></View>
              <Text style={styles.seatCheckText}>Reserved</Text>
            </View>
            <View style={styles.seatOptionsBox}>
              <View
                style={[
                  styles.seatCheck,
                  {
                    backgroundColor: Color.flightAvailable,
                    borderWidth: 1,
                    borderColor: Color.borderAuth,
                  },
                ]}
              ></View>
              <Text style={styles.seatCheckText}>Available</Text>
            </View>
            <View style={styles.seatOptionsBox}>
              <View
                style={[
                  styles.seatCheck,
                  { backgroundColor: Color.flightSelected },
                ]}
              ></View>
              <Text style={styles.seatCheckText}>Selected</Text>
            </View>
          </View>
          <Image style={styles.seatsIcon} source={SEATS} />
          <View style={styles.seatsDetailsView}>
            {dummySeatsDataLeft.map((row, rowIndex) => (
              <View key={`row-${rowIndex}`} style={styles.seatsDetailsInfo}>
                {/* Left column */}
                {row.map((seat, seatIndex) => (
                  <View
                    key={seat.id}
                    style={[
                      styles.seatNumber,
                      { backgroundColor: getBackgroundColor(seat.status) },
                    ]}
                  >
                    <Text>{seat.id}</Text>
                  </View>
                ))}
                {/* Spacer */}
                <View style={{ width: 30 }} />
                {/* Right column */}
                {dummySeatsDataRight[rowIndex].map((seat, seatIndex) => (
                  <View
                    key={seat.id}
                    style={[
                      styles.seatNumber,
                      { backgroundColor: getBackgroundColor(seat.status) },
                    ]}
                  >
                    <Text>{seat.id}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.paymentView}>
        <View>
          <Text style={styles.paymentAmount}>₹ 300</Text>
          <Text style={styles.paymentInfo}>For 1 ADULT</Text>
        </View>
        <TouchableOpacity
          style={styles.paymentBtn}
          onPress={() => navigation.navigate('FlightPayment')}
        >
          <Text style={styles.paymentBtnText}>Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FlightSeats;
