import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './style';
import MenuHeader from '../../../../Components/MenuHeader/Index';
import {
  BACKICON,
  DATE,
  HEARTBLACK,
  HOTEL1,
  HOTEL2,
  HOTEL3,
  HOTEL4,
  HOTEL5,
  HOTELLOCATION,
  PROFILEICON,
  RESTAURANT,
  RIGHTICON,
  SEACRHICON,
  SHARE,
  WORLDMAP,
} from '../../../../Assets/Images/Index';
import DashedLine from '../../../../Components/DashedLine/Index';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HotelDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.container}>
        <View style={styles.headerIcons}>
          <MenuHeader
            backImg={BACKICON}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View style={styles.headerOptionIcons}>
            <TouchableOpacity>
              <Image source={SEACRHICON} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={SHARE} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={HEARTBLACK} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 150}}>
          <View style={styles.hotelRoomView}>
            <View>
              <Image source={HOTEL1} style={styles.mainImg} />
            </View>
            <View style={{gap: 5}}>
              <View style={styles.smallRooms}>
                <Image source={HOTEL2} style={styles.image} />
                <Image source={HOTEL3} style={styles.imageTop} />
              </View>
              <View style={styles.smallRooms}>
                <Image source={HOTEL4} style={styles.image} />
                <Image source={HOTEL5} style={styles.imageLast} />
              </View>
            </View>
          </View>
          <View style={styles.hotelDetailsBox}>
            <View style={styles.hotelDetailsInfo}>
              <Text style={styles.hotelName}>Kans One Hotel</Text>
              <View style={styles.hotelDetails}>
                <View style={styles.hotelRating}>
                  <View style={styles.ratingBox}>
                    <Text style={styles.ratingText}>4.1</Text>
                  </View>
                  <View>
                    <Text style={styles.ratingName}>
                      Very Good{' '}
                      <Text style={styles.ratingNameSmall}>(257 Ratings)</Text>
                    </Text>
                    <Text>77% guests rated this property...</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Image source={RIGHTICON} />
                </TouchableOpacity>
              </View>
              <View style={styles.hotelDetails}>
                <View style={styles.hotelRating}>
                  <View style={styles.locationBox}>
                    <Image source={HOTELLOCATION} />
                  </View>
                  <View>
                    <Text style={styles.locationName}>Pallavaram, Chennai</Text>
                    <Text>77% guests rated this property...</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Image source={RIGHTICON} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.borderSperation}></View>

            <View style={styles.hotelDetailsInfo}>
              <Text style={styles.hotelNameTravel}>Travel Dates & Guests</Text>
              <View style={styles.checkInOut}>
                <View style={styles.checkInOutInfo}>
                  <View style={styles.checkInOutDots}></View>
                  <Text style={styles.checkInOutText}>Check-In: 1 PM</Text>
                </View>
                <View style={styles.checkInOutInfo}>
                  <View style={styles.checkInOutDots}></View>
                  <Text style={styles.checkInOutText}>Check-Out: 1 PM</Text>
                </View>
              </View>
              <View style={styles.datePersonView}>
                <View style={styles.datePerson}>
                  <Image source={DATE} />
                  <Text style={styles.datePersonText}>15 Nov - 16 Nov</Text>
                </View>
                <View style={styles.datePerson}>
                  <Image source={PROFILEICON} />
                  <Text style={styles.datePersonText}>1 Guest/1 room</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.hotelDetailsBox}>
            <View style={styles.hotelDetailsInfo}>
              <Text style={styles.hotelNameTravel}>About This Property</Text>
              <Text style={styles.hotelDesc}>
                KANS ONE located in Pallavaram is located a just a minute away
                form.......
              </Text>
              <TouchableOpacity style={styles.viewAll}>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.borderSperation}></View>

            <View style={styles.hotelDetailsInfo}>
              <Text style={styles.hotelNameTravel}>Amenities</Text>
              <View style={styles.restaurantView}>
                <Image style={styles.restaurantIcon} source={RESTAURANT} />
                <Text style={styles.restaurantText}>Restaurant</Text>
              </View>
            </View>
          </View>
          <View style={styles.hotelDetailsBox}>
            <View style={styles.hotelDetailsInfo}>
              <Text style={styles.hotelNameTravel}>About This Property</Text>
              <View style={styles.ratingHotel}>
                <View style={styles.ratingView}>
                  <Text style={styles.ratingTextHotel}>4.1</Text>
                </View>
                <View>
                  <Text style={styles.ratingType}>Very Good</Text>
                  <Text>97 User Reviews & 257 Ratings</Text>
                </View>
              </View>
              <View style={styles.ratingScoreView}>
                <Text style={styles.ratingScore}>Rating Score Card</Text>
                <View style={styles.ratingCard}>
                  <View style={styles.ratingCardBox}>
                    <Text style={styles.ratingCardRate}>4.3</Text>
                    <Text style={styles.ratingCardType}>Location</Text>
                  </View>
                  <View style={styles.ratingCardBox}>
                    <Text style={styles.ratingCardRate}>4.3</Text>
                    <Text style={styles.ratingCardType}>Cleanliness</Text>
                  </View>
                  <View style={styles.ratingCardBox}>
                    <Text style={styles.ratingCardRate}>4.3</Text>
                    <Text style={styles.ratingCardType}>Food</Text>
                  </View>
                  <View style={styles.ratingCardBox}>
                    <Text style={styles.ratingCardRate}>4.3</Text>
                    <Text style={styles.ratingCardType}>Value</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.borderSperation}></View>
            <View style={styles.hotelDetailsInfo}>
              <Text style={styles.hotelNameTravel}>Guest Reviews</Text>
              <View style={styles.customerReview}>
                <View style={styles.customerReviewDetails}>
                  <View>
                    <Text style={styles.customerReviewText}>Good Stay</Text>

                    <View style={styles.ratingDateView}>
                      <Text style={styles.customerName}>Kaushal P</Text>
                      <View style={styles.checkInOutDotsView}>
                        <View style={styles.customerDots}></View>
                        <Text style={styles.customerName}>Nov 10, 2024</Text>
                      </View>
                    </View>
                    <Text style={styles.customerReviewDesc}>
                      Good location nice hotel to stay ambiance good staff also
                      good it over all{' '}
                    </Text>
                  </View>
                  <View style={styles.customerRating}>
                    <Text style={styles.customerRatingText}>4.0</Text>
                  </View>
                </View>
              </View>
              <View style={styles.customerReview}>
                <View style={styles.customerReviewDetails}>
                  <View>
                    <Text style={styles.customerReviewText}>Good Stay</Text>

                    <View style={styles.ratingDateView}>
                      <Text style={styles.customerName}>Kaushal P</Text>
                      <View style={styles.checkInOutDotsView}>
                        <View style={styles.customerDots}></View>
                        <Text style={styles.customerName}>Nov 10, 2024</Text>
                      </View>
                    </View>
                    <Text style={styles.customerReviewDesc}>
                      Good location nice hotel to stay ambiance good staff also
                      good it over all{' '}
                    </Text>
                  </View>
                  <View style={styles.customerRating}>
                    <Text style={styles.customerRatingText}>4.0</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.allReview}>
                <Text style={styles.allReviewText}>Read All 97 Reviews</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.hotelDetailsBox}>
            <View style={styles.hotelDetailsInfo}>
              <Text style={styles.hotelNameTravel}>Location</Text>
              <View style={styles.addressView}>
                <Text style={styles.addressLabel}>
                  Address:{' '}
                  <Text style={styles.addressDesc}>
                    V.MUTHUKRISHNAN Sf No. 351/14 D.No.8/100, Santhai Road
                    Pallavaram 2.6 km drive to Chennai
                  </Text>
                </Text>
                <Image style={styles.mapImg} source={WORLDMAP} />
              </View>
            </View>
          </View>
          <View style={styles.hotelDetailsBox}>
            <View style={styles.hotelDetailsInfo}>
              <Text style={styles.hotelNameTravel}>
                Property Rules & Information
              </Text>
              <View style={styles.ruleList}>
                <View style={styles.rulesDots}></View>
                <Text style={styles.ruleText}>
                  Unmarried couples are not allowed
                </Text>
              </View>
              <View style={styles.ruleList}>
                <View style={styles.rulesDots}></View>
                <Text style={styles.ruleText}>
                  Guests below 18 years of age are not allowed at the property.
                </Text>
              </View>
              <View style={styles.ruleList}>
                <View style={styles.rulesDots}></View>
                <Text style={styles.ruleText}>
                  Guests below 18 years of age are not allowed at the property.
                </Text>
              </View>
              <TouchableOpacity style={styles.allReview}>
                <Text style={styles.allReviewText}>Read All 97 Reviews</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HotelDetails;
