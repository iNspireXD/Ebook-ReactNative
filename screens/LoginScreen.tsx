import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import Button from "../components/ui/Button";
import InputText from "../components/ui/InputText";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../navigation/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/styles";

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
      <View className="px-4">
        <Text className="mt-8 mb-4 mx-2 font-bold text-slate-600 text-base">
          Welcome Back
        </Text>
        <InputText
          value={email}
          placeholder="Email"
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
        />
        <InputText
          value={password}
          placeholder="Password"
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          secure={true}
        />
        <Button onPress={() => {}} customStyle="mt-4">
          Login
        </Button>
        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={{ color: Colors.accent100, fontWeight: "bold" }}>
              Create a new user.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
