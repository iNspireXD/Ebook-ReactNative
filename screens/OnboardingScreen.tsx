import { View, Text, SafeAreaView, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const doneHandler = () => {
    navigation.navigate("Login" as never); // update the type of the argument
  };

  return (
    <View className="flex-1">
      <Onboarding
        onDone={doneHandler}
        onSkip={doneHandler}
        containerStyles={{
          paddingHorizontal: 15,
        }}
        pages={[
          {
            backgroundColor: "#C6E3BA",
            titleStyles: {
              fontSize: 18,
              fontWeight: "bold",
            },
            subTitleStyles: {
              fontSize: 14,
            },
            image: (
              <View style={styles.lottie}>
                <LottieView
                  autoPlay
                  loop
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
            titleStyles: {
              fontSize: 18,
              fontWeight: "bold",
            },
            subTitleStyles: {
              fontSize: 14,
            },
            image: (
              <View style={styles.lottie}>
                <LottieView
                  autoPlay
                  loop
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
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
            },
            subTitleStyles: {
              fontSize: 14,
              color: "white",
            },
            image: (
              <View style={styles.lottie}>
                <LottieView
                  autoPlay
                  loop
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
