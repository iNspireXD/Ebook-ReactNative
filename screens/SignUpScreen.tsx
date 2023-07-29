import { View, Text, Image } from "react-native";
import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";

type Props = {};

const SignUpScreen = (props: Props) => {
  return (
    <View style={SafeAreaViewAndroid.AndroidSafeArea}>
      <View className="items-center mt-20">
        <Image
          className="h-20 w-20"
          resizeMode="contain"
          source={require("../assets/Foxlearn.png")}
        />
        <Text className="font-bold text-lg text-slate-600">FoxLearn</Text>
      </View>
      <View className="mt-8 flex items-start">
        <Text className="text-slate-600 ml-4 font-bold text-base">
          Hello! Register to get started
        </Text>
      </View>
      <AuthForm />
    </View>
  );
};

export default SignUpScreen;
