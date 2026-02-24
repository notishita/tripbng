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
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    padding: 15,
  },
  backDateView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerDateView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: Color.borderAuth,
  },
  editView: {
    alignItems: 'center',
  },
  cityText: {
    color: Color.black,
    fontSize: 18,
    fontWeight: '500',
  },
  dateText: {
    color: Color.boxText,
    fontSize: 14,
    fontWeight: '300',
    marginTop: 2,
  },
  editText: {
    color: Color.primaryText,
    fontSize: 14,
    fontWeight: '500',
  },
  roomCate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 15,
    marginBottom: 8,
  },
  roomCateBox: {
    borderWidth: 2,
    borderColor: Color.borderAuth,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  roomCateText: {
    color: Color.shadeBlack,
    fontSize: width * 0.04,
    fontWeight: '400',
  },
  selectedBox: {
    borderWidth: 2,
    borderColor: Color.buttonBackgound,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  roomBox: {
    borderWidth: 2,
    borderColor: Color.borderAuth,
    borderRadius: 15,
    marginBottom:10
  },
  roomBoxDetails: {
    padding: 15,
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
  roomImg: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  roomImgview: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
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
  optionIcon: {
    width: 20,
    height: 20,
  },
  roomOptionText: {
    color: Color.verifyTitle,
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  borderSperation: {
    borderBottomWidth: 2,
    borderColor: Color.borderAuth,
  },
  breakfastText: {
    color: Color.shadeBlack,
    fontSize: width * 0.04,
    fontWeight: '500',
    marginBottom: 10,
  },
  breakfastView: {
    width: '15%',
    alignItems: 'center',
  },
  allDetails: {
    marginTop: 15,
  },
  allDetailsText: {
    color: Color.primaryText,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  mainPrice: {
    color: Color.shadeBlack,
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  priceDiscount: {
    color: Color.verifyTitle,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  selectedBtn: {
    borderWidth: 2,
    borderColor: Color.buttonBackgound,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: Color.hotelBorder,
  },
  priceDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedBtnText: {
    fontSize: width * 0.04,
    color: Color.primaryText,
    fontWeight: '500',
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
