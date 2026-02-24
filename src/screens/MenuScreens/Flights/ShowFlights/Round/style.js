import { Dimensions, StyleSheet } from "react-native";
import Color from "../../../../../Theme/Color";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    padding: 15,
  },
  roundTripInfo:{
    flexDirection:"row",
    alignItems:"center",
    gap:5
  },
  roundTripView: {
    marginTop: height * 0.02, 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // flexWrap:"wrap"
    width:"100%"
  },
  roundTripDates:{
fontSize:width*0.03,
color:Color.verifyTitle,
fontWeight:"300"
  },
  roundTripPrice:{
fontSize:width*0.03,
color:Color.boxText,
fontWeight:"500"

  },
  bookDetailsPrice:{
    fontSize:width*0.033,
    color:Color.boxText,
    fontWeight:"500"
  },
  bookDetailsDesc:{
    fontSize:width*0.03,
    color:Color.verifyTitle,
    fontWeight:"300"
  },
  roundTripHeading:{
    color:Color.black,
    fontSize:width*0.035,
    fontWeight:"500",
    marginBottom:10,
  },
  roundTripFlights: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.04,
    marginBottom: height * 0.015, 
 
  },
  bookDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.03, 
  },
  bookBtn: {
    backgroundColor: Color.buttonBackgound,
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: height * 0.01, 
    paddingHorizontal: width * 0.04, 
  },
  bookBtnText: {
    color: Color.white,
    fontSize: width * 0.035, 
    fontWeight: "500",
  },
  departReturnView: {
    flexDirection: "row",
    alignItems: "flex-start", 
    marginTop: 10, 
    width: "60%", 
    marginRight:10,
  },
  departReturnDetails: {
    width: "100%", 
    marginBottom: 10, 
  },
  departReturn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.buttonBackgound,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 8, 
  },
  departReturnText: {
    color: Color.white,
    fontSize: 18,
    fontWeight: "500",
  },
  departReturnDate: {
    color: Color.white,
    fontSize: 14,
    fontWeight: "400",
  },
  departReturnInfo: {
    marginTop: 15, 
    borderWidth: 2,
    borderColor: Color.borderAuth,
    borderRadius: 10,
    padding: 8, 
  },
  airwayInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8, 
  },
  priceView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10, 
  },
  priceTimeView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5, 
  },
  priceLine: {
    borderWidth: 1.5, 
    width: "20%", 
    borderColor: Color.buttonBackgound,
  },
  priceTimeText: {
    color: Color.black,
    fontSize: 14,
    fontWeight: "500",
  },
  priceTimeDesc: {
    color: Color.verifyTitle,
    fontSize: 12,
    fontWeight: "400",
  },
  
});

export default styles;
