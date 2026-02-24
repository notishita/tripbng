import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './style';
import FlightHeader from '../../../../../Components/FlightHeader/Index';
import { AIRWAY } from '../../../../../Assets/Images/Index';

const Round = ({ navigation }) => {
  const flightData = [
    {
      type: 'DEPART',
      date: 'BOM-DEL, Fri, 15 Nov',
      flights: [
        {
          airway: 'Vietnam Airway',
          departureTime: '8:00 AM',
          duration: '2h 15m',
          arrivalTime: '10:15 AM',
          stopType: 'Non stop',
          price: '₹ 340',
          priceDesc: 'Per Adult',
        },
        {
          airway: 'Vietnam Airway',
          departureTime: '8:00 AM',
          duration: '2h 15m',
          arrivalTime: '10:15 AM',
          stopType: 'Non stop',
          price: '₹ 340',
          priceDesc: 'Per Adult',
        },
      ],
    },
    {
      type: 'RETURN',
      date: 'DEL-BOM, Fri, 15 Nov',
      flights: [
        {
          airway: 'Vietnam Airway',
          departureTime: '8:00 AM',
          duration: '2h 15m',
          arrivalTime: '10:15 AM',
          stopType: 'Non stop',
          price: '₹ 340',
          priceDesc: 'Per Adult',
        },
        {
          airway: 'Vietnam Airway',
          departureTime: '8:00 AM',
          duration: '2h 15m',
          arrivalTime: '10:15 AM',
          stopType: 'Non stop',
          price: '₹ 340',
          priceDesc: 'Per Adult',
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={[styles.container, { paddingTop: 40 }]}>
        <FlightHeader />
        <View style={styles.roundTripView}>
          <View style={styles.roundTripFlights}>
            <View style={styles.roundTrip}>
              <Text style={styles.roundTripHeading}>Departure</Text>
              <View style={styles.roundTripInfo}>
                <Image source={AIRWAY} />
                <View>
                  <Text style={styles.roundTripDates}>21:00-23:15</Text>
                  <Text style={styles.roundTripPrice}>₹ 340</Text>
                </View>
              </View>
            </View>
            <View style={styles.roundTrip}>
              <Text style={styles.roundTripHeading}>Departure</Text>
              <View style={styles.roundTripInfo}>
                <Image source={AIRWAY} />
                <View>
                  <Text style={styles.roundTripDates}>21:00-23:15</Text>
                  <Text style={styles.roundTripPrice}>₹ 340</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bookDetails}>
            <View>
              <Text style={styles.bookDetailsPrice}>₹ 300</Text>
              <Text style={styles.bookDetailsDesc}>per adult</Text>
            </View>
            <TouchableOpacity style={styles.bookBtn} onPress={() => navigation.navigate('FlightDetailBox')}>
              <Text style={styles.bookBtnText}>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 120 }}
        >
          {flightData.map((section, sectionIndex) => (
            <View style={styles.departReturnView} key={sectionIndex}>
              <View style={styles.departReturnDetails}>
                <View style={styles.departReturn}>
                  <Text style={styles.departReturnText}>{section.type}</Text>
                  <Text style={styles.departReturnDate}>{section.date}</Text>
                </View>
                {section.flights.map((flight, flightIndex) => (
                  <TouchableOpacity
                    style={styles.departReturnInfo}
                    key={`${sectionIndex}-${flightIndex}`}
                  >
                    <View style={styles.airwayInfo}>
                      <Image source={AIRWAY} />
                      <Text>{flight.airway}</Text>
                    </View>
                    <View style={styles.priceView}>
                      <View style={styles.priceTimeView}>
                        <View>
                          <Text style={styles.priceTimeText}>
                            {flight.departureTime}
                          </Text>
                          <Text style={styles.priceTimeDesc}>
                            {flight.duration}
                          </Text>
                        </View>
                        <View style={styles.priceLine}></View>
                        <View>
                          <Text style={styles.priceTimeText}>
                            {flight.arrivalTime}
                          </Text>
                          <Text style={styles.priceTimeDesc}>
                            {flight.stopType}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <View>
                          <Text style={styles.priceTimeText}>
                            {flight.price}
                          </Text>
                          <Text style={styles.priceTimeDesc}>
                            {flight.priceDesc}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Round;
