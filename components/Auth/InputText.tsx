import { View, Text, KeyboardTypeOptions } from "react-native";
import React from "react";
import { Input } from "@rneui/themed";

type Props = {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  secure?: boolean;
  onUpdateValue: (val: string) => void;
  value: string;
  isInvalid?: boolean;
};

const InputText = ({
  placeholder,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}: Props) => {
  return (
    <View className="px-4 mt-4 w-full">
      <Input
        style={{
          backgroundColor: "#F7F8F9",
          fontSize: 14,
          padding: 4,
          marginTop: 4,
        }}
        containerStyle={{
          backgroundColor: "#F7F8F9",
          marginBottom: 2,
          borderWidth: 1,
          borderColor: "#E8ECF4",
          height: 56,
        }}
        inputContainerStyle={{
          borderBottomWidth: 0,
        }}
        inputStyle={{
          fontSize: 14,
        }}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
};

export default InputText;
