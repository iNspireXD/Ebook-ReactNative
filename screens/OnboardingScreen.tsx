import { View, Dimensions, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const doneHandler = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <View className="flex-1">
      <Onboarding
        bottomBarHighlight={false}
        onDone={doneHandler}
        onSkip={doneHandler}
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
