import React, { useMemo, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';

import { PrimaryButton } from '../../../components/PrimaryButton';
import { Screen } from '../../../components/Screen';
import { useAuth } from '../../../providers/AuthProvider';
import { useThemeColors } from '../../../theme/colors';
import { ProfileStackParamList } from '../../../types/navigation';
import { createStyles } from './styles';

type Nav = StackNavigationProp<ProfileStackParamList, 'CompleteProfile'>;

export function CompleteProfileScreen() {
  const navigation = useNavigation<Nav>();
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
    <Screen>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({ ios: 'padding', android: undefined })}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Complete your profile</Text>
          <Text style={styles.subtitle}>
            Upload credentials to unlock rentals, mechanics, insurance, and more.
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
          <PrimaryButton label="Continue to face verification" onPress={handleContinue} />
          <PrimaryButton
            label="Log out"
            variant="outline"
            onPress={logout}
          />
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
export type CompleteProfileStylesColors = ReturnType<typeof useThemeColors>;
