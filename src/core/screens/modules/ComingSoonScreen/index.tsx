import React, { useMemo } from 'react';
import { Text, View } from 'react-native';

import { Screen } from '../../../components/Screen';
import { useThemeColors } from '../../../theme/colors';
import { createStyles } from './styles';

export function ComingSoonScreen() {
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Coming soon</Text>
        <Text style={styles.subtitle}>
          This module will be enabled after we finish auth integration and the
          Car Rental launch. Switch tabs to explore other modules.
        </Text>
      </View>
    </Screen>
  );
}

export type ComingSoonStylesColors = ReturnType<typeof useThemeColors>;
