import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {
  ADDRESS,
  DATE,
  MAP,
  MENUBACKGROUND,
  NOTIFICATION,
  PROFILEICON,
  SEACRHICON,
  USER,
} from '../../../../Assets/Images/Index';
import styles from './style';
import {Dropdown} from 'react-native-element-dropdown';
import Color from '../../../../Theme/Color';
import {Calendar} from 'react-native-calendars';
import SubmitBtn from '../../../../Components/SubmitBtn/Index';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SelectHotel = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocusTravel, setIsFocusTravel] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [calendarType, setCalendarType] = useState(null);
  const [travellers, setTravellers] = useState('1 Adult');
  const [checkInDate, setCheckInDate] = useState(
    new Date().toISOString().split('T')[0],
  );
  const [checkOutDate, setCheckOutDate] = useState(null);

  const navigation = useNavigation();

  const today = new Date().toISOString().split('T')[0];

  const handleDateSelect = date => {
    if (calendarType === 'checkIn') {
      setCheckInDate(date.dateString);
      // Reset Check-out date if it's earlier than Check-in
      if (checkOutDate && new Date(checkOutDate) < new Date(date.dateString)) {
        setCheckOutDate(null);
      }
    } else if (calendarType === 'checkOut') {
      setCheckOutDate(date.dateString);
    }
    setIsCalendarVisible(false);
  };

  const formatDate = date => {
    const options = {
      day: '2-digit',
      month: 'short',
      year: '2-digit',
      weekday: 'short',
    };
    const dateObj = new Date(date);
    const formatter = new Intl.DateTimeFormat('en-GB', options);
    const parts = formatter.formatToParts(dateObj);

    const day = parts.find(p => p.type === 'day').value;
    const month = parts.find(p => p.type === 'month').value;
    const year = parts.find(p => p.type === 'year').value;
    const weekday = parts.find(p => p.type === 'weekday').value;

    // Combine for main and smaller text
    return {main: `${day} ${month} ‘`, small: `${year}, ${weekday}`};
  };

  const locationData = [
    {label: 'Sardar Patel, Ahmedabad', value: '1', shortName: 'AMD Ahmedabad'},
    {label: 'Chatrapati Shivaji, Mumbai', value: '2', shortName: 'BOM Mumbai'},
    {label: 'India Gate, Delhi', value: '3', shortName: 'DEL Delhi'},
    {label: 'Gateway of India, Mumbai', value: '4', shortName: 'BOM Mumbai'},
    {label: 'Qutub Minar, Delhi', value: '5', shortName: 'DEL Delhi'},
    {label: 'Taj Mahal, Agra', value: '6', shortName: 'AGR Agra'},
    {label: 'Golden Temple, Amritsar', value: '7', shortName: 'ATQ Amritsar'},
    {label: 'Mecca Masjid, Hyderabad', value: '8', shortName: 'HYD Hyderabad'},
    {label: 'Charminar, Hyderabad', value: '9', shortName: 'HYD Hyderabad'},
    {
      label: 'Brihadeeswarar Temple, Thanjavur',
      value: '10',
      shortName: 'TJV Thanjavur',
    },
  ];

  const travellerData = [
    {label: '1 Adult', value: '1 Adult'},
    {label: '2 Adults', value: '2 Adults'},
    {label: 'Family', value: 'Family'},
    {label: 'Group', value: 'Group'},
  ];
  return (
   <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#6200EE" />
     <View style={styles.container}>
      <View>
        <Image style={styles.menuBannerImg} source={MENUBACKGROUND} />
        <Image style={styles.mapIcon} source={MAP} />

        <View style={styles.flightOptionsView}>
          <View style={styles.homeHeader}>
            <View style={styles.userInfo}>
              <TouchableOpacity style={styles.userInfoImg}>
                <Image style={styles.userInfoIcon} source={USER} />
              </TouchableOpacity>
              <View style={styles.userInfoDetails}>
                <Text style={styles.userInfoName}>Welcome back, Vikas!</Text>
                <View style={styles.userInfoAddress}>
                  <Image style={styles.userInfoAddressIcon} source={ADDRESS} />
                  <Text style={styles.userInfoAddressText}>Gujarat, India</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.notificationBtn}>
              <Image style={styles.notificationIcon} source={NOTIFICATION} />
            </TouchableOpacity>
          </View>
          <View style={styles.flightDetials}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.hotelTitle}>Hotel Booking</Text>
              <View style={styles.selectFilghtsView}>
                <View>
                  <Text style={styles.label}>Location</Text>
                  <Dropdown
                    style={[
                      styles.fromToFlights,
                      isFocus && {borderColor: Color.primaryText},
                    ]}
                    placeholderStyle={styles.fromToFlightsText}
                    selectedTextStyle={styles.fromToFlightsText}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={locationData}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select city' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setValue(item.value);
                      setIsFocus(false);
                    }}
                    renderLeftIcon={() => (
                      <Image style={styles.dropDownIcon} source={SEACRHICON} />
                    )}
                  />
                </View>
                <View>
                  <Text style={styles.label}>Check-in Date</Text>
                  <TouchableOpacity
                    style={styles.fromToFlights}
                    onPress={() => {
                      setCalendarType('checkIn');
                      setIsCalendarVisible(true);
                    }}>
                    <Image source={DATE} />
                    <Text style={styles.dateText}>
                      {formatDate(checkInDate).main}
                      <Text style={styles.dateTextSmall}>
                        {formatDate(checkInDate).small}
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.label}>Check-out Date</Text>
                  <TouchableOpacity
                    style={styles.fromToFlights}
                    onPress={() => {
                      setCalendarType('checkOut');
                      setIsCalendarVisible(true);
                    }}>
                    <Image source={DATE} />
                    {checkOutDate ? (
                      <Text style={styles.dateText}>
                        {formatDate(checkOutDate).main}
                        <Text style={styles.dateTextSmall}>
                          {formatDate(checkOutDate).small}
                        </Text>
                      </Text>
                    ) : (
                      <Text style={styles.placeholderText}>Select a date</Text>
                    )}
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.label}>Traveller </Text>
                  <Dropdown
                    style={[
                      styles.fromToFlights,
                      isFocusTravel && {borderColor: Color.primaryText},
                    ]}
                    placeholderStyle={styles.fromToFlightsText}
                    selectedTextStyle={styles.fromToFlightsText}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={travellerData}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    // placeholder={!isFocus ? '1 Adult & Children' : '...'}
                    searchPlaceholder="Search..."
                    value={travellers}
                    onFocus={() => setIsFocusTravel(true)}
                    onBlur={() => setIsFocusTravel(false)}
                    onChange={item => setTravellers(item.value)}
                    renderLeftIcon={() => (
                      <Image style={styles.dropDownIcon} source={PROFILEICON} />
                    )}
                  />
                </View>
                <SubmitBtn
                  buttonText="Search Hotels"
                  onPress={() => {
                    navigation.navigate('ShowHotels');
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      {isCalendarVisible && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={isCalendarVisible}
          onRequestClose={() => setIsCalendarVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Calendar
                current={today}
                minDate={calendarType === 'checkOut' ? checkInDate : today}
                onDayPress={handleDateSelect}
                markedDates={{
                  [checkInDate]: {
                    selected: true,
                    selectedColor: Color.primaryText,
                    selectedTextColor: 'white',
                  },
                  [checkOutDate]: {
                    selected: true,
                    selectedColor: Color.primaryText,
                    selectedTextColor: 'white',
                  },
                }}
                theme={{
                  selectedDayBackgroundColor: Color.primaryText,
                  selectedDayTextColor: 'white',
                }}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setIsCalendarVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
   </SafeAreaView>
  );
};

export default SelectHotel;
