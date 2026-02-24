import { StyleSheet } from 'react-native';
import Color from '../../../../../Theme/Color';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  //Hearder Css
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 1,
    marginRight: 10, // spacing from bell
  },

  iconButton: {
    padding: 8,
  },

  headerTextContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },

  routeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  subText: {
    fontSize: 12,
    color: 'gray',
  },

  bellWrapper: {
    borderWidth: 1,
    borderColor: '#ECEDF2', // Blue or any distinct color
    borderRadius: 12,
    padding: 6,
  },
  bellText: {
    fontSize: 10, // smaller text
    textAlign: 'center',
    marginTop: 4, // some spacing below the icon
    color: '#333', // optional: to match design
  },

  //Date and price css
  dateItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  dateItemActive: {
    borderColor: '#ff8000',
  },

  dateText: {
    color: '#666',
    fontSize: 12,
    lineHeight: 16,
  },

  dateTextActive: {
    color: '#ff8000',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 16,
  },

  //Tickets CSS
  scrollArea: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  city: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  duration: {
    textAlign: 'center',
    color: 'gray',
    marginVertical: 4,
  },
  cardSubHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  country: {
    fontSize: 12,
    color: 'gray',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  airlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  airlineLogo: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 6,
  },
  airline: {
    fontSize: 12,
    color: 'gray',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailButton: {
    color: '#ff8000',
    fontWeight: '500',
  },
  bookButton: {
    backgroundColor: '#ff8000',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  bookText: {
    color: 'white',
    fontWeight: 'bold',
  },

  //Let'sBook active card CSS
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  summaryLeft: {
    flexDirection: 'column',
  },

  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },

  summarySubtitle: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },

  summaryPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },

  detailSection: {
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    backgroundColor: '#fafafa',
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    resizeMode: 'contain',
  },

  detailLabel: {
    color: '#444',
    fontWeight: '500',
  },

  detailValue: {
    color: '#444',
  },

  detailButtons: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 16,
    alignSelf: 'flex-end',
  },

  lockButton: {
    borderColor: '#ff8000',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },

  lockText: {
    color: '#ff8000',
    fontWeight: 'bold',
  },

  bookNowButton: {
    backgroundColor: '#ff8000',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },

  bookNowText: {
    color: 'white',
    fontWeight: 'bold',
  },

  filterButton: {
    position: 'absolute',
    bottom: 32, // adjust as needed for spacing from bottom
    right: 24, // adjust as needed for spacing from right
    backgroundColor: '#ff8000',
    borderRadius: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    elevation: 7,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 100,
  },
  filterIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginBottom: 2,
  },
  filterText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;
