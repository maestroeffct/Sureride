import { StyleSheet } from 'react-native';

export const BACKGROUND = '#D6D6D6';
export const TEAL = '#009E9A';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: BACKGROUND,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoBlock: {
      width: 260,
      height: 120,
      backgroundColor: TEAL,
    },
  });
