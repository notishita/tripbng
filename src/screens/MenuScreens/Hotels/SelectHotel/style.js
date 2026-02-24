import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../../Theme/Color';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
  flightOptionsView: {
    position: 'absolute',
    top: '10%',
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
    marginBottom: 50,
    height: 500,
  },
  homeHeader: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    marginTop:"5%"
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
  hotelTitle: {
    color: Color.shadeBlack,
    fontSize: width * 0.05,
    fontWeight:"500"
  },
  selectFilghtsView: {
    marginTop: 15,
    // marginBottom: 50,
  },
  label: {
    color: Color.black,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  dropDownIcon: {
    marginRight: 15,
    tintColor:Color.black
  },
  fromToFlights: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1.5,
    paddingVertical: 10 ,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderColor: Color.inputBorder,
    gap: 15,
  },
  dateText:{
    color:Color.shadeBlack,
    fontSize:width*0.04,
    fontWeight:"500"
  },
  dateTextSmall:{
    color:Color.verifyTitle,
    fontSize:width*0.035,
    fontWeight:"500"
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
 
});

export default styles;
