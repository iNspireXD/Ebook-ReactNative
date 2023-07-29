import { View, Text } from "react-native";
import React, { useState } from "react";
import InputText from "./InputText";
import Button from "../ui/Button";
import { Icon } from "@rneui/themed";
type Props = {
  isLogin?: boolean;
  onSubmit: () => void;
  credentialsIsValid: boolean;
};

const AuthForm = ({ isLogin, onSubmit, credentialsIsValid }: Props) => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState<string>("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] =
    useState<string>("");

  const [passwordHidden, setPasswordHidden] = useState<boolean>(true);
  const [confirmPasswordHidden, setConfirmPasswordHidden] =
    useState<boolean>(true);

  //function to update the input
  function updateInputValueHandler(
    inputType: string,
    enteredValue: string
  ): void {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  return (
    <View className="flex items-center">
      <InputText
        placeholder="Enter your email"
        onUpdateValue={updateInputValueHandler.bind(this, "email")}
        value={enteredEmail}
        keyboardType="email-address"
      />
      {!isLogin && (
        <InputText
          placeholder="Confirm your email address"
          onUpdateValue={updateInputValueHandler.bind(this, "confirmEmail")}
          value={enteredConfirmEmail}
          keyboardType="email-address"
        />
      )}
      <InputText
        placeholder="Enter your password"
        onUpdateValue={updateInputValueHandler.bind(this, "password")}
        secure={passwordHidden ? true : false}
        value={enteredPassword}
        icon={
          passwordHidden ? (
            <Icon
              activeOpacity={1}
              name="eye"
              type="feather"
              size={20}
              onPress={() => setPasswordHidden(false)}
            />
          ) : (
            <Icon
              name="eye-off"
              type="feather"
              size={20}
              onPress={() => setPasswordHidden(true)}
            />
          )
        }
      />
      {!isLogin && (
        <InputText
          placeholder="Confirm your password"
          onUpdateValue={updateInputValueHandler.bind(this, "confirmPassword")}
          value={enteredConfirmPassword}
          secure={confirmPasswordHidden ? true : false}
          icon={
            confirmPasswordHidden ? (
              <Icon
                activeOpacity={1}
                name="eye"
                type="feather"
                size={20}
                onPress={() => setConfirmPasswordHidden(false)}
              />
            ) : (
              <Icon
                name="eye-off"
                type="feather"
                size={20}
                onPress={() => setConfirmPasswordHidden(true)}
              />
            )
          }
        />
      )}
      <View className="mt-4">
        <Button onPress={() => {}} customStyle="rounded-md w-[350px]">
          {isLogin ? "Login" : "Register"}
        </Button>
      </View>
    </View>
  );
};

export default AuthForm;
