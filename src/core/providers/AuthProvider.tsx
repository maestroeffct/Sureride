import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';

import { AuthContextValue, AuthStatus, AuthUser } from '@/core/types/auth';
import {
  persistAuthState,
  restoreAuthState,
  clearAuthState,
} from '@/utils/localStorage';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>('unauthenticated');
  const [user, setUser] = useState<AuthUser | null>(null);
  const [hydrating, setHydrating] = useState(true);

  // 🔹 Restore auth state on app start
  useEffect(() => {
    const restore = async () => {
      const saved = await restoreAuthState<{
        status: AuthStatus;
        user: AuthUser | null;
      }>();

      if (saved) {
        setStatus(saved.status);
        setUser(saved.user);
      }

      setHydrating(false);
    };

    restore();
  }, []);

  // 🔹 Persist auth state on change
  useEffect(() => {
    if (hydrating) return;
    persistAuthState({ status, user });
  }, [status, user, hydrating]);

  const signIn: AuthContextValue['signIn'] = payload => {
    setUser({
      id: 'demo-user',
      email: payload.email,
      phone: payload.phone,
    });
    setStatus('authenticated');
  };

  const signUp: AuthContextValue['signUp'] = payload => {
    setUser({
      id: 'pending-user',
      email: payload.email,
      phone: payload.phone,
      name: payload.name,
    });
    setStatus('pendingProfile');
  };

  const completeProfile: AuthContextValue['completeProfile'] = payload => {
    setUser(prev => ({
      ...(prev ?? { id: 'pending-user' }),
      ...payload,
    }));

    const isFaceVerified = payload.faceVerified ?? false;
    setStatus(isFaceVerified ? 'authenticated' : 'pendingProfile');
  };

  const verifyOTP = () => {
    setStatus('authenticated');
  };

  const logout = () => {
    setUser(null);
    setStatus('unauthenticated');
    clearAuthState();
  };

  const value = useMemo(
    () => ({
      status,
      user,
      signIn,
      signUp,
      completeProfile,
      logout,
      verifyOTP,
    }),
    [status, user],
  );

  // ⛔ Prevent rendering until hydration is done
  if (hydrating) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}
