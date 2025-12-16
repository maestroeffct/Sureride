import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProfileStackParamList } from '../types/navigation';
import { CompleteProfileScreen } from '../screens/auth/CompleteProfileScreen';
import { FaceVerificationScreen } from '../screens/auth/FaceVerificationScreen';

const Stack = createStackNavigator<ProfileStackParamList>();

export function ProfileCompletionNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} />
      <Stack.Screen name="FaceVerification" component={FaceVerificationScreen} />
    </Stack.Navigator>
  );
}
