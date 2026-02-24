import {StyleSheet} from 'react-native';
import Color from '../../Theme/Color';

const styles = StyleSheet.create({
  detailsContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: Color.white,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Color.borderAuth,
  },
  detailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  timingView: {
    alignItems: 'center',
  },
  detailsName: {
    color: Color.boxText,
    fontSize: 16,
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
  dashedBorder: {
    borderWidth: 1,
    borderColor: Color.borderAuth,
    borderRadius: 15,
    marginBottom: 15,
  },
  leftSideAirway: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  seeMoreText: {
    color: Color.primaryText,
    fontSize: 16,
    fontWeight: '500',
  },
  bookBtn: {
    backgroundColor: Color.primaryText,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 25,
  },
  bookBtnText: {
    color: Color.white,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
