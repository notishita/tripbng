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
  hotelMenuBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.borderAuth,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginRight: 8,
    gap: 10,
    height: 35,
  },
  hotelMenuView: {
    marginTop: 10,
  },
  hotelMenuText: {
    color: Color.shadeBlack,
    fontSize: width * 0.035,
    fontWeight: '400',
  },
  dropdown: {
    // position: 'absolute',
    // top: 40,
    // left: 0,
    // right: 0,
    backgroundColor: Color.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.borderAuth,
    zIndex: 1,
    padding: 10,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.borderAuth,
  },
  dropdownText: {
    color: Color.shadeBlack,
    fontSize: width * 0.035,
  },
  expandedContainer: {
    paddingBottom: 200,
  },
  hotelDetails: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
    padding: 10,
    marginTop: 15,
    marginBottom: 60,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  wishIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 3,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    opacity: 0.6,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
  hotelInfo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  hotelRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 4,
  },
  ratingBox: {
    backgroundColor: Color.mainText,
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 12,
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
  hotelNew: {
    borderWidth: 1,
    borderColor: Color.buttonBackgound,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  hotelNewText: {
    color: Color.buttonBackgound,
    fontSize: width * 0.035,
    fontWeight: '400',
  },
  totalRating: {
    color: Color.shadeBlack,
    fontSize: width * 0.035,
    fontWeight: '400',
  },
  hotelInfoDetails: {
    width: '100%',
    marginTop: 10,
  },
  hotelName: {
    color: Color.shadeBlack,
    fontSize: width * 0.05,
    fontWeight: '500',
  },
  hotelAddress: {
    color: Color.shadeBlack,
    fontSize: width * 0.04,
    fontWeight: '400',
  },
  hotelType: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  hotelTypeBox: {
    borderWidth: 2,
    borderColor: Color.borderAuth,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  hotelTypeText: {
    color: Color.shadeBlack,
    fontSize: width * 0.045,
    fontWeight: '400',
  },
  hotelAds: {
    borderWidth: 2,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderColor: Color.mainText,
  },
  hotelAdsText: {
    color: Color.mainText,
    fontSize: width * 0.045,
    fontWeight: '400',
  },
  hotelPrices:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:15
  },
  priceDetials:{
    alignItems:"flex-end"
  },
  itemText:{
    color:Color.buttonBackgound,
    fontSize:width*0.045,
    fontWeight:"500"
  },
  mainPrice:{
    color:Color.shadeBlack,
    fontSize:width*0.05,
    fontWeight:"bold"
  },
  priceOption:{
    color:Color.verifyTitle,
    fontSize:width*0.035,
    fontWeight:"400"
  },
  discountView:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    gap:10,
    borderWidth:2,
    borderColor:Color.hotelBorder,
    paddingVertical:5,
    paddingHorizontal:10,
    marginTop:10,
    borderRadius:10
    
  },
  discountText:{
    color:Color.mainText,
    fontSize:width*0.04,
    fontWeight:"500"
  },
  menuItems:{
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },
  trueIcon:{
    width:15,
    height:15
  }
});

export default styles;
