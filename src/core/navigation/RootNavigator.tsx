import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthNavigator } from '@/core/navigation/AuthNavigator';
import { MainNavigator } from '@/core/navigation/MainNavigator';
import { ProfileCompletionNavigator } from '@/core/navigation/ProfileCompletionNavigator';

import { RootStackParamList } from '@/core/types/navigation';
import { useAuth } from '@/core/providers/AuthProvider';

const Stack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const { status } = useAuth();

  const [stage, setStage] = useState<'splash' | 'logo' | 'app'>('splash');

  // SPLASH → LOGO
  useEffect(() => {
    const id = setTimeout(() => setStage('logo'), 800);
    return () => clearTimeout(id);
  }, []);

  // LOGO → APP
  useEffect(() => {
    if (stage !== 'logo') return;
    const id = setTimeout(() => setStage('app'), 900);
    return () => clearTimeout(id);
  }, [stage]);

  // ---------------- RENDER SPLASH & LOGO ----------------

  if (stage === 'splash') return <SplashScreen />;
  if (stage === 'logo') return <LogoScreen />;

  // ---------------- MAIN NAVIGATION ----------------
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {status === 'unauthenticated' && (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}

      {status === 'pendingProfile' && (
        <Stack.Screen
          name="ProfileCompletion"
          component={ProfileCompletionNavigator}
        />
      )}

      {status === 'authenticated' && (
        <Stack.Screen name="Main" component={MainNavigator} />
      )}
    </Stack.Navigator>
  );
}
