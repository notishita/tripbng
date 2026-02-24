import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../Theme/Color';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    padding: 15,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterBox: {
    width: '50%',
    alignItems: 'center',
    // backgroundColor:"red"
    padding: 15,
    borderBottomWidth: 2,
    borderColor: Color.borderAuth,
  },
  activeFilterBox: {
    width: '50%',
    alignItems: 'center',
    // backgroundColor:"red"
    padding: 15,
    borderBottomWidth: 2,
    borderColor: Color.buttonBackgound,
  },
  filterText: {
    color: Color.shadeBlack,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  activeFilterText: {
    color: Color.primaryText,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  bookedView: {
    borderWidth: 2,
    padding: 8,
    borderColor: Color.borderAuth,
    borderRadius: 15,
  },
  whislistDetails: {
    flexDirection: 'row',
    // alignItems:"center",
    padding: 10,
    gap: 10,
  },
  locationDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  wishlistBanner: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  hotelRoomName: {
    color: Color.shadeBlack,
    fontSize: width * 0.05,
    fontWeight: '500',
    marginBottom: 10,
  },
  hotelRoomLocation: {
    color: Color.shadeBlack,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  borderSperation: {
    borderBottomWidth: 2,
    borderColor: Color.borderAuth,
  },
  borderSperation: {
    borderBottomWidth: 2,
    borderColor: Color.borderAuth,
  },
  notificationBox: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  dateDetailsText: {
    color: Color.shadeBlack,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  seeMoreView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  seeMoreText: {
    color: Color.primaryText,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  doneText: {
    color: Color.verifyTitle,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  upcomingBtn: {
    backgroundColor: Color.btnColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  upcomingText: {
    color: Color.white,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  againBtn: {
    backgroundColor: Color.buttonBackgound,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  againText: {
    color: Color.white,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loginIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    tintColor: '#0D5B9B',
  },
  loginMessage: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#0D5B9B',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  //New CSS
  
});

export default styles;
