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
  CALENDER,
  FROM,
  MAP,
  MENUBACKGROUND,
  NOTIFICATION,
  TO,
  USER,
} from '../../../../Assets/Images/Index';
import styles from './style';
import Color from '../../../../Theme/Color';
import {Dropdown} from 'react-native-element-dropdown';
import {Calendar} from 'react-native-calendars';
import SubmitBtn from '../../../../Components/SubmitBtn/Index';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SelectFilght = () => {
  const [selectedCategory, setSelectedCategory] = useState('One-way');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedReturnDate, setSelectedReturnDate] = useState(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [isCalendarReturnVisible, setIsCalendarReturnVisible] = useState(false);
  const [cityViews, setCityViews] = useState([0]);

  const navigation = useNavigation()

  const flightsCategory = [
    {name: 'One-way'},
    {name: 'Round'},
    {name: 'Multicity'},
  ];
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

  const today = new Date().toISOString().split('T')[0];
  const formatDate = dateString => {
    const date = new Date(dateString);
    const dayAndMonth = `${date.getDate()} ${date.toLocaleDateString('en-US', {
      month: 'short',
    })}`; // "14 Nov"
    const weekdayAndYear = `${date.toLocaleDateString('en-US', {
      weekday: 'short',
    })}, ${date.getFullYear()}`; // "Thu, 2024"
    return {dayAndMonth, weekdayAndYear};
  };

  const handleDateSelect = date => {
    setSelectedDate(date.dateString);
    setIsCalendarVisible(false);
  };
  const handleDateReturnSelect = date => {
    setSelectedReturnDate(date.dateString);
    setIsCalendarReturnVisible(false);
  };

  const handleAddCity = () => {
    setCityViews([...cityViews, cityViews.length]);
  };
  const handleRemoveCity = index => {
    setCityViews(cityViews.filter((_, i) => i !== index));
  };
  return (
   <SafeAreaView>
    <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
          />
     <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6200EE" />
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
            {/* <View style={{marginBottom:1000, height:300}}> */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.flightCate}>
                {flightsCategory.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.flightCateBox,
                      selectedCategory === item.name && {
                        backgroundColor: Color.primaryText,
                        borderWidth: 0,
                      },
                    ]}
                    onPress={() => setSelectedCategory(item.name)}>
                    <Text
                      style={[
                        styles.flightMenuText,
                        {
                          color:
                            selectedCategory === item.name
                              ? Color.white
                              : Color.verifyTitle,
                        },
                      ]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              {selectedCategory == 'One-way' && (
                <View style={styles.selectFilghtsView}>
                  <View>
                    <Text style={styles.label}>From</Text>

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
                        <Image style={styles.dropDownIcon} source={FROM} />
                      )}
                    />
                  </View>
                  <View>
                    <Text style={styles.label}>To</Text>
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
                        <Image style={styles.dropDownIcon} source={TO} />
                      )}
                    />
                  </View>
                  <View>
                    <Text style={styles.label}>Departure</Text>
                    <View style={styles.fromToFlights}>
                      <Image
                        style={styles.fromToFlightsIcon}
                        source={CALENDER}
                      />
                      <TouchableOpacity
                        onPress={() => setIsCalendarVisible(true)}>
                        <Text style={styles.fromToFlightsText}>
                          {' '}
                          {selectedDate ? selectedDate : 'Select a date'}
                        </Text>
                      </TouchableOpacity>
                      {isCalendarVisible && (
                        <View
                          style={{
                            position: 'absolute',
                            top: 60,
                            left: 0,
                            right: 0,
                            zIndex: 1,
                          }}>
                          <Calendar
                            current={today}
                            minDate={today}
                            onDayPress={handleDateSelect}
                            markedDates={{
                              [selectedDate]: {
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
                        </View>
                      )}
                    </View>
                  </View>
                  <View style={styles.travelClassView}>
                    <View style={styles.travelClassBox}>
                      <Text style={styles.label}>Traveller</Text>
                      <View style={styles.fromToFlights}>
                        <Text style={styles.fromToFlightsText}>1 Adult</Text>
                      </View>
                    </View>
                    <View style={styles.travelClassBox}>
                      <Text style={styles.label}>Class</Text>
                      <View style={styles.fromToFlights}>
                        <Text style={styles.fromToFlightsText}>Economy</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.discountView}>
                    <Text style={styles.discountTitle}>
                      Special Fares (Optional)
                    </Text>
                    <View style={styles.discountDetails}>
                      <TouchableOpacity style={styles.discountBox}>
                        <Text style={styles.discountBoxName}>Student</Text>
                        <Text style={styles.discountText}>
                          Extra discounts/baggage
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.discountBox}>
                        <Text style={styles.discountBoxName}>Armed Forces</Text>
                        <Text style={styles.discountText}>Up to ₹ 600 off</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.discountBox}>
                        <Text style={styles.discountBoxName}>
                          Senior Citizen
                        </Text>
                        <Text style={styles.discountText}>Up to ₹ 600 off</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <SubmitBtn buttonText="Search Flights" onPress={()=>{
                    navigation.navigate("OneWay")
                  }}/>
                </View>
              )}
              {selectedCategory == 'Round' && (
                <View style={styles.selectFilghtsView}>
                  <View>
                    <Text style={styles.label}>From</Text>

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
                        <Image style={styles.dropDownIcon} source={FROM} />
                      )}
                    />
                  </View>
                  <View>
                    <Text style={styles.label}>To</Text>
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
                        <Image style={styles.dropDownIcon} source={TO} />
                      )}
                    />
                  </View>
                  <View>
                    <Text style={styles.label}>Departure</Text>
                    <View style={styles.fromToFlights}>
                      <Image
                        style={styles.fromToFlightsIcon}
                        source={CALENDER}
                      />
                      <TouchableOpacity
                        onPress={() => setIsCalendarVisible(true)}>
                        <Text style={styles.fromToFlightsText}>
                          {' '}
                          {selectedDate ? selectedDate : 'Select a date'}
                        </Text>
                      </TouchableOpacity>
                      {isCalendarVisible && (
                        <View
                          style={{
                            position: 'absolute',
                            top: 60,
                            left: 0,
                            right: 0,
                            zIndex: 1,
                          }}>
                          <Calendar
                            current={today}
                            minDate={today}
                            onDayPress={handleDateSelect}
                            markedDates={{
                              [selectedDate]: {
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
                        </View>
                      )}
                    </View>
                  </View>
                  <View>
                    <Text style={styles.label}>Return</Text>
                    <View style={styles.fromToFlights}>
                      <Image
                        style={styles.fromToFlightsIcon}
                        source={CALENDER}
                      />
                      <TouchableOpacity
                        onPress={() => setIsCalendarReturnVisible(true)}>
                        <Text style={styles.fromToFlightsText}>
                          {' '}
                          {selectedReturnDate
                            ? selectedReturnDate
                            : 'Select a date'}
                        </Text>
                      </TouchableOpacity>
                      {isCalendarReturnVisible && (
                        <View
                          style={{
                            position: 'absolute',
                            top: 60,
                            left: 0,
                            right: 0,
                            zIndex: 1,
                          }}>
                          <Calendar
                            current={today}
                            minDate={today}
                            onDayPress={handleDateReturnSelect}
                            markedDates={{
                              [selectedDate]: {
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
                        </View>
                      )}
                    </View>
                  </View>
                  <View style={styles.travelClassView}>
                    <View style={styles.travelClassBox}>
                      <Text style={styles.label}>Traveller</Text>
                      <View style={styles.fromToFlights}>
                        <Text style={styles.fromToFlightsText}>1 Adult</Text>
                      </View>
                    </View>
                    <View style={styles.travelClassBox}>
                      <Text style={styles.label}>Class</Text>
                      <View style={styles.fromToFlights}>
                        <Text style={styles.fromToFlightsText}>Economy</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.discountView}>
                    <Text style={styles.discountTitle}>
                      Special Fares (Optional)
                    </Text>
                    <View style={styles.discountDetails}>
                      <TouchableOpacity style={styles.discountBox}>
                        <Text style={styles.discountBoxName}>Student</Text>
                        <Text style={styles.discountText}>
                          Extra discounts/baggage
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.discountBox}>
                        <Text style={styles.discountBoxName}>Armed Forces</Text>
                        <Text style={styles.discountText}>Up to ₹ 600 off</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.discountBox}>
                        <Text style={styles.discountBoxName}>
                          Senior Citizen
                        </Text>
                        <Text style={styles.discountText}>Up to ₹ 600 off</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <SubmitBtn buttonText="Search Flights" onPress={()=>{
                    navigation.navigate("Round")
                  }}/>
                </View>
              )}
              {selectedCategory == 'Multicity' && (
                <View style={styles.selectFilghtsView}>
                  {cityViews.map((_, index) => (
                    <View style={styles.multipleView}>
                      {/* <TouchableOpacity
                        onPress={() => handleRemoveCity(index)}
                        style={{
                          position: 'absolute', 
                          right: 0, 
                          top: -10, 
                          paddingVertical: 5, 
                          paddingHorizontal: 10, 
                          backgroundColor: 'red',
                          borderRadius: 5, 
                          justifyContent: 'center',
                          alignItems: 'center', 
                        }}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>
                          Close
                        </Text>
                      </TouchableOpacity> */}

                      <View style={styles.multipleViewBox}>
                        <Text style={styles.label}>From</Text>

                        <Dropdown
                          style={[
                            styles.fromToFlightsMultiple,
                            isFocus && {borderColor: Color.primaryText},
                          ]}
                          placeholderStyle={styles.fromToFlightsText}
                          selectedTextStyle={styles.selectedTextContainer} // Container for custom selected item styling
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={locationData}
                          search
                          maxHeight={300}
                          labelField="shortName" // Still needed for internal logic
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
                          renderRightIcon={() => null} // Remove the arrow icon
                          renderItem={item => (
                            <View style={styles.itemContainer}>
                              <Text style={styles.shortCode}>
                                {item.shortName.split(' ')[0]}
                              </Text>
                              <Text style={styles.cityName}>
                                {item.shortName.split(' ').slice(1).join(' ')}
                              </Text>
                            </View>
                          )}
                          renderSelectedItem={item => (
                            <View style={styles.selectedItemContainer}>
                              <Text style={styles.shortCode}>
                                {item.shortName.split(' ')[0]}
                              </Text>
                              <Text style={styles.cityName}>
                                {item.shortName.split(' ').slice(1).join(' ')}
                              </Text>
                            </View>
                          )}
                        />
                      </View>
                      <View style={styles.multipleViewBox}>
                        <Text style={styles.label}>From</Text>

                        <Dropdown
                          style={[
                            styles.fromToFlightsMultiple,
                            isFocus && {borderColor: Color.primaryText},
                          ]}
                          placeholderStyle={styles.fromToFlightsText}
                          selectedTextStyle={styles.selectedTextContainer} // Container for custom selected item styling
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={locationData}
                          search
                          maxHeight={300}
                          labelField="shortName" // Still needed for internal logic
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
                          renderRightIcon={() => null} // Remove the arrow icon
                          renderItem={item => (
                            <View style={styles.itemContainer}>
                              <Text style={styles.shortCode}>
                                {item.shortName.split(' ')[0]}
                              </Text>
                              <Text style={styles.cityName}>
                                {item.shortName.split(' ').slice(1).join(' ')}
                              </Text>
                            </View>
                          )}
                          renderSelectedItem={item => (
                            <View style={styles.selectedItemContainer}>
                              <Text style={styles.shortCode}>
                                {item.shortName.split(' ')[0]}
                              </Text>
                              <Text style={styles.cityName}>
                                {item.shortName.split(' ').slice(1).join(' ')}
                              </Text>
                            </View>
                          )}
                        />
                      </View>
                      <View style={styles.multipleViewBox}>
                        <Text style={styles.label}>Date</Text>
                        <View style={styles.fromToFlightsMultiple}>
                          <TouchableOpacity
                            onPress={() => setIsCalendarVisible(true)}>
                            <Text style={styles.fromToFlightsText}>
                              {selectedDate ? (
                                <View>
                                  <Text style={styles.fromToFlightsText}>
                                    {formatDate(selectedDate).dayAndMonth}
                                  </Text>
                                  <Text
                                    style={styles.fromToFlightsTextSecondary}>
                                    {formatDate(selectedDate).weekdayAndYear}
                                  </Text>
                                </View>
                              ) : (
                                <Text style={styles.fromToFlightsText}>
                                  Select a date
                                </Text>
                              )}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        {isCalendarVisible && (
                          <Modal
                            transparent={true}
                            animationType="slide"
                            visible={isCalendarVisible}
                            onRequestClose={() => setIsCalendarVisible(false)} // Close modal on back button
                          >
                            <View style={styles.modalOverlay}>
                              <View style={styles.modalContent}>
                                <Calendar
                                  current={today}
                                  minDate={today}
                                  onDayPress={date => {
                                    handleDateSelect(date);
                                    setIsCalendarVisible(false); // Close modal after date selection
                                  }}
                                  markedDates={{
                                    [selectedDate]: {
                                      selected: true,
                                      selectedColor: Color.primaryText,
                                      selectedTextColor: 'white',
                                    },
                                  }}
                                  theme={{
                                    selectedDayBackgroundColor:
                                      Color.primaryText,
                                    selectedDayTextColor: 'white',
                                  }}
                                />
                                <TouchableOpacity
                                  style={styles.closeButton}
                                  onPress={() => setIsCalendarVisible(false)}>
                                  <Text style={styles.closeButtonText}>
                                    Close
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </Modal>
                        )}
                      </View>
                    </View>
                  ))}

                  <View>
                    <TouchableOpacity
                      style={styles.addMoreBtn}
                      onPress={handleAddCity}>
                      <Text style={styles.addMoreBtnText}>+ ADD CITY</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.travelClassView}>
                    <View style={styles.travelClassBox}>
                      <Text style={styles.label}>Traveller</Text>
                      <View style={styles.fromToFlights}>
                        <Text style={styles.fromToFlightsText}>1 Adult</Text>
                      </View>
                    </View>
                    <View style={styles.travelClassBox}>
                      <Text style={styles.label}>Class</Text>
                      <View style={styles.fromToFlights}>
                        <Text style={styles.fromToFlightsText}>Economy</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.discountView}>
                    <Text style={styles.discountTitle}>
                      Special Fares (Optional)
                    </Text>
                    <View style={styles.discountDetails}>
                      <TouchableOpacity style={styles.discountBox}>
                        <Text style={styles.discountBoxName}>Student</Text>
                        <Text style={styles.discountText}>
                          Extra discounts/baggage
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.discountBox}>
                        <Text style={styles.discountBoxName}>Armed Forces</Text>
                        <Text style={styles.discountText}>Up to ₹ 600 off</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.discountBox}>
                        <Text style={styles.discountBoxName}>
                          Senior Citizen
                        </Text>
                        <Text style={styles.discountText}>Up to ₹ 600 off</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <SubmitBtn buttonText="Search Flights" onPress={()=>{
                    navigation.navigate("Multiple")
                  }}/>
                </View>
              )}
            </ScrollView>
            {/* </View> */}
          </View>
        </View>
      </View>
    </View>
   </SafeAreaView>
  );
};

export default SelectFilght;
