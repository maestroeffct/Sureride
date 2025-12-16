import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  /* ---------------- HEADER ---------------- */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
  },

  /* ---------------- SEARCH + FILTER ---------------- */
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    height: 48,
    borderRadius: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#a3a0a0ff',
  },

  filterBtn: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 30,
    marginLeft: 10,
    gap: 8,
    borderWidth: 1,
    borderColor: '#a3a0a0ff',
  },

  brandRow: {
    marginBottom: 20,
    paddingVertical: 4,
    minHeight: 44,
  },

  namePriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },

  searchText: {
    flex: 1,
    fontSize: 18,
    color: '#444',
  },

  filterLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },

  /* ---------------- BRANDS ---------------- */
  brandHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  brandTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },

  seeAll: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00A27F',
    textDecorationLine: 'underline',
  },

  brandTag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    marginRight: 10,
  },

  brandTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
  },

  /* ---------------- GRID ---------------- */
  gridRow: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  carCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 18,
    padding: 12,
    // shadowColor: '#000',
    // shadowOpacity: 0.05,
    // shadowRadius: 6,
    // shadowOffset: { width: 0, height: 2 },
    borderColor: '#d5d5d5ff',
    borderWidth: 1,
  },

  carImage: {
    width: '100%',
    height: 110,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginBottom: 10,
    resizeMode: 'cover',
  },

  carName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },

  carPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
    marginBottom: 8,
  },

  day: {
    color: '#777',
    fontSize: 13,
    fontWeight: '400',
  },

  desc: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
    marginBottom: 10,
  },

  /* ---------------- ICON ROWS ---------------- */
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    flexWrap: 'wrap',
  },

  iconText: {
    marginLeft: 4,
    marginRight: 8,
    fontSize: 12,
    color: '#444',
  },

  /* ---------------- BOOK BUTTON ---------------- */
  bookBtn: {
    marginTop: 10,
    backgroundColor: '#00A27F',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },

  bookTxt: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
  },
  availableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  availableText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },

  sortRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  sortText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
  },
});
