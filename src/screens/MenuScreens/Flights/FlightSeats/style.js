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
  seatsText: {
    color: Color.shadeBlack,
    fontSize: width * 0.05,
    fontWeight: '500',
  },
  seatsDetails: {
    marginTop: 25,
  },
  seatOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  seatOptionsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  seatCheck: {
    width: 25,
    height: 25,
    backgroundColor: Color.flightReserved,
    borderRadius: 50,
  },
  seatCheckText:{
    color:Color.shadeBlack,
    fontSize:width*0.04,
    fontWeight:"400"
  },
  seatsIcon:{
    alignSelf:"center",
    marginTop:50
  },
  seatNumber:{
    padding:width*0.045,
    borderRadius:10
  },
  seatsDetailsInfo:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
    paddingHorizontal:15
  },
  seatsDetailsView:{
    marginTop:25,
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
  paymentBtn: {
    backgroundColor: Color.buttonBackgound,
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});

export default styles;