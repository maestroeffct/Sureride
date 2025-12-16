import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ModuleHubScreen } from '../screens/modules/ModuleHubScreen';

import { ComingSoonScreen } from '../screens/modules/ComingSoonScreen';

import { MainStackParamList } from '../types/navigation';
import RentalNavigator from './modules/rental/RentalNavigator';

const Stack = createStackNavigator<MainStackParamList>();

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="CarRental"
    >
      {/* MAIN HUB */}
      <Stack.Screen name="ModuleHub" component={ModuleHubScreen} />

      {/* MODULE NAVIGATORS */}
      <Stack.Screen name="CarRental" component={RentalNavigator} />
      <Stack.Screen name="Rideshare" component={ComingSoonScreen} />
      <Stack.Screen name="Mechanic" component={ComingSoonScreen} />
      <Stack.Screen name="Insurance" component={ComingSoonScreen} />
      <Stack.Screen name="AutoDeal" component={ComingSoonScreen} />
      <Stack.Screen name="SpareParts" component={ComingSoonScreen} />
      <Stack.Screen name="Diagnostics" component={ComingSoonScreen} />
    </Stack.Navigator>
  );
}
