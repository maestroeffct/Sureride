import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { CategoryFilterProps } from '@/core/types/custom';

export default function CategoryFilter({
  label,
  active = false,
}: CategoryFilterProps) {
  return (
    <TouchableOpacity
      style={[styles.container, active && styles.active]}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, active && styles.textActive]}>{label}</Text>
    </TouchableOpacity>
  );
}
