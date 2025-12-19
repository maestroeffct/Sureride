import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  horizontalPadding: {
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },

  locationLabel: {
    color: '#888',
    fontSize: 14,
  },

  locationValue: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 2,
  },

  filterRow: {
    marginBottom: 12,
    paddingVertical: 12,
  },

  scrollContent: {
    paddingBottom: 20,
  },

  carTypeRow: {
    marginBottom: 20,
  },

  sectionHeader: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
  },

  sectionCount: {
    fontSize: 14,
    color: '#999',
  },
});
