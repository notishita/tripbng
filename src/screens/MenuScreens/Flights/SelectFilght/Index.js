import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './style';
// import Navigation from '../../../../MainNavigation/Navigation';

const SelectFilght = ({ navigation }) => {
  const [tripType, setTripType] = useState('One-way');
  const [fromLocation, setFromLocation] = useState('Hanoi, Vietnam');
  const [date, setDate] = useState(new Date(2022, 6, 15)); // month is 0-indexed
  const [show, setShow] = useState(false);

  // Function to handle date change
  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios'); // iOS keeps picker open
    if (selectedDate) setDate(selectedDate);
  };

  // Format date as DD/MM/YYYY
  const formatDate = dateObj => {
    if (!dateObj) return '';
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.topContainer}>
        <ImageBackground
          source={require('../../../../Assets/Images/Icons/BlueBackground.jpg')} // your background image
          style={styles.topContainerOuter}
          imageStyle={styles.topImageStyle}
        >
          <View style={styles.headerContent}>
            <Image
              source={require('../../../../Assets/Images/Icons/user.png')}
              style={styles.profileImage}
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.welcomeText}>Welcome back, Vikas!</Text>
              <Text style={styles.locationText}>📍 Gujarat, India</Text>
            </View>
            <TouchableOpacity style={styles.bellIcon}>
              <Image
                source={require('../../../../Assets/Images/Icons/notificationWhite.png')}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.formCard}>
        <View style={styles.tabRow}>
          {['One-way', 'Round', 'Multicity'].map(type => (
            <TouchableOpacity
              key={type}
              style={[styles.tabButton, tripType === type && styles.activeTab]}
              onPress={() => setTripType(type)}
            >
              <Text
                style={[
                  styles.tabText,
                  tripType === type && styles.activeTabText,
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>From</Text>
        <View style={styles.inputRow}>
          <Image source={require('../../../../Assets/Images/Icons/from.png')} />
          <TextInput
            value={fromLocation}
            onChangeText={setFromLocation}
            style={styles.input}
            editable={true}
          />
        </View>

        <Text style={styles.label}>To</Text>
        <View style={styles.inputRow}>
          <Image source={require('../../../../Assets/Images/Icons/to.png')} />
          <TextInput
            value={fromLocation}
            onChangeText={setFromLocation}
            style={styles.input}
            editable={true}
          />
        </View>

        <Text style={styles.label}>Departure</Text>
        <View style={styles.inputRow}>
          <Image
            source={require('../../../../Assets/Images/Icons/calender.png')}
          />
          <TouchableOpacity style={{ flex: 1 }} onPress={() => setShow(true)}>
            <TextInput
              value={formatDate(date)}
              style={styles.input}
              editable={false}
              pointerEvents="none" // iOS only, disables keyboard popup
            />
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Traveller</Text>
            <TextInput value="1 Adult" style={styles.input} editable={false} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Class</Text>
            <TextInput value="Economy" style={styles.input} editable={false} />
          </View>
        </View>

        <Text style={styles.label}>Special Fares (Optional)</Text>
        <View style={styles.specialFaresRow}>
          <TouchableOpacity style={styles.specialFare}>
            <Text style={styles.fareTitle}>Student</Text>
            <Text style={styles.fareSub}>Extra discounts/baggage</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.specialFare}>
            <Text style={styles.fareTitle}>Armed Forces</Text>
            <Text style={styles.fareSub}>Up to ₹ 600 off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.specialFare}>
            <Text style={styles.fareTitle}>Senior Citizen</Text>
            <Text style={styles.fareSub}>Up to ₹ 600 off</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            if (tripType === 'One-way') {
              navigation.navigate('OneWay');
            } else if (tripType === 'Round') {
              navigation.navigate('Round');
            } else if (tripType === 'Multicity') {
              navigation.navigate('OneWay');
            }
          }}
        >
          <Text style={styles.searchText}>Search Flights</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SelectFilght;
