import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import MenuHeader from '../../Components/MenuHeader/Index';
import {
  BACKICON,
  DATE,
  HOTELLOCATION,
  WISHLISTBANNER,
  PERSON, // Add an icon for login prompt
} from '../../Assets/Images/Index';
import PaymentFlightDetailsBox from '../../Components/PaymentFlightDetailsBox/Index';

const Booking = () => {
  const [selectedFilter, setSelectedFilter] = useState('Booked');
  const [authToken, setAuthToken] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuthToken = async () => {
      const token = await AsyncStorage.getItem('authToken');
      setAuthToken(token);
    };
    checkAuthToken();
  }, []);

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
        <MenuHeader
          backImg={BACKICON}
          authTitle="My Booking"
          onPress={() => navigation.goBack()}
        />
      </View>
      {/* {authToken ? ( */}
      // Show Booking UI if user is logged in
      <>
        <View style={styles.filterView}>
          <TouchableOpacity
            style={[
              styles.filterBox,
              selectedFilter === 'Booked' && styles.activeFilterBox,
            ]}
            onPress={() => setSelectedFilter('Booked')}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === 'Booked' && styles.activeFilterText,
              ]}
            >
              Booked
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.filterBox,
              selectedFilter === 'History' && styles.activeFilterBox,
            ]}
            onPress={() => setSelectedFilter('History')}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === 'History' && styles.activeFilterText,
              ]}
            >
              History
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          {selectedFilter === 'Booked' && (
            <View style={styles.bookedView}>
              <FlatList
                data={flightsData}
                renderItem={renderFlightDetails}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingBottom: 25 }}
              />
            </View>
          )}
          {selectedFilter === 'History' && (
            <View style={styles.bookedView}>
              <View style={styles.whislistDetails}>
                <Image style={styles.wishlistBanner} source={WISHLISTBANNER} />
                <View>
                  <Text style={styles.hotelRoomName}>Times City</Text>
                  <View style={styles.locationDetails}>
                    <Image source={HOTELLOCATION} />
                    <Text style={styles.hotelRoomLocation}>Hanoi, Vietnam</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </>
      {/* ) : (
        // Default UI when user is not logged in
        <View style={styles.loginContainer}>
          <Image source={PERSON} style={styles.loginIcon} />
          <Text style={styles.loginMessage}>You need to log in to view your bookings</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('OnBoarding')}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      )} */}
    </SafeAreaView>
  );
};

export default Booking;
