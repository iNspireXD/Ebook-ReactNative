import { View, Text } from "react-native";
import React from "react";

type Props = {
  message: string;
};

const LoadingOverlay = ({ message }: Props) => {
  return (
    <View className="flex justify-center items-center">
      <Text>{message}</Text>
    </View>
  );
};

export default LoadingOverlay;
