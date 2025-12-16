import * as React from 'react';
import { StatusBar, StatusBarStyle, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useThemeColors } from '@/core/theme/colors';
import { styles } from './styles';
import { ScreenProps } from '@/core/types/custom';

export default function ScreenWrapper({
  children,
  padded = true,
  statusBarStyle,
}: ScreenProps) {
  const colors = useThemeColors();

  const barStyle: StatusBarStyle =
    statusBarStyle ??
    (colors.background === '#0B132B' ? 'light-content' : 'dark-content');

  // const background = statusBarBackground ?? colors.background;

  return (
    <>
      <StatusBar
        barStyle={barStyle}
        backgroundColor="transparent"
        translucent={false}
      />

      <SafeAreaView
        edges={['bottom']}
        style={[styles.safeArea, { backgroundColor: colors.background }]}
      >
        <View
          style={[
            styles.container,
            { backgroundColor: colors.background },
            padded && styles.padded,
          ]}
        >
          {children}
        </View>
      </SafeAreaView>
    </>
  );
}
