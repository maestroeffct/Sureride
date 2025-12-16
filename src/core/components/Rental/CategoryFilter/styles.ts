import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },

  active: {
    backgroundColor: '#000',
    borderColor: '#000',
  },

  text: {
    color: '#444',
    fontWeight: '600',
  },

  textActive: {
    color: '#fff',
  },
});
