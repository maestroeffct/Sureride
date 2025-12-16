import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { PrimaryButton } from '@/core/components/PrimaryButton';
import { AuthStackParamList } from '@/core/types/navigation';

import { styles } from './styles';
import ScreenWrapper from '@/core/components/ScreenWrapper';
import { useAuth } from '@/core/providers/AuthProvider';
// type Nav = StackNavigationProp<AuthStackParamList, 'VerifyOTP'>;

type Props = {
  route: RouteProp<AuthStackParamList, 'VerifyOTP'>;
};

export function VerifyOTPScreen({ route }: Props) {
  // const navigation = useNavigation<Nav>();
  const phone = route.params?.phone || '';
  const { verifyOTP } = useAuth();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  // Refs for auto-focus
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next box automatically
    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const isValid = otp.every(d => d.trim().length === 1);

  return (
    <ScreenWrapper padded={false} statusBarStyle="dark-content">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          {/* Header */}
          <Text style={styles.title}>Verify Your Number</Text>
          <Text style={styles.subtitle}>Enter OTP sent to {phone}</Text>

          {/* OTP BOXES */}
          <View style={styles.otpRow}>
            {otp.map((digit, index) => {
              const isFilled = digit.trim().length === 1;

              return (
                <TextInput
                  key={index}
                  ref={el => {
                    inputs.current[index] = el;
                  }}
                  value={digit}
                  onChangeText={text => handleChange(text, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  style={[
                    styles.otpBox,
                    isFilled && styles.otpBoxFilled, // <-- Apply green only when filled
                  ]}
                />
              );
            })}
          </View>

          {/* Bottom CTA */}
          <View style={styles.bottomCta}>
            <PrimaryButton
              label="Verify"
              disabled={!isValid}
              onPress={() => verifyOTP()}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}
