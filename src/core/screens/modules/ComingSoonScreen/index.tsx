import React, { useMemo } from 'react';
import { Text, View } from 'react-native';

import { createStyles } from './styles';
import { useThemeColors } from '@/core/theme/colors';
import ScreenWrapper from '@/core/components/ScreenWrapper';

export function ComingSoonScreen() {
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Coming soon</Text>
        <Text style={styles.subtitle}>
          This module will be enabled after we finish auth integration and the
          Car Rental launch. Switch tabs to explore other modules.
        </Text>
      </View>
    </ScreenWrapper>
  );
}

export type ComingSoonStylesColors = ReturnType<typeof useThemeColors>;
