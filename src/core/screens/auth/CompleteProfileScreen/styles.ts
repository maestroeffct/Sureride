import { StyleSheet } from 'react-native';

import { ThemeColors } from '../../../theme/colors';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      marginTop: 12,
      marginBottom: 16,
    },
    title: {
      color: colors.textPrimary,
      fontSize: 26,
      fontWeight: '800',
    },
    subtitle: {
      color: colors.textSecondary,
      marginTop: 6,
      lineHeight: 20,
    },
    meta: {
      color: colors.accentMuted,
      marginTop: 8,
    },
    form: {
      marginTop: 12,
    },
    label: {
      color: colors.textPrimary,
      marginBottom: 6,
      marginTop: 10,
    },
    input: {
      backgroundColor: colors.surface,
      color: colors.textPrimary,
      paddingHorizontal: 14,
      paddingVertical: 12,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.border,
    },
  });
