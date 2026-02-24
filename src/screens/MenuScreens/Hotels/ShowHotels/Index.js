import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './style';
import {
  ARROWDOWNMIN,
  DISCOUNT,
  DISCOUNTHOTEL,
  FILTER,
  HEART,
  HOTELBANNER,
  TRUEICON,
  TRUEICONS,
} from '../../../../Assets/Images/Index';
import FlightHeader from '../../../../Components/FlightHeader/Index';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ShowHotels = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    Rating: 'Rating',
    Popular: 'Popular',
    Price: 'Price',
  });

  const dropdownData = {
    Rating: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    Popular: ['Most Booked', 'Highly Reviewed', 'Trending'],
    Price: ['Low to High', 'High to Low', 'Budget-Friendly'],
  };

  const handleSelect = (key, value) => {
    setSelectedFilters(prev => ({...prev, [key]: value}));
    setActiveDropdown(null); // Close the dropdown
  };

  const navigation = useNavigation();
  const renderDropdown = key => (
    <View style={[styles.dropdownContainer]}>
    <View style={styles.dropdown}>
      <FlatList
        data={dropdownData[key]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => handleSelect(key, item)}
          >
            <Text style={styles.dropdownText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  </View>
  );

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.container}>
        <FlightHeader />
        <View style={styles.hotelMenuView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.hotelMenuBox}>
              <Text style={styles.hotelMenuText}>All Filters</Text>
              <Image source={FILTER} />
            </TouchableOpacity>
            {['Rating', 'Popular', 'Price'].map(key => (
              <View key={key} style={styles.filterWrapper}>
                <TouchableOpacity
                  style={styles.hotelMenuBox}
                  onPress={() =>
                    setActiveDropdown(prev => (prev === key ? null : key))
                  }>
                  <Text style={styles.hotelMenuText}>
                    {selectedFilters[key]}
                  </Text>
                  <Image source={ARROWDOWNMIN} />
                </TouchableOpacity>
                {activeDropdown === key && renderDropdown(key)}
              </View>
            ))}
          </ScrollView>
          <ScrollView style={{zIndex:15}}>
            <TouchableOpacity
              style={styles.hotelDetails}
              onPress={() => {
                navigation.navigate('SelectRoom');
              }}>
              <View>
                <Image source={HOTELBANNER} />
                <TouchableOpacity style={styles.wishIcon}>
                  <LinearGradient
                    colors={[
                      'rgba(222, 214, 211, 0.7)',
                      'rgba(122, 111, 107, 0.7)',
                      'rgba(202, 181, 181, 0.7)',
                    ]}
                    style={styles.gradientBackground}>
                    <Image style={styles.icon} source={HEART} />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={styles.hotelInfo}>
                <View style={styles.hotelRating}>
                  <View style={styles.ratingBox}>
                    <Text style={styles.ratingText}>4.1</Text>
                  </View>
                  <Text style={styles.ratingName}>Very Good</Text>
                  <Text style={styles.totalRating}>(257 Ratings)</Text>
                </View>
                <View style={styles.hotelNew}>
                  <Text style={styles.hotelNewText}>Newly Built</Text>
                </View>
              </View>
              <View style={styles.hotelInfoDetails}>
                <Text style={styles.hotelName}>Kans One Hotel</Text>
                <Text style={styles.hotelAddress}>
                  Pallavaram | 2.6 km drive to Chennai Airport
                </Text>
                <View style={styles.hotelType}>
                  <View style={styles.hotelTypeBox}>
                    <Text style={styles.hotelTypeText}>Restaurant</Text>
                  </View>
                  <View style={styles.hotelAds}>
                    <Text style={styles.hotelAdsText}>Last Minute Deal</Text>
                  </View>
                </View>
              </View>
              <View style={styles.hotelPrices}>
                <View style={styles.menuItems}>
                  <Image style={styles.trueIcon} source={TRUEICONS} />
                  <Text style={styles.itemText}>Breafast lncluded</Text>
                </View>
                <View style={styles.priceDetials}>
                  <Text style={styles.mainPrice}>₹ 289</Text>
                  <Text style={styles.priceOption}>+ ₹ 42 taxes & fees</Text>
                  <Text style={styles.priceOption}>Per Night</Text>
                </View>
              </View>
              <View style={styles.discountView}>
                <Image source={DISCOUNTHOTEL} />
                <Text style={styles.discountText}>
                  Flat 25% off on Your Booking! Get off!
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShowHotels;
