import React, { useMemo } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { useThemeColors } from '../../theme/colors';
import { createStyles } from './styles';
import { PrimaryButtonProps } from '@/core/types/custom';
import RemixIcon from 'react-native-remix-icon';

export function PrimaryButton({
  label,
  onPress,
  disabled = false,
  variant = 'solid',
  fullWidth = true,
  loading = false,

  leftIcon,
  rightIcon,

  style,
  textStyle,
}: PrimaryButtonProps) {
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const isOutline = variant === 'outline';

  const iconColor = isOutline ? colors.textPrimary : '#fff';

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.button,
        fullWidth && { width: '100%' },
        isOutline && styles.outline,
        disabled && styles.disabled,
        style,
      ]}
    >
      {/* LEFT ICON */}
      {leftIcon && !loading && (
        <RemixIcon
          name={leftIcon as any}
          size={18}
          color={iconColor}
          style={styles.leftIcon}
        />
      )}

      {/* LABEL OR LOADING */}
      {loading ? (
        <ActivityIndicator
          size="small"
          color={isOutline ? colors.textPrimary : '#fff'}
        />
      ) : (
        <Text
          style={[styles.label, isOutline && styles.labelOutline, textStyle]}
        >
          {label}
        </Text>
      )}

      {/* RIGHT ICON */}
      {rightIcon && !loading && (
        <RemixIcon
          name={rightIcon as any}
          size={18}
          color={iconColor}
          style={styles.rightIcon}
        />
      )}
    </TouchableOpacity>
  );
}
