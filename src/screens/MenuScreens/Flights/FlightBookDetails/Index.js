import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import AuthTitle from '../../../../Components/AuthTitle/Index';
import {
  AIRWAY,
  ARROWDOWN,
  BACKICON,
  DISCOUNT,
  INFO,
  LEFTARROW,
  RIGHTICON,
  SEEMORE1,
  SEEMORE2,
  SHARE,
} from '../../../../Assets/Images/Index';
import Color from '../../../../Theme/Color';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FlightBookDetails = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation();

  const handlePayment = () => {
    setIsModalVisible(false);
    navigation.navigate('FlightSeats');
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.container}>
        <AuthTitle
          backImg={LEFTARROW}
          authTitle="Trip to Da Nang"
          rightIcon={SHARE}
          onPress={() => {
            navigation.navigate('OneWay');
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <View style={styles.bookFlightInfo}>
            <Image source={AIRWAY} />
            <View style={{ flexDirection: 'column', gap: 2 }}>
              <Text style={styles.bookFlightName}>Hanoi - Da Nang</Text>
              <Text style={styles.bookFlightDate}>
                Fri, 15 Now | 19:00 - 21:15 | 2h 15m | Non Stop{' '}
              </Text>
              <Text style={styles.bookFlightClass}>Economy {'>'} SAVER</Text>
            </View>
          </View>
          <View style={styles.viewFlightBtn}>
            <Text style={styles.viewFlightBtnText}>
              VIEW FLIGHT & FARE DETAILS
            </Text>
          </View>
          <View style={styles.seeMoreDetailsView}>
            <View style={styles.seeMoreDetails}>
              <View>
                <Text style={styles.seeDetailsTitle}>Saver</Text>
              </View>
            </View>
            <View style={styles.seeMoreInfoView}>
              <View style={styles.seeMoreInfo}>
                <View style={styles.seemMoreIncon}>
                  <Image source={SEEMORE2} />
                  <Text style={styles.seeMoreIconText}>Cabin bag</Text>
                </View>
                <Text style={styles.seeMoreIconText}>7 Kgs (1 Piece only)</Text>
              </View>
              <View style={styles.seeMoreInfo}>
                <View style={styles.seemMoreIncon}>
                  <Image source={SEEMORE1} />
                  <Text style={styles.seeMoreIconText}>Check-in </Text>
                </View>
                <Text style={styles.seeMoreIconText}>
                  15 Kgs (1 piece only)
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.seeMoreDetailsView}>
            <View style={styles.seeMoreDetails}>
              <View>
                <Text style={styles.seeDetailsTitle}>
                  Cancellation Refund Policy
                </Text>
              </View>
            </View>
            <View style={styles.bookFlightDateTimeTitle}>
              <Text style={styles.bookFlightDateTimeText}>
                Cancel Between(IST):
              </Text>
              <Text style={styles.bookFlightDateTimeText}>
                Cancellation Penalty :
              </Text>
            </View>
            <View style={styles.bookFlightPriceView}>
              <View style={styles.bookFlightDateTime}>
                <Text style={styles.bookFlightDateText}>15 Now - 15 Now, </Text>
                <Text style={styles.bookFlightTimeText}>17:00</Text>
              </View>
              <View>
                <Text style={styles.bookFlightDateText}>₹300</Text>
              </View>
            </View>
            <View style={styles.borderLine}></View>
            <View style={styles.bookFlightPriceView}>
              <View style={styles.bookFlightDateTime}>
                <Text style={styles.bookFlightDateText}>15 Now - 15 Now, </Text>
                <Text style={styles.bookFlightTimeText}>17:00</Text>
              </View>
              <View>
                <Text style={styles.bookFlightDateText}>₹300</Text>
              </View>
            </View>
          </View>
          <View style={styles.seeMoreDetailsView}>
            <View style={styles.seeMoreDetails}>
              <View>
                <Text style={styles.seeDetailsTitle}>
                  Important Information
                </Text>
              </View>
            </View>
            <View style={styles.infoView}>
              <View style={styles.infoBoxDetails}>
                <View style={styles.infoBox}>
                  <View style={styles.infoIcon}>
                    <Image style={styles.infoIconImg} source={INFO} />
                  </View>
                  <Text style={styles.infoDesc}>
                    Check travel guidelines and baggage information below:
                  </Text>
                </View>
                <View style={styles.infoListView}>
                  <View style={styles.dotView}></View>
                  <Text style={styles.infoDescList}>
                    Carry no more than 1 chaeck - in baggage and 1 hand baggage
                    per
                  </Text>
                </View>
              </View>
              <View style={styles.infoBoxDetails}>
                <View style={styles.infoBox}>
                  <View style={styles.infoIcon}>
                    <Image style={styles.infoIconImg} source={INFO} />
                  </View>
                  <Text style={styles.infoDesc}>
                    Check travel guidelines and baggage information below:
                  </Text>
                </View>
                <View style={styles.infoListView}>
                  <View style={styles.dotView}></View>
                  <Text style={styles.infoDescList}>
                    Carry no more than 1 chaeck - in baggage and 1 hand baggage
                    per{' '}
                  </Text>
                </View>
                <View style={styles.infoListView}>
                  <View style={styles.dotView}></View>
                  <Text style={styles.infoDescList}>
                    Carry no more than 1 chaeck - in baggage and 1 hand baggage
                    per{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.seeMoreDetailsView}>
            <View style={styles.seeMoreDetails}>
              <View style={styles.seeDetailsHeader}>
                <Image style={styles.discountIcon} source={DISCOUNT} />
                <View>
                  <Text style={styles.seeDetailsTitle}>
                    Offers & Promo Codes
                  </Text>
                  <Text style={styles.seeDetailsDesc}>
                    To help you save more
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image source={RIGHTICON} />
              </TouchableOpacity>
            </View>
            <View style={styles.textBoxDetails}>
              <TextInput
                style={styles.inputBox}
                placeholder="Enter promo code"
                placeholderTextColor="#B6B7BD"
              />
              <Text style={styles.applyText}>APPLY</Text>
            </View>
            <TouchableOpacity style={styles.couponBtn}>
              <Text style={styles.couponBtnText}>VIEW COUPONS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bookingDetails}>
            {/* Traveller Details Section */}
            <View style={styles.section}>
              <View style={styles.sectionTitle}>
                <Text style={styles.seeDetailsTitle}>Traveller Details</Text>
              </View>
              <View style={styles.row}>
                <View style={styles.iconWrapper}>
                  <Image
                    source={require('../../../../Assets/Images/Icons/AdultNew.png')}
                    style={styles.icon}
                  />
                </View>
                <Text style={styles.title}>ADULT (12 yrs+)</Text>
                <Text style={styles.subTitle}>
                  0/1 <Text style={styles.subTitleAdd}>added</Text>
                </Text>
              </View>

              <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddAdult')}
              >
                <Text style={styles.addButtonText}>+ADD NEW ADULT</Text>
              </TouchableOpacity>

              {/* Child Add Details */}
              <View style={styles.row}>
                <View style={styles.iconWrapper}>
                  <Image
                    source={require('../../../../Assets/Images/Icons/AdultNew.png')}
                    style={styles.icon}
                  />
                </View>
                <Text style={styles.title}>CHILD (2-12 yrs)</Text>
                <Text style={styles.subTitle}>
                  0/1 <Text style={styles.subTitleAdd}>added</Text>
                </Text>
              </View>

              <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddChild')}
              >
                <Text style={styles.addButtonText}>+ADD NEW CHILD</Text>
              </TouchableOpacity>

              {/* Instant Add Details */}
              <View style={styles.row}>
                <View style={styles.iconWrapper}>
                  <Image
                    source={require('../../../../Assets/Images/Icons/AdultNew.png')}
                    style={styles.icon}
                  />
                </View>
                <Text style={styles.title}>INFANT (15 days-2 yrs)</Text>
                <Text style={styles.subTitle}>
                  0/1 <Text style={styles.subTitleAdd}>added</Text>
                </Text>
              </View>

              <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddInstant')}
              >
                <Text style={styles.addButtonText}>+ADD NEW INFANT</Text>
              </TouchableOpacity>
            </View>

            {/* Booking Details Section */}
            <View style={styles.section}>
              <View style={styles.bookingIconView}>
                <Text style={styles.sectionTitle}>
                  Booking details will be sent to
                </Text>
                <TouchableOpacity>
                  <Image source={RIGHTICON} />
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <View style={styles.iconWrapper}>
                  <Text style={styles.iconText}>@</Text>
                </View>
                <Text style={styles.infoText}>Add Email ID</Text>
              </View>
              <View style={styles.row}>
                <View style={styles.iconWrapper}>
                  <Text style={styles.iconText}>📱</Text>
                </View>
                <Text style={[styles.infoText, { color: Color.black }]}>
                  +91-9664777539
                </Text>
              </View>
            </View>

            <View style={styles.gstSection}>
              <TouchableOpacity
                style={[styles.checkbox, isChecked && styles.checkedBox]}
                onPress={() => setIsChecked(!isChecked)}
              >
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>
              <Text style={styles.gstText}>
                I have a GST number{' '}
                <Text style={[styles.gstText, { color: Color.verifyTitle }]}>
                  (Optional)
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.seeMoreDetailsView}>
            <View style={styles.seeMoreDetails}>
              <View style={styles.editView}>
                <View>
                  <Text style={styles.seeDetailsTitle}>Your State</Text>
                  <Text style={styles.seeDetailsDescText}>
                    Required for GST purpose on your tax invoice
                  </Text>
                </View>
                <TouchableOpacity style={styles.editIconBtn}>
                  <Text style={styles.editIconBtnText}>Edit</Text>
                  <Image style={styles.editIconBtnImg} source={ARROWDOWN} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.stateName}>Chandigarh</Text>
            <View style={[styles.gstSection, { padding: 0 }]}>
              <TouchableOpacity
                style={[styles.checkbox, isChecked && styles.checkedBox]}
                onPress={() => setIsChecked(!isChecked)}
              >
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>
              <Text style={styles.gstText}>
                Confirm and save these details to your profile
              </Text>
            </View>
          </View>
          <View style={styles.seeMoreDetailsView}>
            <View style={styles.termsView}>
              <TouchableOpacity
                style={[styles.checkbox, isChecked && styles.checkedBox]}
                onPress={() => setIsChecked(!isChecked)}
              >
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>
              <Text style={styles.termsText}>
                I understand and agree with the{' '}
                <Text
                  style={[styles.termsText, { color: Color.buttonBackgound }]}
                >
                  Fare Rules
                </Text>
                , the <Text>Privacy Policy</Text>, the{' '}
                <Text
                  style={[styles.termsText, { color: Color.buttonBackgound }]}
                >
                  User Agreement
                </Text>{' '}
                and{' '}
                <Text
                  style={[styles.termsText, { color: Color.buttonBackgound }]}
                >
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
          <Text style={styles.paymentInfo}>For 1 ADULT</Text>
        </View>
        <TouchableOpacity
          style={styles.paymentBtn}
          onPress={() => navigation.navigate('ReviewDeteils')}
        >
          <Text style={styles.paymentBtnText}>Procced</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Review Details</Text>
              <Text style={styles.modalText}>
                Please ensure that the spelling of your name and other deatils
                match your document/govt. ID, as these
              </Text>
              <View style={styles.modalInfoView}>
                <Text style={styles.personInfo}>ADULT 1</Text>
                <View style={styles.modalInfoDetails}>
                  <Text style={styles.modalInfoText}>
                    First & Middle Name :
                  </Text>
                  <Text style={styles.modalInfoDesc}>nal</Text>
                </View>
                <View style={styles.modalInfoDetails}>
                  <Text style={styles.modalInfoText}>Last Name :</Text>
                  <Text style={styles.modalInfoDesc}>tel</Text>
                </View>
                <View style={styles.modalInfoDetails}>
                  <Text style={styles.modalInfoText}>Gender :</Text>
                  <Text style={styles.modalInfoDesc}>male</Text>
                </View>
              </View>
              <View style={styles.modalBtnView}>
                <TouchableOpacity
                  style={styles.closeBtn}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Text style={styles.closeBtnText}>EDIT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeBtn}
                  onPress={() => {
                    handlePayment();
                  }}
                >
                  <Text style={styles.closeBtnText}>CONFIRM</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default FlightBookDetails;
