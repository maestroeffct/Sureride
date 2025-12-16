import * as React from 'react';
import { useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
  useWindowDimensions,
} from 'react-native';

import Screen from '../../../components/Screen';
import { themes } from '../../../theme/colors';
import { styles } from './styles';
import { AuthStackParamList } from '../../../types/navigation';

type Nav = StackNavigationProp<AuthStackParamList, 'Onboarding'>;

type Slide = {
  id: string;
  kicker: string;
  title: string;
  image: any;
  icon: string;
};

const slides: Slide[] = [
  {
    id: 'mobility',
    kicker: 'Mobility',
    title: 'Go Anywhere With Confidence',
    icon: '🚗',
    image: require('../../../../assets/images/onboard1.jpg'),
  },
  {
    id: 'auto-service',
    kicker: 'Auto Service',
    title: 'Auto Care,\nDelivered to You',
    icon: '🛞',
    image: require('../../../../assets/images/onboard2.jpg'),
  },
  {
    id: 'safety',
    kicker: 'Safety & Assurance',
    title: 'Your Safety.\nOur Priority.',
    icon: '✅',
    image: require('../../../../assets/images/onboard3.jpg'),
  },
];

export function OnboardingScreen() {
  const navigation = useNavigation<Nav>();
  const { width } = useWindowDimensions();

  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems[0]?.index != null) {
        setActiveIndex(viewableItems[0].index);
      }
    },
  ).current;

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 60,
  };

  const colors = themes.light;

  return (
    <Screen
      padded={false}
      statusBarStyle="dark-content"
      statusBarBackground="#ffffffff"
    >
      <FlatList
        data={slides}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        contentContainerStyle={{ paddingTop: 0 }}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <View style={{ flex: 1 }}>
              {/* HEADER */}
              <View style={styles.header}>
                <View style={styles.iconBubble}>
                  <Text style={styles.icon}>{item.icon}</Text>
                </View>

                <Text style={styles.kicker}>{item.kicker}</Text>
                <Text style={styles.title}>{item.title}</Text>
              </View>

              {/* PROGRESS */}
              <View style={styles.progress}>
                {slides.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.progressBar,
                      activeIndex === index && {
                        backgroundColor: colors.accent,
                      },
                    ]}
                  />
                ))}
              </View>

              {/* IMAGE */}
              <Image source={item.image} style={styles.heroImage} />
            </View>

            {/* BOTTOM CARD WITH BUTTON */}
            <View style={styles.bottomCard}>
              <TouchableOpacity
                style={styles.ctaButton}
                onPress={() => navigation.navigate('SignIn')}
              >
                <Text style={styles.ctaLabel}>Get Started</Text>
                <Text style={styles.ctaArrow}>→</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </Screen>
  );
}
