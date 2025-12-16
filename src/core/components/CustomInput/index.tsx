import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { CustomInputProps } from '@/core/types/custom';
import RemixIcon from 'react-native-remix-icon';

export function CustomInput({
  label,
  placeholder,
  value,
  onChangeText,
  leftIcon,
  rightIcon,
  secure = false,
  helperText,
  keyboardType = 'default',
  phoneMode = false,
  style,
}: CustomInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[{ marginBottom: 20 }, style]}>
      {label && <Text style={styles.label}>{label}</Text>}

      {/* PHONE MODE */}
      {phoneMode ? (
        <View style={styles.phoneRow}>
          <TouchableOpacity style={styles.phoneCode}>
            <Text style={styles.phoneCodeText}>+234 ▾</Text>
          </TouchableOpacity>

          <TextInput
            placeholder={placeholder}
            style={styles.phoneInput}
            value={value}
            keyboardType="phone-pad"
            onChangeText={onChangeText}
          />
        </View>
      ) : (
        <View style={styles.inputWrapper}>
          {leftIcon && (
            <RemixIcon
              name={leftIcon as any}
              size={20}
              color="#999"
              style={styles.iconLeft}
            />
          )}

          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secure && !showPassword}
            keyboardType={keyboardType}
            style={styles.input}
          />

          {/* PASSWORD TOGGLE */}
          {secure && (
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.iconRight}
            >
              <RemixIcon
                name={showPassword ? 'eye-off-line' : 'eye-line'}
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          )}

          {/* OPTIONAL RIGHT ICON */}
          {!secure && rightIcon && (
            <RemixIcon
              name={rightIcon as any}
              size={20}
              color="#999"
              style={styles.iconRight}
            />
          )}
        </View>
      )}

      {helperText && <Text style={styles.helper}>{helperText}</Text>}
    </View>
  );
}
