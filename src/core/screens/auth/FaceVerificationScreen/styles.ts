import { StyleSheet } from 'react-native';

import { ThemeColors } from '../../../theme/colors';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      color: colors.textPrimary,
      fontSize: 26,
      fontWeight: '800',
    },
    subtitle: {
      color: colors.textSecondary,
      marginTop: 12,
      marginBottom: 18,
      lineHeight: 20,
    },
  });
