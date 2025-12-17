import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { createStyles } from './styles';
import { useAuth } from '@/core/providers/AuthProvider';
import { useThemeColors } from '@/core/theme/colors';
import ScreenWrapper from '@/core/components/ScreenWrapper';
import { PrimaryButton } from '@/core/components/PrimaryButton';
import { FaceVerificationNav } from '@/core/types/custom';

export function FaceVerificationScreen() {
  const navigation = useNavigation<FaceVerificationNav>();
  const { completeProfile } = useAuth();
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const handleVerify = () => {
    completeProfile({ faceVerified: true });
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Face verification</Text>
        <Text style={styles.subtitle}>
          We&apos;ll capture a short selfie video to secure your account and
          unlock all mobility modules. (Camera integration to be wired to the
          verification SDK.)
        </Text>
        <PrimaryButton label="Start verification" onPress={handleVerify} />
        <PrimaryButton
          label="Back to profile"
          variant="outline"
          onPress={() => navigation.navigate('CompleteProfile')}
        />
      </View>
    </ScreenWrapper>
  );
}
