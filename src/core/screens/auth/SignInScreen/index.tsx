import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Screen from '../../../components/Screen';
import { CustomInput } from '../../../components/CustomInput';
import { PrimaryButton } from '../../../components/PrimaryButton';

import { AuthStackParamList } from '../../../types/navigation';
import { useThemeColors } from '../../../theme/colors';
import { createStyles } from './styles';

type Nav = StackNavigationProp<AuthStackParamList, 'SignIn'>;

export function SignInScreen() {
  const navigation = useNavigation<Nav>();
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Validation
  const isValid = useMemo(() => {
    return phone.trim().length >= 10 && password.trim().length >= 6;
  }, [phone, password]);

  return (
    <Screen padded={false} statusBarStyle="dark-content">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Log in and pick up right where you left
            </Text>
          </View>

          {/* FORM */}
          <View style={{ flex: 1 }}>
            <CustomInput
              label="Phone Number"
              placeholder="Phone Number"
              value={phone}
              onChangeText={setPhone}
              phoneMode
            />

            <CustomInput
              label="Password"
              placeholder="Input Password"
              secure
              leftIcon="lock"
              value={password}
              onChangeText={setPassword}
            />

            <View style={styles.forgotWrapper}>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* BOTTOM CTA */}
          <View style={styles.bottomCta}>
            <PrimaryButton
              label="Log In"
              disabled={!isValid}
              onPress={() =>
                navigation.navigate('VerifyOTP', {
                  phone: `+234${phone}`,
                  purpose: 'signIn',
                })
              }
            />

            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Don’t have an account? </Text>
              <Text
                style={styles.footerLink}
                onPress={() => navigation.navigate('SignUp')}
              >
                Create Account
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
