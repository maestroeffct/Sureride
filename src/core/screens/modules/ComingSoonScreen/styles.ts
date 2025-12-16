import { StyleSheet } from 'react-native';

import { ThemeColors } from '../../../theme/colors';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    title: {
      color: colors.textPrimary,
      fontSize: 24,
      fontWeight: '800',
    },
    subtitle: {
      color: colors.textSecondary,
      marginTop: 8,
      lineHeight: 18,
      maxWidth: '90%',
    },
  });
