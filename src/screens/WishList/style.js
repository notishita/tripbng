import { Dimensions, StyleSheet } from 'react-native';
import Color from '../../Theme/Color';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    padding: width * 0.04, // Responsive padding
  },
  detailsContainer: {
    padding: width * 0.04,
    backgroundColor: Color.white,
    borderRadius: width * 0.04,
    borderWidth: 1,
    borderColor: Color.borderAuth,
  },
  detailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: width * 0.04,
  },
  heartIcon: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: (width * 0.12) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7', // optional, for touch area highlight
    borderWidth: 1,
    borderColor: Color.borderAuth,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  timingView: {
    alignItems: 'center',
  },
  detailsName: {
    color: Color.boxText,
    fontSize: width * 0.04,
    fontWeight: '500',
  },
  detailsDesc: {
    color: Color.verifyTitle,
    fontSize: width * 0.035,
    fontWeight: '500',
  },
  leftSide: {
    alignItems: 'flex-start',
  },
  rightSide: {
    alignItems: 'flex-end',
  },
  wishlistView: {
    borderWidth: 2,
    borderColor: Color.borderAuth,
    borderRadius: width * 0.04,
    padding: width * 0.02,
  },
  whislistDetails: {
    position: 'relative', // <--- Add this
    flexDirection: 'row',
    padding: width * 0.025,
    gap: width * 0.015,
    alignItems: 'center',
    backgroundColor: Color.white, // To match card background
    borderRadius: width * 0.04,
    marginBottom: width * 0.03,
    minHeight: width * 0.18, // Ensures room for heart button
  },
  locationDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.015,
  },
  wishlistBanner: {
    width: width * 0.35,
    height: width * 0.3,
    borderRadius: width * 0.025,
  },
  hotelRoomName: {
    color: Color.shadeBlack,
    fontSize: width * 0.05,
    fontWeight: '500',
    marginBottom: width * 0.025,
  },
  hotelRoomLocation: {
    color: Color.shadeBlack,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
  },
  loginIcon: {
    width: width * 0.2,
    height: width * 0.2,
    marginBottom: width * 0.05,
    tintColor: '#0D5B9B',
  },
  loginMessage: {
    fontSize: width * 0.045,
    color: '#333',
    textAlign: 'center',
    marginBottom: width * 0.05,
  },
  loginButton: {
    backgroundColor: '#0D5B9B',
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.08,
    borderRadius: width * 0.03,
    minHeight: 48,
    marginTop: width * 0.03,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  borderSperation: {
    height: 1,
    backgroundColor: Color.borderAuth,
    marginVertical: width * 0.03,
    width: '100%',
  },
});

export default styles;
