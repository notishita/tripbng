import {StyleSheet} from 'react-native';
import Color from '../../Theme/Color';

const styles = StyleSheet.create({
    detailsContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: Color.white,
        borderRadius: 15,
        elevation: 15,
        ...Platform.select({
          ios: {
            shadowColor: 'rgba(0, 0, 0, 0.1)',  
            shadowOffset: { width: 0, height: 4 },  
            shadowOpacity: 1,  
            shadowRadius: 10,  
          },
          android: {
            elevation: 15, 
          },
        }),
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
