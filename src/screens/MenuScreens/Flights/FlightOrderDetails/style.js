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
  orderTitle:{
    marginTop:10,
    color:Color.shadeBlack,
    fontSize:width*0.055,
    fontWeight:"500"
  },
  airwayView:{
    flexDirection:"row",
    alignItems:"center",
    padding:15
  },
  orderDetailsView:{
    borderWidth:1,
    borderColor:Color.borderAuth,
    marginTop:15,
    marginBottom:15
    // padding:15
  },
  airwayTitle:{
    color:Color.shadeBlack,
    fontSize:width*0.05,
    fontWeight:"500"
  },
  detailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop:5,
    padding:15
  },
  timingView: {
    alignItems: 'center',
  },
  detailsName: {
    color: Color.boxText,
    fontSize: width*0.045,
    fontWeight: '500',
  },
  detailsDesc: {
    color: Color.verifyTitle,
    fontSize: 14,
    fontWeight: '500',
  },
  leftSide: {
    alignItems: 'flex-start',
  },
  rightSide: {
    alignItems: 'flex-end',
  },
  borderSperation:{
    borderBottomWidth:1,
    borderColor:Color.borderAuth
  },
  bookingDateView:{
    padding:15
  },
  bookingDateBox:{
    flexDirection:"row",
    alignItems:"center",
    gap:25,
    marginBottom:5
  },
  dateTitle:{
    color:Color.verifyTitle,
    fontSize:width*0.045,
    fontWeight:"400",
    width:width*0.35
  },
  dateValue:{
    color:Color.shadeBlack,
    fontSize:width*0.045,
    fontWeight:"400",
    width:width*0.35
  },
  dateTitleTotal:{
    color:Color.shadeBlack,
    fontSize:width*0.05,
    fontWeight:"500",
    width:width*0.35
  },
  dateValueTotal:{
    color:Color.primaryText,
    fontSize:width*0.05,
    fontWeight:"500",
    width:width*0.35
  },
  homeBtn:{
    borderWidth:1,
    borderColor:Color.mainText,
    paddingVertical:15,
    alignItems:"center",
    borderRadius:15,
    marginTop:10,
  },
  homeBtnText:{
    color:Color.mainText,
    fontSize:width*0.045,
    fontWeight:"500"
  },
  bottomBtn:{
    width:"100%",
    position:"absolute",
    bottom:0,
    paddingHorizontal:20,
    paddingVertical:30,
    backgroundColor:Color.white,
    elevation: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 10,
      },
      android: {
        elevation: 15,
      },
    }),
  }
})

export default styles