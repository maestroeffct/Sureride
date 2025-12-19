import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CarRentalTabs } from './RentalTabs';
import RemixIcon from 'react-native-remix-icon';
import { useThemeColors } from '@/core/theme/colors';

const Drawer = createDrawerNavigator();

export default function RentalDrawerNavigator() {
  const colors = useThemeColors();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.surface,
          width: 280,
        },
        drawerActiveTintColor: colors.primaryColor,
        drawerInactiveTintColor: colors.textSecondary,
        drawerLabelStyle: {
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={CarRentalTabs}
        options={{
          drawerIcon: ({ color, size }) => (
            <RemixIcon name="home-5-line" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="My Rentals"
        component={CarRentalTabs}
        options={{
          drawerIcon: ({ color, size }) => (
            <RemixIcon name="car-line" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={CarRentalTabs}
        options={{
          drawerIcon: ({ color, size }) => (
            <RemixIcon name="user-3-line" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
