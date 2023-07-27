import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import OnboardingScreen from "../screens/OnboardingScreen";

type RootParamList = {
  Onboarding: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
