import { StyleSheet } from 'react-native';

export const createStyles = (colors: any) =>
  StyleSheet.create({
    button: {
      height: 56,
      borderRadius: 40,
      backgroundColor: '#009688',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingHorizontal: 20,
    },

    label: {
      color: '#fff',
      fontSize: 17,
      fontWeight: '600',
    },

    // OUTLINE VARIANT
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.primary,
    },
    labelOutline: {
      color: colors.primary,
    },

    // DISABLED STATE
    disabled: {
      backgroundColor: '#CFCFCF',
      borderColor: '#CFCFCF',
    },

    leftIcon: {
      marginRight: 8,
    },

    rightIcon: {
      marginLeft: 8,
    },
  });
