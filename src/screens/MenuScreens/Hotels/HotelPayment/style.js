import { Dimensions, StyleSheet } from "react-native";
import Color from "../../../../Theme/Color";
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    padding: 15,
  },
  flightPayment: {
    padding:10,
    marginTop:15,
    backgroundColor:Color.white,
    borderRadius: 15,
    elevation: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  borderSepration:{
    borderWidth:0.5,
    borderColor:Color.borderAuth,
    marginBottom:10
    // borderWidth:"80%"
  },
  dateTimeView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    gap:15,
    marginTop:20,
    marginBottom:20
  },
  dateTimeBox:{
    paddingVertical:8,
    paddingLeft:10,
    borderWidth:1,
    borderColor:Color.borderAuth,
    width:width*0.38,
    borderRadius:10
  },
  dateTimeLabel:{
    position:"absolute",
    backgroundColor:Color.white,
    width:width*0.15,
    textAlign:"center",
    top:-10,
    marginLeft:10,
    color:Color.verifyTitle,
    fontSize:width*0.045,
    fontWeight:"400"
  },
  dateTimeDetails:{
    flexDirection:"row",
    alignItems:"center",
    gap:5,
    marginTop:5
  },
  dateTimeValue:{
    color:Color.shadeBlack,
    fontSize:width*0.04,
    fontWeight:"500"
  },
  mainPrice:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    gap:10
  },
  mainPriceLabel:{
    color:Color.shadeBlack,
    fontSize:width*0.05,
    fontWeight:"400"
  },
  mainPriceValue:{
    color:Color.shadeBlack,
    fontSize:width*0.08,
    fontWeight:"500"
  },
  walletIconView:{
    padding:15,
    flexDirection:"row",
    alignItems:"center",
    gap:15,
    backgroundColor:Color.white,
    // elevation: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
    borderRadius:15
  },
  walletNumber:{
    color:Color.shadeBlack,
    fontSize:width*0.045,
    fontWeight:"400"
  },
  expiresDate:{
    color:Color.verifyTitle,
    fontSize:width*0.045,
    fontWeight:"400"
  },
  walletTitle:{
    color:Color.shadeBlack,
    fontSize:width*0.05,
    fontWeight:"500",
    marginBottom:10
  },
  walletView:{
    marginTop:15,
    marginBottom:15
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
  },hotelNew: {
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
  hotelBanner:{width:"100%", borderRadius:10}
})

export default styles