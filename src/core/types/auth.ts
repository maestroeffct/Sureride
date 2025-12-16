export type AuthStatus = 'unauthenticated' | 'authenticated' | 'pendingProfile';

export type AuthUser = {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
};

export type AuthContextValue = {
  status: AuthStatus;
  user: AuthUser | null;
  signIn: (payload: {
    email?: string;
    phone?: string;
    password: string;
  }) => void;
  signUp: (payload: {
    email?: string;
    phone?: string;
    password: string;
    name?: string;
  }) => void;
  completeProfile: (payload: {
    licenseUrl?: string;
    idDocumentUrl?: string;
    faceVerified?: boolean;
  }) => void;
  logout: () => void;
  verifyOTP: () => void;
};
