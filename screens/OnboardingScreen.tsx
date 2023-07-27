import { View, Dimensions, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import DoneButton from "../components/DoneButton";
import Pagination from "../components/Pagination";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { WelcomeStackParamList } from "../navigation/appNavigation";

type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  WelcomeStackParamList,
  "Onboarding"
>;

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();
  const doneHandler = () => {
    navigation.navigate("Login");
  };
  return (
    <View className="flex-1">
      <Onboarding
        DoneButtonComponent={(props) => (
          <DoneButton {...props} title="Get Started" />
        )}
        NextButtonComponent={(props) => <DoneButton {...props} title="Next" />}
        bottomBarHighlight={false}
        DotComponent={(props) => (
          <Pagination selected={props.selected} isLight={props.isLight} />
        )}
        onDone={doneHandler}
        // onSkip={doneHandler}
        showSkip={false}
        titleStyles={{
          fontSize: 18,
          fontWeight: "bold",
        }}
        subTitleStyles={{
          fontSize: 14,
        }}
        containerStyles={{
          paddingHorizontal: 15,
        }}
        pages={[
          {
            backgroundColor: "#C6E3BA",

            image: (
              <View style={styles.lottie}>
                <LottieView
                  autoPlay
                  loop={false}
                  source={require("../assets/animations/knowledge.json")}
                />
              </View>
            ),
            title: "You Seek Knowledge ?",
            subtitle:
              "Journey into the realms of wisdom and discovery with our Ebook App. Unleash the power of knowledge!",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  autoPlay
                  loop={false}
                  source={require("../assets/animations/library.json")}
                />
              </View>
            ),
            title: "You Need a Library",
            subtitle:
              "Your personal library awaits! Explore diverse genres and titles, all at your fingertips.",
          },
          {
            backgroundColor: "#a3c8e6",
            titleStyles: {
              color: "white",
            },
            subTitleStyles: {
              color: "white",
            },
            image: (
              <View style={styles.lottie}>
                <LottieView
                  autoPlay
                  loop={false}
                  source={require("../assets/animations/reading.json")}
                />
              </View>
            ),
            title: "Start Reading Now",
            subtitle:
              "Dive into captivating stories and adventures. Begin your reading journey instantly!",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  lottie: {
    height: width,
    width: width * 0.9,
  },
});
