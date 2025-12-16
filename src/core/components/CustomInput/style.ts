import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 56,
    backgroundColor: '#FAFAFA',
  },

  iconLeft: {
    marginRight: 12,
  },

  iconRight: {
    paddingHorizontal: 6,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  helper: {
    fontSize: 13,
    color: '#7A7A7A',
    marginTop: 6,
  },

  // PHONE MODE
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    height: 56,
    overflow: 'hidden',
  },

  phoneCode: {
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#E5E5E5',
    height: '100%',
  },

  phoneCodeText: {
    fontSize: 16,
    color: '#555',
  },

  phoneInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
  },
});
