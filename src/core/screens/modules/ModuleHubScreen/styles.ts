import { StyleSheet } from 'react-native';

import { ThemeColors } from '../../../theme/colors';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    header: {
      marginBottom: 16,
      marginTop: 10,
    },
    title: {
      color: colors.textPrimary,
      fontSize: 26,
      fontWeight: '800',
    },
    subtitle: {
      color: colors.textSecondary,
      marginTop: 8,
      lineHeight: 20,
    },
    list: {
      paddingBottom: 24,
    },
    card: {
      backgroundColor: colors.surface,
      borderRadius: 14,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    cardPressed: {
      borderColor: colors.accent,
    },
    cardDisabled: {
      opacity: 0.6,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardTitle: {
      color: colors.textPrimary,
      fontSize: 18,
      fontWeight: '700',
    },
    cardDescription: {
      color: colors.textSecondary,
      marginTop: 8,
      lineHeight: 18,
    },
    badge: {
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 20,
      fontSize: 12,
      fontWeight: '700',
    },
    badgeActive: {
      backgroundColor: colors.accent,
      color: colors.background,
    },
    badgeMuted: {
      backgroundColor: colors.card,
      color: colors.textSecondary,
    },
  });
