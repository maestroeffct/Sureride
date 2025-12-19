import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 38, // 🔑 fixes vertical alignment
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,

    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',

    justifyContent: 'center',
    alignItems: 'center',
  },

  active: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },

  text: {
    fontSize: 14, // 🔑 explicit font size
    color: '#374151', // darker, clearer
    fontWeight: '600',
    lineHeight: 18,
  },

  textActive: {
    color: '#FFFFFF',
  },
});
