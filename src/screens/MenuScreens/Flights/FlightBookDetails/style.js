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
  bookFlightInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
  },
  bookFlightName: {
    color: Color.black,
    fontSize: width * 0.045,
  },
  bookFlightDate: {
    color: Color.verifyTitle,
    fontSize: width * 0.035,
    fontWeight: '400',
  },
  bookFlightClass: {
    color: Color.black,
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  viewFlightBtn: {
    borderWidth: 1,
    borderColor: Color.buttonBackgound,
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 20,
  },
  viewFlightBtnText: {
    color: Color.black,
    fontSize: width * 0.04,
    fontWeight: '400',
  },
  seeMoreDetailsView: {
    padding: 15,
    borderWidth: 2,
    borderColor: Color.borderAuth,
    borderRadius: 10,
    marginTop: 15,
  },
  seeMoreDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeDetailsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  seeDetailsTitle: {
    color: Color.black,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  seeDetailsDescText: {
    color: Color.verifyTitle,
    fontSize: width * 0.035,
    fontWeight: '500',
    width: width * 0.6,
  },
  seeDetailsDesc: {
    color: Color.verifyTitle,
    fontSize: width * 0.045,
    fontWeight: '300',
  },
  seeMorePrice: {
    color: Color.black,
    fontSize: width * 0.05,
    fontWeight: '500',
  },
  seeMoreInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 75,
    marginTop: 15,
  },
  seeMoreInfoView: {
    marginLeft: 10,
    marginTop: 5,
  },
  seemMoreIncon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  seeMoreIconText: {
    color: Color.verifyTitle,
    fontSize: width * 0.04,
    fontWeight: '400',
    width: width * 0.25,
  },
  bookFlightPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop:15
  },
  bookFlightDateTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookFlightDateText: {
    color: Color.black,
    fontSize: width * 0.04,
    fontWeight: '400',
  },
  bookFlightDateTimeTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
  bookFlightTimeText: {
    color: Color.verifyTitle,
    fontSize: width * 0.04,
    fontWeight: '400',
  },
  borderLine: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Color.AuthBorder,
    marginTop: 2,
    marginBottom: 2,
  },
  bookFlightDateTimeText: {
    color: Color.verifyTitle,
    fontSize: width * 0.038,
  },
  infoIcon: {
    backgroundColor: '#EA7272',
    padding: 5,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoView: {
    marginTop: 15,
  },
  infoDesc: {
    color: Color.black,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  dotView: {
    backgroundColor: Color.black,
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  infoListView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    marginLeft: 25,
  },
  infoDescList: {
    color: Color.black,
    fontSize: width * 0.04,
    fontWeight: '400',
  },
  infoBoxDetails: {
    marginBottom: 10,
  },
  discountIcon: {
    width: 25,
    height: 25,
  },
  seeDetailsDesc: {
    color: Color.verifyTitle,
    fontSize: width * 0.045,
    fontWeight: '400',
  },
  textBoxDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: Color.inputBorder,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  applyText: {
    color: Color.buttonBackgound,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  inputBox: {
    fontSize: 16,
    fontWeight: '500',
  },
  couponBtn: {
    alignItems: 'center',
    marginTop: 15,
  },
  couponBtnText: {
    color: Color.buttonBackgound,
    fontSize: width * 0.04,
  },
  bookingDetails: {
    borderWidth: 2,
    borderColor: Color.borderAuth,
    borderRadius: 10,
    marginTop: 15,
  },
  section: {
    borderBottomWidth: 2,
    borderBottomColor: Color.borderAuth,
    paddingBottom: 15,
    // marginBottom: 15,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 12,
  },
  iconWrapper: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  iconText: {
    fontSize: 16,
    color: '#666',
  },
  title: {
    fontSize: width * 0.035,
    fontWeight: '500',
    flex: 1,
  },
  subTitle: {
    fontSize: width * 0.035,
    color: Color.black,
    fontWeight: '500',
  },
  subTitleAdd: {
    fontSize: width * 0.035,
    color: Color.verifyTitle,
    fontWeight: '500',
  },
  addButton: {
    borderWidth: 1,
    borderColor: Color.buttonBackgound,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: Color.buttonBackgound,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: width * 0.045,
    fontWeight: '500',
    // marginBottom: 10,
  },
  infoText: {
    fontSize: width * 0.045,
    color: Color.buttonBackgound,
    fontWeight: '400',
  },
  gstSection: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 15,
    padding: 15,
  },
  gstText: {
    marginLeft: 10,
    fontSize: width * 0.045,
    color: Color.black,
    width: width * 0.7,
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
  bookingIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  editView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor:"red",
    width: '100%',
  },
  editIconBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  editIconBtnText: {
    color: Color.buttonBackgound,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  editIconBtnImg: {
    width: 15,
    height: 10,
  },
  stateName: {
    color: Color.black,
    fontSize: width * 0.05,
    fontWeight: '500',
    paddingVertical: 10,
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
  paymentBtn: {
    backgroundColor: Color.buttonBackgound,
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
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
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  paymentInfo: {
    color: Color.verifyTitle,
    fontSize: width * 0.045,
    marginTop: 2,
  },
  paymentBtnText: {
    color: Color.white,
    fontSize: width * 0.05,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    color:Color.black,
    fontSize: width*0.045,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    // textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  // closeBtn: {
  //   backgroundColor: '#EA7272',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 5,
  // },
  closeBtnText: {
    color: Color.buttonBackgound,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBtnView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  modalInfoView:{
    borderWidth:2,
    borderColor:Color.borderAuth,
    borderRadius:10,
    padding:10,
    marginBottom:10
  },
  modalInfoDetails:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:"80%"
  },
  modalInfoText:{
    color:Color.black,
    fontSize:width*0.035,
    fontWeight:"400"
  },
  modalInfoDesc:{
    color:Color.black,
    fontSize:width*0.035,
    fontWeight:"500",
    alignItems:"flex-start",
    // borderWidth:1,
    width:"20%"
  },
  personInfo:{
    color:Color.black,
    fontSize:width*0.04,
    fontWeight:"500",
    marginBottom:5
  },
  
});

export default styles;
