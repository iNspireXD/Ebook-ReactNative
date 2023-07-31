import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import LandingScreen from "../screens/LandingScreen";
import LoginScreen from "../screens/LoginScreen";

export type RootParamList = {
  Onboarding: undefined;
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export const AuthenticatedStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
