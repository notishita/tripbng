import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../../Theme/Color';
const {width} = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    padding: 15,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:"red",
    justifyContent: 'space-between',
  },
  headerOptionIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  hotelRoomView: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:"space-between"
    gap: 5,
  },
  smallRooms: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    // marginBottom:6
  },
  hotelName: {
    color: Color.shadeBlack,
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  hotelNameTravel: {
    color: Color.shadeBlack,
    fontSize: width * 0.05,
    fontWeight: '500',
  },
  hotelDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  hotelRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
  mainImg: {
    width: screenWidth * 0.5, // 60% of the screen width
    height: undefined, // Maintain aspect ratio
    aspectRatio: 230 / 170, // Maintain original aspect ratio of the image
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    width: screenWidth * 0.2,
    height: undefined,
    aspectRatio: 230 / 205,
  },
  imageTop: {
    width: screenWidth * 0.2,
    height: undefined,
    aspectRatio: 230 / 205,
    borderTopRightRadius: 10,
  },
  imageLast: {
    width: screenWidth * 0.2,
    height: undefined,
    aspectRatio: 230 / 205,
    borderBottomRightRadius: 10,
  },

  ratingBox: {
    width: '20%',
    backgroundColor: Color.mainText,
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 12,
    alignItems:"center"
  },
  locationBox: {
    width: '20%',
    alignItems: 'center',
  },
  ratingText: {
    color: Color.white,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  ratingName: {
    color: Color.mainText,
    fontSize: width * 0.05,
    fontWeight: '500',
  },
  ratingNameSmall: {
    color: Color.shadeBlack,
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  locationName: {
    color: Color.shadeBlack,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  borderSperation: {
    borderBottomWidth: 2,
    borderColor: Color.borderAuth,
    // borderStyle:"dashed",
    // borderTopColor:"red"
  },
  checkInOut: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
  },
  checkInOutInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkInOutDots: {
    backgroundColor: Color.verifyTitle,
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  checkInOutText: {
    color: Color.verifyTitle,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  datePersonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
  datePerson: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 2,
    borderColor: Color.borderAuth,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  datePersonText: {
    color: Color.primaryText,
    fontSize: width * 0.035,
    fontWeight: '400',
  },
  hotelDesc: {
    color: Color.shadeBlack,
    fontSize: width * 0.035,
    fontWeight: '400',
  },
  viewAll: {
    padding: 10,
  },
  viewAllText: {
    color: Color.primaryText,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  restaurantView: {
    padding: 10,
    // backgroundColor:"red",
    width: 100,
    height: 60,
    alignItems: 'center',
  },
  restaurantText: {
    color: Color.shadeBlack,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  ratingHotel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  ratingView: {
    backgroundColor: Color.mainText,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  ratingTextHotel: {
    color: Color.white,
    fontSize: width * 0.05,
    fontWeight: '500',
  },
  ratingType: {
    color: Color.mainText,
    fontSize: width * 0.05,
    fontWeight: '500',
  },
  ratingScoreView: {
    marginTop: 15,
  },
  ratingScore: {
    color: Color.shadeBlack,
    fontSize: width * 0.05,
    fontWeight: '400',
  },
  ratingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: Color.borderAuth,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  ratingCardBox: {
    alignItems: 'center',
  },
  ratingCardRate: {
    color: Color.primaryText,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  ratingCardType: {
    color: Color.shadeBlack,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  customerReview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  customerReviewDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor:"red",
    width: '100%',
  },
  ratingDateView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  customerReviewText: {
    color: Color.shadeBlack,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  customerName: {
    color: Color.verifyTitle,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  checkInOutDotsView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  customerDots: {
    width: 10,
    height: 10,
    backgroundColor: Color.verifyTitle,
    borderRadius: 50,
  },
  customerRating: {
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderColor: Color.buttonBackgound,
  },
  customerRatingText: {
    color: Color.buttonBackgound,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  customerReviewDesc: {
    width: width * 0.7,
    color: Color.verifyTitle,
    fontSize: width * 0.035,
    fontWeight: '400',
  },
  allReview: {
    marginTop: 15,
  },
  allReviewText: {
    color: Color.buttonBackgound,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  addressView: {
    marginTop: 10,
  },
  addressLabel: {
    color: Color.shadeBlack,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  addressDesc: {
    color: Color.verifyTitle,
    fontSize: width * 0.04,
    fontWeight: '400',
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
  mapImg: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
    height: 150,
  },
});

export default styles;
