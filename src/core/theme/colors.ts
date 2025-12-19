import { ColorSchemeName, useColorScheme } from 'react-native';
import { ThemeColors } from '@/core/types/theme';

const darkColors: ThemeColors = {
  background: '#0B132B',
  surface: '#1C2541',
  card: '#3A506B',
  accent: '#5BC0BE',
  accentMuted: '#87D7D4',
  textPrimary: '#040404ff',
  textSecondary: '#C9D6E0',
  border: '#273451',
  warning: '#FF9F1C',
  success: '#2EC4B6',
  primaryColor: '#009688',
};

const lightColors: ThemeColors = {
  background: '#F2F2F2',
  surface: '#FFFFFF',
  card: '#E2E8F0',
  accent: '#009E9A',
  accentMuted: '#38B2AC',
  textPrimary: '#0F172A',
  textSecondary: '#475569',
  border: '#CBD5E1',
  warning: '#F59E0B',
  success: '#16A34A',
  primaryColor: '#009688',
};

export const themes = {
  light: lightColors,
  dark: darkColors,
};

export function getThemeColors(scheme: ColorSchemeName | null | undefined) {
  if (scheme === 'light') {
    return lightColors;
  }
  if (scheme === 'dark') {
    return darkColors;
  }
  return darkColors;
}

export function useThemeColors() {
  const scheme = useColorScheme();
  return getThemeColors(scheme);
}
