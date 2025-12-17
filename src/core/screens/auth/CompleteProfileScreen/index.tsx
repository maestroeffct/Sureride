import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';

import { createStyles } from './styles';
import { useAuth } from '@/core/providers/AuthProvider';
import { useThemeColors } from '@/core/theme/colors';
import ScreenWrapper from '@/core/components/ScreenWrapper';
import { PrimaryButton } from '@/core/components/PrimaryButton';
import { CompleteProfileNav } from '@/core/types/custom';

export function CompleteProfileScreen() {
  const navigation = useNavigation<CompleteProfileNav>();
  const { completeProfile, user, logout } = useAuth();
  const [licenseNumber, setLicenseNumber] = useState('');
  const [idDocument, setIdDocument] = useState('');
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const handleContinue = () => {
    completeProfile({
      licenseUrl: licenseNumber,
      idDocumentUrl: idDocument,
      faceVerified: false,
    });
    navigation.navigate('FaceVerification');
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({ ios: 'padding', android: undefined })}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Complete your profile</Text>
          <Text style={styles.subtitle}>
            Upload credentials to unlock rentals, mechanics, insurance, and
            more.
          </Text>
          {user?.email ? (
            <Text style={styles.meta}>Signed in as {user.email}</Text>
          ) : null}
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Driver&apos;s license number</Text>
          <TextInput
            placeholder="ABC-123-45"
            placeholderTextColor={colors.textSecondary}
            value={licenseNumber}
            onChangeText={setLicenseNumber}
            style={styles.input}
          />
          <Text style={styles.label}>National ID / Passport</Text>
          <TextInput
            placeholder="Upload document reference"
            placeholderTextColor={colors.textSecondary}
            value={idDocument}
            onChangeText={setIdDocument}
            style={styles.input}
          />
          <PrimaryButton
            label="Continue to face verification"
            onPress={handleContinue}
          />
          <PrimaryButton label="Log out" variant="outline" onPress={logout} />
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}
export type CompleteProfileStylesColors = ReturnType<typeof useThemeColors>;
