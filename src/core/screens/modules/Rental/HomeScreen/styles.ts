import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
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
    marginVertical: 15,
  },

  carTypeRow: {
    marginVertical: 15,
  },

  sectionHeader: {
    marginTop: 10,
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
