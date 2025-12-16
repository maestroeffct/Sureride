export type RootStackParamList = {
  Auth: undefined;
  ProfileCompletion: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  VerifyOTP: { phone: string; purpose: 'signIn' | 'signUp' };
};

export type ProfileStackParamList = {
  CompleteProfile: undefined;
  FaceVerification: undefined;
};

export type MainTabParamList = {
  ModuleHub: undefined;
  CarRental: undefined;
  Rideshare: undefined;
  Mechanic: undefined;
  Insurance: undefined;
  AutoDeal: undefined;
  SpareParts: undefined;
  Diagnostics: undefined;
};

export type CarRentalStackParamList = {
  CarRentalHome: undefined;
  VehicleDetails: { vehicleId: string };
  UploadLicense: undefined;
  RentalCheckout: { vehicleId: string };
  RentalAgreement: { agreementId?: string };
  ActiveRental: { rentalId?: string };
};

export type MainStackParamList = {
  ModuleHub: undefined;

  CarRental: undefined;
  Rideshare: undefined;
  Mechanic: undefined;
  Insurance: undefined;
  AutoDeal: undefined;
  SpareParts: undefined;
  Diagnostics: undefined;
};
