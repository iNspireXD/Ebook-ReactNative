import { View, Text, Image, TouchableOpacity } from "react-native";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import Button from "../components/ui/Button";
import { Colors } from "../constants/styles";
type Props = {};

const LandingScreen = () => {
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
        <Button onPress={() => {}} customStyle="rounded-md w-[350px]">
          Login
        </Button>
        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: Colors.accent100, fontWeight: "bold" }}>
              Create a new user.
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* footer */}
      <View
        className="h-[200px] absolute rounded-t-[35px] w-full bottom-0 items-center"
        style={{ backgroundColor: Colors.primary200 }}
      >
        <Button
          onPress={() => {}}
          customStyle="bg-white w-[350px] rounded-md mt-8 mb-4"
          textStyle="text-black font-bold"
        >
          Sign in with google
        </Button>

        <Text className="text-center mt-4 text-white mx-6">
          By clicking on login you agree to our
          <Text className="font-bold"> Terms of Service </Text>
          and
          <Text className="font-bold"> Privacy Policy.</Text>
        </Text>
      </View>
    </View>
  );
};

export default LandingScreen;
