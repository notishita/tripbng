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
    marginTop: 100,
  },
  socialView: {
    marginTop: 25,
  },
  bottomTextView: {
    position: 'absolute',
    bottom: 10,
    left: 15,
  },
  bottomText: {
    color: Color.bottomLogin,
    fontSize: 14,
    textAlign: 'justify',
  },
  centerText: {
    color: Color.mainText,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  mobileBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  countryView: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1.5,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderColor: Color.inputBorder,
  },
  inputBox: {
    width: '75%',
    borderWidth: 1.5,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    fontSize: 16,
    fontWeight: '500',
    borderColor: Color.inputBorder,
  },
});

export default styles;
