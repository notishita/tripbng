import { StyleSheet, Dimensions, PixelRatio, Platform } from 'react-native';
import Color from '../../../../Theme/Color';
const { width } = Dimensions.get('window');
const scale = width / 375;
const responsiveSize = size =>
  Math.round(PixelRatio.roundToNearestPixel(size * scale));

const styles = StyleSheet.create({
  // 1. Outer container for the full-width background
  topContainerOuter: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#3172b8', // fallback color in case image is missing
  },
  // 2. ImageBackground style
  topContainerBg: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  topImageStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    resizeMode: 'cover',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    position: 'relative',
    // paddingHorizontal: 10,
    paddingBottom: 30,
    marginTop: 50,
    marginRight: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerTextContainer: {
    flexShrink: 1,
    alignItems: 'flex-start',
    // marginTop: 200,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  locationText: {
    color: '#fff',
    fontSize: 12,
  },
  bellIcon: {
    // position: 'absolute',
    right: -50,
    top: 5,
  },
  formCard: {
    backgroundColor: '#fff',
    marginTop: -150,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: '#FFA500',
  },
  tabText: {
    color: '#444',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
  },
  label: {
    marginBottom: 5,
    fontWeight: '500',
    marginTop: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 45,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: '#333',
  },
  icon: {
    marginRight: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  specialFaresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  specialFare: {
    backgroundColor: '#F5F8FA',
    padding: 10,
    borderRadius: 10,
    width: '30%',
    marginBottom: 10,
  },
  fareTitle: {
    fontWeight: '600',
    fontSize: 12,
  },
  fareSub: {
    fontSize: 10,
    color: '#4F8EF7',
  },
  searchButton: {
    backgroundColor: '#FF8C00',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  searchText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
