import {
  GestureResponderEvent,
  StatusBarStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {
  AuthStackParamList,
  MainStackParamList,
  ProfileStackParamList,
} from './navigation';
import { StackNavigationProp } from '@react-navigation/stack';

// CUSTOM INPUT PROPS
export type CustomInputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;

  leftIcon?: string; // Feather icon name
  rightIcon?: string; // optional right icon
  secure?: boolean; // if true => password field
  helperText?: string; // below input
  keyboardType?: any;
  style?: any;

  phoneMode?: boolean; // if true => shows +234 dropdown and divider
};

// PRIMARY BUTTON PROPS
export type PrimaryButtonProps = {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  variant?: 'solid' | 'outline';
  fullWidth?: boolean;
  loading?: boolean;

  leftIcon?: string; // Feather icon name
  rightIcon?: string; // Feather icon name

  style?: ViewStyle;
  textStyle?: TextStyle;
};

// SCREENWRAPPER PROPS
export type ScreenProps = {
  children: React.ReactNode;
  padded?: boolean;
  statusBarStyle?: StatusBarStyle;
  statusBarBackground?: string;
};

export type CategoryFilterProps = {
  label: string;
  active?: boolean;
};

export type Slide = {
  id: string;
  kicker: string;
  title: string;
  image: any;
  icon: string;
};

export type ModuleCard = {
  key: string;
  title: string;
  description: string;
  status: 'available' | 'coming-soon';
};

export type Nav = StackNavigationProp<AuthStackParamList, 'SignUp'>;
export type SignInNav = StackNavigationProp<AuthStackParamList, 'SignIn'>;
export type OnboardingNav = StackNavigationProp<
  AuthStackParamList,
  'Onboarding'
>;
export type CompleteProfileNav = StackNavigationProp<
  ProfileStackParamList,
  'CompleteProfile'
>;

export type FaceVerificationNav = StackNavigationProp<
  ProfileStackParamList,
  'FaceVerification'
>;
export type ModuleHubNav = StackNavigationProp<MainStackParamList, 'ModuleHub'>;
