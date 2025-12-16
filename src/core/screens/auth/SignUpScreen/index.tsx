import React, { useMemo, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Screen from '../../../../core/components/Screen';
import { styles } from './styles';
import { AuthStackParamList } from '../../../types/navigation';
import { PrimaryButton } from '../../../components/PrimaryButton';
import { CustomInput } from '../../../components/CustomInput';

type Nav = StackNavigationProp<AuthStackParamList, 'SignUp'>;

export function SignUpScreen() {
  const navigation = useNavigation<Nav>();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  // VALIDATION LOGIC
  const isValid = useMemo(() => {
    return (
      name.trim().length > 2 &&
      phone.trim().length >= 10 &&
      password.trim().length >= 6 &&
      password === confirm
    );
  }, [name, phone, password, confirm]);

  return (
    <Screen padded={false} statusBarStyle="dark-content">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          {/* HEADER */}
          <Text style={styles.title}>Let’s Get started</Text>
          <Text style={styles.subtitle}>
            Sign up to start enjoying stress-free rides
          </Text>

          <CustomInput
            label="Your Name"
            placeholder="Full name"
            value={name}
            onChangeText={setName}
            leftIcon="user"
          />

          {/* Phone */}
          <CustomInput
            label="Phone Number"
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            phoneMode
          />

          {/* Password */}
          <CustomInput
            label="Password"
            placeholder="Input Password"
            value={password}
            onChangeText={setPassword}
            secure
            leftIcon="lock"
            helperText="Must include letter, number and a character"
          />

          {/* Confirm Password */}
          <CustomInput
            label="Confirm Password"
            placeholder="Re-enter Password"
            value={confirm}
            onChangeText={setConfirm}
            secure
            leftIcon="lock"
            helperText="Must match with above password"
          />

          <View style={styles.bottomCta}>
            <PrimaryButton
              label="Get Started"
              disabled={!isValid}
              onPress={() => console.log('Register')}
            />

            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <Text
                style={styles.footerLink}
                onPress={() => navigation.navigate('SignIn')}
              >
                Log In
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
