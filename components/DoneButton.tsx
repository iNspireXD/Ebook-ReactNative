import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  title: String;
};

const DoneButton = (props: Props) => {
  return (
    <TouchableOpacity
      {...props}
      className="bg-slate-700 right-[16px] mb-4 h-10 w-40 px-4 rounded-md justify-center items-center"
    >
      <Text className="text-white text-md">{props.title}</Text>
    </TouchableOpacity>
  );
};

export default DoneButton;
