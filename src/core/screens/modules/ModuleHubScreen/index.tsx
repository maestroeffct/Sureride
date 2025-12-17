import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Pressable, Text, View } from 'react-native';

import { createStyles } from './styles';
import { ModuleCard, ModuleHubNav } from '@/core/types/custom';
import { useThemeColors } from '@/core/theme/colors';
import ScreenWrapper from '@/core/components/ScreenWrapper';

const modules: ModuleCard[] = [
  {
    key: 'car-rental',
    title: 'Car Rental',
    description: 'Search, filter, upload license, sign rental agreement.',
    status: 'available',
  },
  {
    key: 'rideshare',
    title: 'Rideshare',
    description: 'On-demand rides, tracking, SOS, promo codes.',
    status: 'coming-soon',
  },
  {
    key: 'mechanic',
    title: 'Mobile Mechanic',
    description: 'Book nearby mechanics with live status updates.',
    status: 'coming-soon',
  },
  {
    key: 'insurance',
    title: 'Insurance',
    description: 'Compare, buy, renew, and submit claims in-app.',
    status: 'coming-soon',
  },
  {
    key: 'auto-deal',
    title: 'Auto Deal Marketplace',
    description: 'List, browse, negotiate, and book inspections.',
    status: 'coming-soon',
  },
  {
    key: 'spare-parts',
    title: 'Spare Parts',
    description: 'Search by model, shop storefronts, track deliveries.',
    status: 'coming-soon',
  },
  {
    key: 'diagnostics',
    title: 'Remote Diagnostics',
    description: 'OBD-II, error codes, health reports, book mechanics.',
    status: 'coming-soon',
  },
];

export function ModuleHubScreen() {
  const navigation = useNavigation<ModuleHubNav>();
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const handlePress = (moduleKey: string) => {
    if (moduleKey === 'car-rental') {
      navigation.navigate('CarRental');
    }
  };

  return (
    <ScreenWrapper
      padded
      statusBarStyle="dark-content"
      statusBarBackground={colors.background}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Choose a module</Text>
        <Text style={styles.subtitle}>
          Unified auth and profile; pick a mobility experience to continue.
        </Text>
      </View>
      <FlatList
        data={modules}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(item.key)}
            disabled={item.status === 'coming-soon'}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
              item.status === 'coming-soon' && styles.cardDisabled,
            ]}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text
                style={[
                  styles.badge,
                  item.status === 'available'
                    ? styles.badgeActive
                    : styles.badgeMuted,
                ]}
              >
                {item.status === 'available' ? 'Live' : 'Soon'}
              </Text>
            </View>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        contentContainerStyle={styles.list}
      />
    </ScreenWrapper>
  );
}
export type ModuleHubStylesColors = ReturnType<typeof useThemeColors>;
