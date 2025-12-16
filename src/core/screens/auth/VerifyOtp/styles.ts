import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 10,
    color: '#009688',
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 40,
  },

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    marginTop: 10,
  },

  bottomCta: {
    marginTop: 'auto',
    paddingBottom: 30,
  },

  otpBox: {
    width: 50,
    height: 60,
    borderWidth: 2,
    borderColor: '#ccc', // <-- Default GRAY border
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 22,
    color: '#333',
  },

  otpBoxFilled: {
    borderColor: '#009688', // <-- Green when filled
  },
});
