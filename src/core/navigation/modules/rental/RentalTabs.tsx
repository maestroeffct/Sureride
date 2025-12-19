import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RemixIcon from 'react-native-remix-icon';

import CarRental from '@/core/screens/modules/Rental/HomeScreen';
import { useThemeColors } from '@/core/theme/colors';

const Tab = createBottomTabNavigator();

export function CarRentalTabs() {
  const colors = useThemeColors();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: '#9CA3AF',

        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="RentalHome"
        component={CarRental}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <RemixIcon name="home-5-fill" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={CarRental}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <RemixIcon name="search-fill" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="MyRentals"
        component={CarRental}
        options={{
          tabBarLabel: 'Rentals',
          tabBarIcon: ({ color, size }) => (
            <RemixIcon name="car-line" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={CarRental}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <RemixIcon name="user-3-line" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
