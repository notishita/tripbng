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
  
});

export default styles;
