import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },

  infoContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },

  type: {
    marginLeft: 6,
  },

  star: {
    marginLeft: 20,
  },

  price: {
    fontSize: 18,
    fontWeight: '700',
  },

  priceSub: {
    color: '#777',
    fontSize: 14,
  },
});
