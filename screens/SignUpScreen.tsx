import { View, Text, Image, ScrollView } from "react-native";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";
import { createUser } from "../utils/auth";
import LoadingOverlay from "../components/LoadingOverlay";

type Props = {};

const SignUpScreen = (props: Props) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user...." />;
  }

  return (
    <ScrollView style={SafeAreaViewAndroid.AndroidSafeArea}>
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
      <AuthContent onAuthenticate={signUpHandler} />
    </ScrollView>
  );
};

export default SignUpScreen;
