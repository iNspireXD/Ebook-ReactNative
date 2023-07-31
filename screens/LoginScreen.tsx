import { View, Text, Image, Alert } from "react-native";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../navigation/RootNavigator";
import AuthForm from "../components/Auth/AuthForm";
import AuthContent from "../components/Auth/AuthContent";
import { useContext, useState } from "react";
import { loginUser } from "../utils/auth";
import LoadingOverlay from "../components/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootParamList,
  "Login"
>;

const LoginScreen = () => {
  const [islogging, setIslogging] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signInHanlder({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    setIslogging(true);
    try {
      const token = await loginUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication Failed!",
        " Could not log you in. Please try again"
      );
    }
    setIslogging(false);
  }

  if (islogging) {
    return <LoadingOverlay message="Logging......" />;
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
      <AuthContent isLogin onAuthenticate={signInHanlder} />
    </View>
  );
};

export default LoginScreen;
