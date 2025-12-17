import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import CarRental from '@/core/screens/modules/Rental/HomeScreen';
import RemixIcon from 'react-native-remix-icon';

const Tab = createBottomTabNavigator();

export function CarRentalTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
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
        component={View}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <RemixIcon name="search-fill" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="MyRentals"
        component={View}
        options={{
          tabBarLabel: 'Rentals',
          tabBarIcon: ({ color, size }) => (
            <RemixIcon name="car-line" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={View}
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
