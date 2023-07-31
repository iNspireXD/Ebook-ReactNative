import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

type Props = {
  message: string;
};

const LoadingOverlay = ({ message }: Props) => {
  return (
    <View className="flex justify-center items-center p-32">
      <Text className="text-base mb-3">{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingOverlay;
