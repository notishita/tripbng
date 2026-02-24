import {StyleSheet} from 'react-native';
import Color from '../../../Theme/Color';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    padding: 15,
    height: '100%',
  },
  formView: {
    marginTop: 60,
  },
  otpTitle: {
    color: Color.verifyTitle,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 40,
  },
  otpTitleBottom: {
    color: Color.verifyTitle,
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10,
    textAlign: 'center',
  },
  otpResend: {
    color: Color.mainText,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpInput: {
    width: 70,
    height: 50,
    borderBottomWidth: 1,
    borderColor: Color.verifyTitle,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
  },
  resendButton: {
    color: Color.mainText,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 40,
    textDecorationLine: 'underline',
  },
});

export default styles;
