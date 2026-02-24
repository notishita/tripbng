import { Dimensions, StyleSheet } from 'react-native';
import Color from '../../Theme/Color';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    padding: 15,
    marginTop: 30,
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  notificationBox: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  dateDetailsText: {
    color: Color.shadeBlack,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  borderSepration: {
    borderBottomWidth: 2,
    borderColor: Color.borderAuth,
  },
  notificationView: {
    borderWidth: 2,
    borderColor: Color.borderAuth,
    borderRadius: 15,
    marginBottom: 10,
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  btnViewText: {
    color: Color.shadeBlack,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
  seeBtn: {
    borderWidth: 2,
    borderColor: Color.buttonBackgound,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  seeBtnText: {
    color: Color.primaryText,
    fontSize: width * 0.045,
    fontWeight: '500',
  },
});

export default styles;
