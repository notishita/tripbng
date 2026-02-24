import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  route: { fontSize: 16, fontWeight: 'bold' },
  subHeader: { fontSize: 12, color: '#777' },
  headerIcons: { flexDirection: 'row', gap: 12 },
  editBtn: { marginRight: 10 },

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

  tabs: {
    flexDirection: 'row',
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  tabBtn: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#FF8C00',
    borderRadius: 8,
  },
  tabText: { color: '#000' },
  activeTabText: { color: '#fff', fontWeight: 'bold' },

  flightCard: {
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  city: { fontSize: 16, fontWeight: 'bold' },
  country: { fontSize: 12, color: '#777' },
  flightTime: { alignItems: 'center' },
  duration: { fontSize: 12 },

  time: { fontSize: 14, fontWeight: 'bold' },
  date: { fontSize: 12, color: '#999' },
  airline: { fontSize: 14, color: '#555' },
  price: { fontSize: 14, fontWeight: 'bold' },

  fareCard: {
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  fareTitle: { fontSize: 16, fontWeight: 'bold' },
  fareSubtitle: { fontSize: 12, color: '#666', marginBottom: 12 },
  fareItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  label: { flex: 1, marginLeft: 8, fontSize: 14 },
  value: { fontSize: 14, fontWeight: '500' },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  lockPrice: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#FF8C00',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    marginRight: 8,
  },
  lockText: { color: '#FF8C00', fontWeight: 'bold' },
  bookNow: {
    flex: 1,
    backgroundColor: '#FF8C00',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  bookText: { color: '#fff', fontWeight: 'bold' },
});

export default styles;
