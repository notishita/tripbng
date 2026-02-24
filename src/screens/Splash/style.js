import {StyleSheet} from 'react-native';
import Color from '../../Theme/Color';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  logoSplash: {
    height: '95%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainLogo: {
    width: 200,
    height: 200,
    objectFit:"contain"
  },
  container: {
    height: '100%',
    alignItems: 'center',
  },
  splashText: {
    marginBottom: 100,
    alignItems: 'center',
  },
  smallText: {
    color: Color.greyText,
    fontSize: 12,
    fontWeight: '400',
  },
  largeText: {
    color: Color.greyText,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
