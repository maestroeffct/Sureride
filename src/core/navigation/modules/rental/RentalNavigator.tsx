import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { CarRentalTabs } from './RentalTabs';
import RentalDrawerNavigator from './RentalDrawer';
import CarRental from '@/core/screens/modules/Rental/HomeScreen';
import CarTypeListingScreen from '@/core/screens/modules/Rental/CarTypeListing';
import CarDetailsScreen from '@/core/screens/modules/Rental/CarDetailsScreen';

const Stack = createStackNavigator();

const RentalNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="RentalTabs" component={CarRentalTabs} /> */}
      <Stack.Screen name="RentalDrawer" component={RentalDrawerNavigator} />
      <Stack.Screen name="RentalHome" component={CarRental} />
      <Stack.Screen name="CarTypeListing" component={CarTypeListingScreen} />
      <Stack.Screen name="CarDetails" component={CarDetailsScreen} />
    </Stack.Navigator>
  );
};

export default RentalNavigator;
