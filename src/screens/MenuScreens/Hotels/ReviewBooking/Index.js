import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import MenuHeader from '../../../../Components/MenuHeader/Index';
import {BACKICON, BREAKFAST, HOTEL5} from '../../../../Assets/Images/Index';
import {useNavigation} from '@react-navigation/native';
import InputBox from '../../../../Components/InputBox/Index';
import Color from '../../../../Theme/Color';

const ReviewBooking = () => {
  const [isChecked, setIsChecked] = useState(false);

  const navigation = useNavigation();
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
          authTitle="Review Booking"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 250}}>
          <View style={styles.reviewHotel}>
            <View style={styles.reviewHotelName}>
              <View>
                <Text style={styles.hotelName}>
                  Kans One Hotel And Banquets
                </Text>
                <Text style={styles.hotelLocation}>Pallavaram, Chennai</Text>
              </View>
              <Image style={styles.hotelImg} source={HOTEL5} />
            </View>
            <View style={styles.borderSperation}></View>
            <View style={styles.reviewHotelName}>
              <View>
                <Text style={styles.hotelChekInOut}>CHECK-IN</Text>
                <View style={styles.hotelChekInOutDate}>
                  <Text style={styles.hotelChekInOutText}>16 Nov</Text>
                  <Text style={styles.hotelChekInOut}>2024, SAT</Text>
                </View>
                <Text style={styles.hotelChekInOut}>1 PM</Text>
              </View>
              <View style={styles.hotelType}>
                <Text style={styles.hotelTypeText}>1 Night</Text>
              </View>
              <View>
                <Text style={styles.hotelChekInOut}>CHECK-OUT</Text>
                <View style={styles.hotelChekInOutDate}>
                  <Text style={styles.hotelChekInOutText}>17 Nov</Text>
                  <Text style={styles.hotelChekInOut}>2024, SAT</Text>
                </View>
                <Text style={styles.hotelChekInOut}>1 PM</Text>
              </View>
            </View>
            <View style={styles.borderSperation}></View>
            <View style={styles.reviewGuests}>
              <Text style={styles.guestsName}>Guests & Rooms</Text>
              <View style={styles.guestsType}>
                <Text style={styles.guestsTypeText}>1 Adult</Text>
                <View style={styles.guestsDotsView}>
                  <View style={styles.guestsDots}></View>
                  <Text style={styles.guestsTypeText}>1 Room </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.reviewHotel}>
            <View style={styles.reviewBox}>
              <Text style={styles.hotelName}>Trip Room</Text>
              <View style={styles.roomBoxDetails}>
                <View style={styles.roomOption}>
                  <View style={styles.breakfastView}>
                    <View style={styles.roomNameDots}></View>
                  </View>
                  <Text style={styles.roomOptionText}>Room with Breakfast</Text>
                </View>
                <View style={styles.roomOption}>
                  <View style={styles.breakfastView}>
                    <Image style={styles.optionIconBad} source={BREAKFAST} />
                  </View>
                  <Text style={styles.roomOptionText}>
                    Complimentary Breakfast
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.borderSperation}></View>
            <View style={styles.reviewBox}>
              <Text style={styles.termText}>
                Refund is not applicable for this booking
              </Text>
              <Text style={styles.termText}>Non-Refundable</Text>
              <TouchableOpacity style={styles.allDetails}>
                <Text style={styles.allDetailsText}>See All Details</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.reviewHotel}>
            <View style={styles.reviewBox}>
              <View style={styles.recommendedView}>
                <Text style={styles.hotelNameText}>Addons</Text>
                <View style={styles.recommendedBtn}>
                  <Text style={styles.recommendedText}>RECOMMENDED</Text>
                </View>
              </View>
              <Text style={styles.textText}>Inclusive of Taxes</Text>
              <View style={styles.selectionView}>
                <View style={styles.selectionDetails}>
                  <View style={styles.selectionIcon}></View>
                  <Text style={styles.selectionText}>
                    Add Lunch/Dinner for ₹30 for all guests
                  </Text>
                </View>
                <View style={styles.selectionDetails}>
                  <View style={styles.selectionIcon}></View>
                  <Text style={styles.selectionText}>
                    Add All Meals for ₹30 for all guests
                  </Text>
                </View>
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
          <View style={styles.reviewHotel}>
            <View style={styles.reviewBox}>
              <Text style={styles.hotelName}>Price Breakup</Text>
              <View style={styles.calculationView}>
                <View>
                  <Text style={styles.calculationText}>1 Room 1 night</Text>
                  <Text style={styles.calculationText}>Base Price</Text>
                </View>
                <View>
                  <Text style={styles.calculationPrice}>₹ 400</Text>
                </View>
              </View>
              <View style={styles.borderSperation}></View>
              <View style={styles.calculationView}>
                <View>
                  <Text style={styles.calculationText}>Total Discount</Text>
                </View>
                <View>
                  <Text style={styles.calculationPriceSmall}>₹ 400</Text>
                </View>
              </View>
              <View style={styles.borderSperation}></View>
              <View style={styles.calculationView}>
                <View>
                  <Text style={styles.calculationText}>
                    Price after Discount
                  </Text>
                </View>
                <View>
                  <Text style={styles.calculationPriceSmall}>₹ 400</Text>
                </View>
              </View>
              <View style={styles.borderSperation}></View>
              <View style={styles.calculationView}>
                <View>
                  <Text style={styles.calculationText}>Taxes & Service</Text>
                </View>
                <View>
                  <Text style={styles.calculationPriceSmall}>₹ 400</Text>
                </View>
              </View>
              <View style={styles.borderSperation}></View>
              <View style={styles.calculationView}>
                <View>
                  <Text style={styles.calculationTextTotal}>
                    Total Amount paid
                  </Text>
                </View>
                <View>
                  <Text style={styles.calculationPrice}>₹ 400</Text>
                </View>
              </View>
              <View style={styles.borderSperation}></View>
            </View>
          </View>
          <View style={styles.reviewHotel}>
            <View style={styles.reviewBox}>
              <Text style={styles.hotelName}>Price Breakup</Text>
              <View style={styles.selectionOption}>
                <View style={styles.selectionDetails}>
                  <View style={styles.selectionIcon}></View>
                  <Text style={styles.selectionOptionText}>Myself</Text>
                </View>
                <View style={styles.selectionDetails}>
                  <View style={styles.selectionIcon}></View>
                  <Text style={styles.selectionOptionText}>Someone Else</Text>
                </View>
              </View>
              <View style={styles.inputView}>
                <InputBox placeholderText="First Name" />
                <InputBox placeholderText="Last Name" />
                <InputBox placeholderText="Last Name" />
                <InputBox placeholderText="Email ID" />
                <InputBox placeholderText="Contact Number" />
              </View>
              <View style={styles.gstSection}>
                <TouchableOpacity
                  style={[styles.checkbox, isChecked && styles.checkedBox]}
                  onPress={() => setIsChecked(!isChecked)}>
                  {isChecked && <Text style={styles.checkmark}>✓</Text>}
                </TouchableOpacity>
                <Text style={styles.gstText}>
                  I have a GST number{' '}
                  <Text style={[styles.gstText, {color: Color.verifyTitle}]}>
                    (Optional)
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.seeMoreDetailsView}>
                <View style={styles.termsView}>
                  <TouchableOpacity
                    style={[styles.checkbox, isChecked && styles.checkedBox]}
                    onPress={() => setIsChecked(!isChecked)}>
                    {isChecked && <Text style={styles.checkmark}>✓</Text>}
                  </TouchableOpacity>
                  <Text style={styles.termsText}>
                    I understand and agree with the{' '}
                    <Text
                      style={[
                        styles.termsText,
                        {color: Color.buttonBackgound},
                      ]}>
                      Fare Rules
                    </Text>
                    , the <Text>Privacy Policy</Text>, the{' '}
                    <Text
                      style={[
                        styles.termsText,
                        {color: Color.buttonBackgound},
                      ]}>
                      User Agreement
                    </Text>{' '}
                    and{' '}
                    <Text
                      style={[
                        styles.termsText,
                        {color: Color.buttonBackgound},
                      ]}>
                      Term Service
                    </Text>
                  </Text>
                </View>
              </View>
        </ScrollView>
      </View>
      <View style={styles.paymentView}>
            <View>
              <Text style={styles.paymentAmount}>₹ 300</Text>
              <Text style={styles.paymentInfo}>+ ₹ 463 taxes & fees</Text>
              <Text style={styles.paymentInfo}>per night</Text>
            </View>
            <TouchableOpacity
              style={styles.paymentBtn}
              onPress={() => navigation.navigate('HotelPayment')}>
              <Text style={styles.paymentBtnText}>Procced</Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
};

export default ReviewBooking;