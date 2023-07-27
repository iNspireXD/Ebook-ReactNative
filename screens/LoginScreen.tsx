import { View, Text, Image } from "react-native";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import Button from "../components/ui/Button";
type Props = {};

const LoginScreen = () => {
  return (
    <View
      style={SafeAreaViewAndroid.AndroidSafeArea}
      className="justify-content items-center"
    >
      {/* Header */}
      <View className="h-80 w-80 overflow-hidden mt-20">
        <Text className="text-center font-extrabold text-4xl text-slate-700">
          Fox Learn
        </Text>
        <Image
          source={require("../assets/logo.png")}
          className="w-full h-full"
        />
      </View>
      {/* login and signup buttons */}
      <View className="mt-10">
        <Button onPress={() => {}} customStyle="rounded-full w-80">
          Login
        </Button>
      </View>

      {/* footer */}
      <View className="h-40 w-full bg-green-800 absolute bottom-0"></View>
    </View>
  );
};

export default LoginScreen;
