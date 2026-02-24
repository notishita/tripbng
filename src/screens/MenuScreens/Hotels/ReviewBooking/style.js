import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../../Theme/Color';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    padding: 15,
  },
  hotelImg: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  reviewHotel: {
    borderWidth: 2,
    borderColor: Color.borderAuth,
    borderRadius: 15,
    marginTop: 10,
  },
  reviewHotelName: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hotelName: {
    color: Color.black,
    fontSize: width * 0.045,
    fontWeight: '500',
    width: width * 0.5,
  },
  hotelNameText: {
    color: Color.black,
    fontSize: width * 0.045,
    fontWeight: '500',
    // width:width*0.5
  },
  borderSperation: {
    borderWidth: 1,
    borderColor: Color.borderAuth,
  },
  hotelLocation: {
    color: Color.verifyTitle,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  hotelChekInOutDate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  hotelChekInOut: {
    color: Color.verifyTitle,
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  hotelChekInOutText: {
    color: Color.shadeBlack,
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  hotelType: {
    borderWidth: 1,
    borderColor: Color.borderAuth,
    borderRadius: 50,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  hotelTypeText: {
    color: Color.shadeBlack,
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  guestsName: {
    color: Color.verifyTitle,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  reviewGuests: {
    padding: 15,
  },
  guestsTypeText: {
    color: Color.shadeBlack,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  guestsDots: {
    width: 10,
    height: 10,
    backgroundColor: Color.verifyTitle,
    borderRadius: 50,
  },
  guestsType: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  guestsDotsView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  reviewBox: {
    padding: 15,
  },
  roomBoxDetails: {
    marginTop: 15,
  },
  roomName: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  roomNameText: {
    color: Color.shadeBlack,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  roomNameDotsView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  roomNameDots: {
    backgroundColor: Color.verifyTitle,
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  roomNameDotsText: {
    color: Color.shadeBlack,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  breakfastView: {
    width: '15%',
    alignItems: 'center',
  },
  optionIconBad: {
    width: 30,
    height: 30,
  },
  optionIcon: {
    width: 20,
    height: 20,
  },
  roomOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionIconBad: {
    width: 30,
    height: 30,
  },
  roomOptionText: {
    color: Color.verifyTitle,
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  allDetails: {
    marginTop: 15,
  },
  allDetailsText: {
    color: Color.primaryText,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  termText: {
    color: Color.shadeBlack,
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  recommendedView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  recommendedBtn: {
    borderWidth: 2,
    borderColor: '#AD71B2',
    borderRadius: 25,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  recommendedText: {
    color: '#AD71B2',
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  textText: {
    marginTop: 5,
    color: Color.verifyTitle,
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  selectionView: {
    marginTop: 5,
  },
  selectionIcon: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Color.buttonBackgound,
  },
  selectionDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
  },
  selectionText: {
    color: Color.shadeBlack,
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  hotelDetailsBox: {
    borderWidth: 2,
    borderColor: Color.borderAuth,
    borderRadius: 15,
    marginTop: 15,
  },
  hotelDetailsInfo: {
    padding: 15,
  },
  hotelNameTravel: {
    color: Color.shadeBlack,
    fontSize: width * 0.05,
    fontWeight: '500',
  },
  rulesDots: {
    backgroundColor: Color.verifyTitle,
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  ruleList: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
    // marginBottom:5
  },
  ruleText: {
    color: Color.verifyTitle,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  allReview: {
    marginTop: 15,
  },
  allReviewText: {
    color: Color.buttonBackgound,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  calculationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
  },
  calculationText: {
    color: Color.verifyTitle,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  calculationTextTotal: {
    color: Color.shadeBlack,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  calculationPrice: {
    color: Color.shadeBlack,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  calculationPriceSmall: {
    color: Color.verifyTitle,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  selectionOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
  },
  selectionOptionText: {
    color: Color.shadeBlack,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  inputView: {
    marginTop: 15,
  },
  termsView: {
    flexDirection: 'row',
  },
  termsText: {
    color: Color.black,
    width: width * 0.7,
    fontSize: width * 0.04,
    fontWeight: '400',
  },
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: '#888',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkedBox: {
    borderColor: '#EA7272',
    backgroundColor: Color.buttonBackgound,
  },
  checkmark: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  gstSection: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 15,
    // padding: 15,
  },
  gstText: {
    marginLeft: 10,
    fontSize: width * 0.045,
    color: Color.black,
    width: width * 0.7,
  },
  seeMoreDetailsView: {
    padding: 15,
    borderWidth: 2,
    borderColor: Color.borderAuth,
    borderRadius: 10,
    marginTop: 15,
  },
  paymentView: {
    backgroundColor: Color.black,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: width * 0.045,
    paddingHorizontal: width * 0.055,
    paddingBottom: width * 0.07,
  },
  paymentAmount: {
    color: Color.white,
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  paymentInfo: {
    color: Color.white,
    fontSize: width * 0.04,
    marginTop: 2,
  },
  paymentBtnText: {
    color: Color.white,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  paymentBtn: {
    backgroundColor: Color.buttonBackgound,
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});

export default styles;
