import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { createStyles, TEAL } from './styles';

export function SplashScreen() {
  const styles = createStyles();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={TEAL} />
    </SafeAreaView>
  );
}
