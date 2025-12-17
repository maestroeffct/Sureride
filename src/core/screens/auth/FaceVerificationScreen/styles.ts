import { StyleSheet } from 'react-native';

import { getThemeColors } from '@/core/theme/colors';

export const createStyles = (colors: ReturnType<typeof getThemeColors>) =>
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
