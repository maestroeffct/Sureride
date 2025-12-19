import { StyleSheet } from 'react-native';

export const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      backgroundColor: '#FFFFFF',
    },

    header: {
      marginTop: 40,
      marginBottom: 50,
      alignItems: 'center',
    },

    title: {
      fontSize: 28,
      fontWeight: '700',
      color: colors.accent, // teal
      marginBottom: 6,
    },

    subtitle: {
      fontSize: 15,
      color: colors.textPrimary,
      textAlign: 'center',
    },

    forgotWrapper: {
      alignItems: 'flex-end',
      marginTop: -10,
      marginBottom: 20,
    },

    forgotText: {
      color: colors.accent,
      fontWeight: '500',
    },

    bottomCta: {
      paddingBottom: 30,
    },

    footerRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 16,
    },

    footerText: {
      color: colors.textPrimary,
    },

    footerLink: {
      color: colors.accent,
      fontWeight: '600',
    },
  });
