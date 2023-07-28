import React from "react";
import { Input } from "@rneui/themed";

type Props = {
  placeholder: string;
  secure?: boolean;
  onUpdateValue: (value: string) => void;
  value: string;
};

const InputText = ({ placeholder, secure, onUpdateValue, value }: Props) => {
  return (
    <Input
      onChangeText={onUpdateValue}
      value={value}
      secureTextEntry={secure}
      placeholder={placeholder}
      containerStyle={{
        width: "100%",
        height: 50,
        marginBottom: 16,
      }}
      inputStyle={{
        fontSize: 14,
      }}
    />
  );
};

export default InputText;
