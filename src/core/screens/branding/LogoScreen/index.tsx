import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { BACKGROUND, createStyles } from './styles';

export function LogoScreen() {
  const styles = createStyles();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={BACKGROUND} />
      <View style={styles.logoBlock} />
    </SafeAreaView>
  );
}
