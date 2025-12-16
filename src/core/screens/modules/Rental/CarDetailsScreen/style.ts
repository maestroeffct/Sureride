import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  /* ---------------- IMAGE / HERO ---------------- */
  imageWrapper: {
    height: 460,
    backgroundColor: '#000',
  },

  carImage: {
    width,
    height: 500,
    resizeMode: 'contain',
    backgroundColor: '#000',
  },

  backBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pagination: {
    position: 'absolute',
    bottom: 35,
    left: 20,
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },

  dots: {
    position: 'absolute',
    bottom: 45,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },

  dotActive: {
    backgroundColor: '#FFF',
  },

  /* ---------------- CONTENT ---------------- */
  content: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    marginTop: -20,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111',
    marginBottom: 6,
  },

  rating: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },

  /* ---------------- AGENCY ---------------- */
  agencyCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    padding: 14,
    marginBottom: 24,
  },

  agencyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  logoCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  agencyName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },

  agencyMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  agencyRating: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },

  agencyReviews: {
    fontSize: 14,
    color: '#777',
  },

  /* ---------------- SPECIFICATIONS ---------------- */
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
    marginBottom: 14,
  },

  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  specCard: {
    width: '30%',
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },

  specLabel: {
    fontSize: 13,
    color: '#777',
    marginBottom: 6,
  },

  specValue: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
  },

  /* ---------------- BOTTOM BAR ---------------- */
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    backgroundColor: '#FFF',
  },

  fromText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },

  price: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111',
  },

  day: {
    fontSize: 14,
    fontWeight: '400',
    color: '#777',
  },

  bookBtn: {
    backgroundColor: '#00A27F',
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 30,
    width: 40,
  },

  bookTxt: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
