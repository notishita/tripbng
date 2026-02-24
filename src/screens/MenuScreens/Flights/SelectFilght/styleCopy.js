import {StyleSheet, Platform, StatusBar, Dimensions} from 'react-native';
import Color from '../../../../Theme/Color';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  safeView:{
    flex: 1,
    backgroundColor:Color.white
  },
  container: {
    padding: 18,
  },
  menuBannerImg: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  mapIcon: {
    position: 'absolute',
    top: -50,
  },
  flightCate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: Color.boxBackground,
    gap: 10,
  },
  flightCateBox: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  flightMenuText: {
    fontSize: 16,
    fontWeight: '500',
  },
  flightOptionsView: {
    position: 'absolute',
    top: '5%',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
  },
  flightDetials: {
    paddingVertical: 15,
    paddingHorizontal: 22,
    backgroundColor: Color.white,
    borderRadius: 15,
    elevation: 15,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    width: '90%',
    marginBottom:100,
    height:width*1.5
  },
  homeHeader: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userInfoAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  userInfoName: {
    color: Color.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInfoAddressText: {
    color: Color.white,
    fontSize: 14,
    fontWeight: '500',
  },
  notificationBtn: {
    padding: 12,
    borderRadius: 50,
    backgroundColor: Color.white,
  },
  notificationIcon: {
    width: 25,
    height: 25,
  },
  userInfoAddressIcon: {
    tintColor: Color.white,
  },
  selectFilghtsView: {
    marginTop: 15,
    marginBottom: 50,
  },
  fromToFlights: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderColor: Color.inputBorder,
    gap: 15,
  },
  fromToFlightsText: {
    fontSize: 14,
    color: Color.black,
    fontWeight: '300',
  },
  fromToFlightsTextSecondary:{
    fontSize: 14,
    color: Color.black,
    fontWeight: '500',
  },
  label: {
    color: Color.black,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  travelClassView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  travelClassBox: {
    width: '47%',
  },
  placeholderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dropDownIcon: {
    marginRight: 15,
  },
  discountDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flexWrap: 'wrap',
  },
  discountTitle: {
    color: Color.black,
    fontSize: 18,
    fontWeight: '500',
    marginBottom:8
  },
  discountBox: {
    borderWidth: 1.5,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderColor: Color.inputBorder,
  },
  discountBoxName: {
    fontSize: 12,
    color: Color.black,
    fontWeight: '500',
  },
  discountText: {
    fontSize: 10,
    color: Color.mainText,
    fontWeight: '500',
  },
  discountView:{
    marginBottom:15
  },
  roundDateView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  fromToFlightsMultiple: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1.5,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderColor: Color.inputBorder,
    // width:"50%",
    justifyContent:"space-between",
    gap:10
  },
  multipleView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    gap:10
  },
  multipleViewBox:{
    width:"30%"
  },
  cityName:{
    fontSize:10
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: Color.primaryText,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  addMoreBtn:{
    alignItems:"center",
    borderWidth:1,
    paddingVertical:10,
    marginBottom:15,
    borderRadius:15,
    borderStyle: "dotted",
    borderColor:Color.primaryText
  },
  addMoreBtnText:{
    color:Color.primaryText,
    fontSize:16,
    fontWeight:"500"
  }
});

export default styles;
