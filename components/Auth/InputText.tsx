import { View, Text, KeyboardTypeOptions } from "react-native";
import React, { useState } from "react";
import { Icon, Input } from "@rneui/themed";
import { IconNode } from "@rneui/base";

type Props = {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  secure?: boolean;
  onUpdateValue: (val: string) => void;
  value: string;
  isInvalid?: boolean;
  icon?: IconNode;
  errorMessage?: string;
};

const InputText = ({
  placeholder,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  icon,
  errorMessage,
}: Props) => {
  return (
    <View className="px-4 my-3 w-full">
      <Input
        errorStyle={{
          color: "#f0817f",
          marginTop: 6,
        }}
        errorMessage={isInvalid ? errorMessage : ""}
        rightIcon={icon}
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
          height: 54,
          borderRadius: 8,
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
