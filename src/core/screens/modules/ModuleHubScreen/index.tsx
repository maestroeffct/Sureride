import React, { useMemo } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Pressable, Text, View } from 'react-native';

import { Screen } from '../../../components/Screen';
import { useThemeColors } from '../../../theme/colors';
import { MainStackParamList } from '../../../types/navigation';
import { createStyles } from './styles';

type Nav = StackNavigationProp<MainStackParamList, 'ModuleHub'>;

type ModuleCard = {
  key: string;
  title: string;
  description: string;
  status: 'available' | 'coming-soon';
};

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
  const navigation = useNavigation<Nav>();
  const colors = useThemeColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const handlePress = (moduleKey: string) => {
    if (moduleKey === 'car-rental') {
      navigation.navigate('CarRental');
    }
  };

  return (
    <Screen>
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
    </Screen>
  );
}
export type ModuleHubStylesColors = ReturnType<typeof useThemeColors>;
