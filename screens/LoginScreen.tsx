import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import Button from "../components/ui/Button";
import InputText from "../components/ui/InputText";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../navigation/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/styles";
import AuthForm from "../components/Auth/AuthForm";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootParamList,
  "Login"
>;

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation<LoginScreenNavigationProp>();

  function updateInputValueHandler(
    inputType: string,
    enteredValue: string
  ): void {
    switch (inputType) {
      case "email":
        setEmail(enteredValue);
        break;
      case "password":
        setPassword(enteredValue);
        break;
    }
  }

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
          Welcome back! Glad to see you, Again!
        </Text>
      </View>
      <AuthForm isLogin />
    </View>
  );
};

export default LoginScreen;
