import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  // HEADER
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#009688',
    textAlign: 'center',
    marginTop: 20,
  },

  subtitle: {
    fontSize: 16,
    color: '#4A4A4A',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 32,
  },

  // LABEL
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },

  // INPUT WRAPPERS
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

  inputIcon: {
    fontSize: 20,
    marginRight: 12,
    color: '#9E9E9E',
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  // PHONE INPUT
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    height: 56,
    marginBottom: 4,
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
    fontSize: 16,
    paddingHorizontal: 12,
    color: '#333',
  },

  helper: {
    fontSize: 13,
    color: '#7A7A7A',
    marginTop: 6,
    marginBottom: 20,
  },

  // EYE ICON
  eyeIconWrapper: {
    paddingHorizontal: 8,
  },

  eyeIcon: {
    fontSize: 18,
    color: '#7A7A7A',
  },

  // BUTTON
  button: {
    backgroundColor: '#009688',
    height: 60,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonDisabled: {
    backgroundColor: '#C9C9C9',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  // FOOTER
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },

  footerText: {
    fontSize: 15,
    color: '#444',
  },

  footerLink: {
    fontSize: 15,
    color: '#009688',
    fontWeight: '600',
  },
  bottomCta: {
    paddingTop: 50,
    paddingBottom: 0,
  },
});
