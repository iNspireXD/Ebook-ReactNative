import { View, Text, Image } from "react-native";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../navigation/RootNavigator";
import AuthForm from "../components/Auth/AuthForm";
import AuthContent from "../components/Auth/AuthContent";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootParamList,
  "Login"
>;

const LoginScreen = () => {
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
      <AuthContent isLogin onAuthenticate={() => {}} />
    </View>
  );
};

export default LoginScreen;
