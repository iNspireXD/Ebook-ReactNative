import { View, Text } from "react-native";
import React from "react";
import { DotProps } from "react-native-onboarding-swiper";

type Props = {
  selected: boolean;
  isLight: boolean;
};

const Pagination = ({ selected, isLight }: Props) => {
  return (
    <View className="right-28">
      {selected ? (
        <View className="bg-slate-700 h-2 w-8 rounded-sm mx-1 mb-4" />
      ) : (
        <View className="bg-gray-400 h-2 w-2 rounded-sm mx-0.5 mb-4" />
      )}
    </View>
  );
};

export default Pagination;
