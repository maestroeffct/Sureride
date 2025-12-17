import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { TEAL } from './styles';

export function SplashScreen() {
  const styles = require('./styles').createStyles();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={TEAL} />
    </SafeAreaView>
  );
}
