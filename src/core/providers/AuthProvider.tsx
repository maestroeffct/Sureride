import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { AuthContextValue, AuthStatus, AuthUser } from '@/core/types/auth';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>('unauthenticated');
  const [user, setUser] = useState<AuthUser | null>(null);

  const signIn: AuthContextValue['signIn'] = payload => {
    // TODO: Replace with API call and secure token storage.
    setUser({
      id: 'demo-user',
      email: payload.email,
      phone: payload.phone,
    });
    setStatus('authenticated');
  };

  const signUp: AuthContextValue['signUp'] = payload => {
    // TODO: Replace with API call and verification flows.
    setUser({
      id: 'pending-user',
      email: payload.email,
      phone: payload.phone,
      name: payload.name,
    });
    setStatus('pendingProfile');
  };

  const completeProfile: AuthContextValue['completeProfile'] = payload => {
    // TODO: Persist uploaded credentials and verification tokens.
    setUser(prev => ({
      ...(prev ?? { id: 'pending-user' }),
      ...payload,
    }));
    const isFaceVerified = payload.faceVerified ?? false;
    setStatus(isFaceVerified ? 'authenticated' : 'pendingProfile');
  };

  const logout = () => {
    setUser(null);
    setStatus('unauthenticated');
  };

  const verifyOTP = () => {
    // After verifying OTP, user is allowed into the app,
    // but still has incomplete profile.
    setStatus('authenticated');
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}
