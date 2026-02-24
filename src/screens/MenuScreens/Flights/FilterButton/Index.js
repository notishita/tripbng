import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './style';

const FilterScreen = ({ navigation }) => {
  // State for selected filters
  const [stop, setStop] = useState(0);
  const [departure, setDeparture] = useState(0);
  const [arrival, setArrival] = useState(0);
  const [airline, setAirline] = useState(0);
  const [baggage, setBaggage] = useState(true);
  const [nearby, setNearby] = useState(false);
  const [refundable, setRefundable] = useState(false);
  const [airport, setAirport] = useState(0);

  // Mock airline logos (replace with actual images)
  const airlineLogos = [
    require('../../../../Assets/Images/Icons/AirIndia.png'), // 0
    require('../../../../Assets/Images/Icons/AirIndiaExpress.png'), // 1
    require('../../../../Assets/Images/Icons/AkasaAirlogo.png'), // 2
    require('../../../../Assets/Images/Icons/IndiGo.png'), // 3
    require('../../../../Assets/Images/Icons/spicejet.png'), // 4
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>{'←'}</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Filters</Text>
          <Text style={styles.headerSubtitle}>100 out of 100 results</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        {/* Stops */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Stops From New Delhi</Text>
          <View style={styles.row}>
            {[
              '0 Non Stops\n₹ 4,555',
              '1 Stop\n₹ 4,400',
              '2 Non Stops\n₹ 4,555',
            ].map((item, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.optionBtn, stop === i && styles.selectedOption]}
                onPress={() => setStop(i)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.optionText,
                    stop === i && styles.selectedOptionText,
                  ]}
                >
                  {item.split('\n')[0].split(' ')[0]}
                  <Text style={styles.optionLabel}> {item.split(' ')[1]}</Text>
                  {'\n'}
                  <Text style={styles.optionPrice}>{item.split('\n')[1]}</Text>
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Departure */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Departure From New Delhi</Text>
          <View style={styles.row}>
            {[
              { label: 'Before 6AM', price: '₹ 4,220' },
              { label: '6AM–12 Noon', price: '₹ 4,100' },
              { label: '12 Noon–6PM', price: '₹ 3,900' },
              { label: 'After 6PM', price: '₹ 4,700' },
            ].map((item, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.optionBtn,
                  departure === i && styles.selectedOption,
                ]}
                onPress={() => setDeparture(i)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.optionText,
                    departure === i && styles.selectedOptionText,
                  ]}
                >
                  {item.label}
                  {'\n'}
                  <Text style={styles.optionPrice}>{item.price}</Text>
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Arrival */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Arrival at Mumbai</Text>
          <View style={styles.row}>
            {[
              { label: 'Before 6AM', price: '₹ 4,220' },
              { label: '6AM–12 Noon', price: '₹ 4,100' },
              { label: '12 Noon–6PM', price: '₹ 3,900' },
              { label: 'After 6PM', price: '₹ 4,700' },
            ].map((item, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.optionBtn,
                  arrival === i && styles.selectedOption,
                ]}
                onPress={() => setArrival(i)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.optionText,
                    arrival === i && styles.selectedOptionText,
                  ]}
                >
                  {item.label}
                  {'\n'}
                  <Text style={styles.optionPrice}>{item.price}</Text>
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Airlines */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Airlines</Text>
          <View style={styles.row}>
            {[0, 1].map(i => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.airlineBtn,
                  airline === i && styles.selectedAirline,
                ]}
                onPress={() => setAirline(i)}
                activeOpacity={0.8}
              >
                <Image
                  source={airlineLogos[i]}
                  style={styles.airlineLogo}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {[2, 3, 4].map(i => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.airlineBtn,
                  airline === i && styles.selectedAirline,
                ]}
                onPress={() => setAirline(i)}
                activeOpacity={0.8}
              >
                <Image
                  source={airlineLogos[i]}
                  style={styles.airlineLogo}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Other Filters */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other popular filters</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.optionBtn, baggage && styles.selectedOption]}
              onPress={() => setBaggage(v => !v)}
            >
              <Text
                style={[
                  styles.optionText,
                  baggage && styles.selectedOptionText,
                ]}
              >
                Checked-in Baggage
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.optionBtn, nearby && styles.selectedOption]}
              onPress={() => setNearby(v => !v)}
            >
              <Text
                style={[styles.optionText, nearby && styles.selectedOptionText]}
              >
                Hide Nearby Airports
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.optionBtn, refundable && styles.selectedOption]}
              onPress={() => setRefundable(v => !v)}
            >
              <Text
                style={[
                  styles.optionText,
                  refundable && styles.selectedOptionText,
                ]}
              >
                Refundable Fares
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Departure Airports */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Departure Airports</Text>
          <View style={styles.row}>
            {['Indira Gandhi International Airport', 'Hindon Airport'].map(
              (label, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.optionBtn,
                    airport === i && styles.selectedOption,
                  ]}
                  onPress={() => setAirport(i)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      airport === i && styles.selectedOptionText,
                      airport === 0 && i === 0 && { color: '#F49B24' },
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ),
            )}
          </View>
        </View>
        {/* Apply Button */}
        <TouchableOpacity
          style={styles.applyBtn}
          onPress={() => navigation.navigate('FlightBookDetails')}
        >
          <Text style={styles.applyBtnText}>Apply</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterScreen;
