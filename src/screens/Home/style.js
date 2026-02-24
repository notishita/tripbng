import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../Theme/Color';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    padding: 18,
  },
  homeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:5
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userInfoAddress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoName: {
    color: Color.titleText,
    fontSize: 16,
    fontWeight: '500',
  },
  userInfoAddressText: {
    color: Color.verifyTitle,
    fontSize: 14,
    fontWeight: '500',
  },
  notificationBtn: {
    padding: 10,
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.boxBackground,
    marginTop: 28,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal:15,
    gap: 10,
  },
  searchText: {
    color: Color.verifyTitle,
    fontSize: 16,
    fontWeight: 'medium',
  },
  menuView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    // gap:5
  },
  menuBox: {
    padding: 10,
    backgroundColor: Color.boxBackground,
    borderRadius: 5,
    width: '18%',
    height: 89,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  headingTitle: {
    color: Color.titleText,
    fontSize: 18,
    fontWeight: '500',
  },
  seeAllText: {
    color: Color.primaryText,
    fontSize: 16,
    fontWeight: 'medium',
  },
  popDestBox: {
    marginRight: 10,
    marginTop: 16,
    position: 'relative', 
  },
  popDestImage: {
    width: '100%',
    height: 200, 
    borderRadius: 10,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 10, 
  },
  bannerTextView: {
    position: 'absolute',
    top: 20,
    left: 15,
  },
  offerView: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: '35%',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Color.offerBackground,
    marginBottom: 30,
  },
  offerText: {
    color: Color.white,
    fontSize: 16,
    fontWeight: '500',
  },
  bannerTitle: {
    color: Color.white,
    fontSize: 22,
    fontWeight: 'bold',
    width: '70%',
  },
  bannerDesc: {
    color: Color.white,
    fontSize: 14,
    fontWeight: '500',
  },
  hotelCate:{
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },
  hotelCateBox:{
    borderWidth:2,
    borderColor:Color.boxBorder,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:10,
    backgroundColor:Color.boxBackground
  },
  hotelView:{
    marginTop:10
  },
  hotelMenuText:{
    fontSize:16,
    fontWeight:"500"
  },
  hotelCateDetails:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:10
  },
  hotelDetailsBox:{
    marginRight:10
  },
  starView:{
    position:"absolute",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:Color.white,
    paddingVertical:6,
    paddingHorizontal:12,
    top:10,
    right:10,
    borderRadius:10,
    gap:5
  },
  hotelDescPrice:{
marginTop:5
  },
  hotelPrices:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  priceDetails:{
    flexDirection:"row",
    alignItems:"center"
  },
  priceText:{
    color:Color.primaryText,
    fontSize:18,
  },
  hotelTitle:{
    color:Color.boxText,
    fontSize:18,
    fontWeight:"500"
  },
  menuText: {
    fontSize: width * 0.03,
  },
});

export default styles;
