import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import AuthForm from "./AuthForm";

type Props = {
  isLogin?: boolean;
  onAuthenticate: any;
};

type Credentials = {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

export type CredentialsCheck = {
  email: boolean;
  confirmEmail: boolean;
  password: boolean;
  confirmPassword: boolean;
};

const AuthContent = ({ isLogin, onAuthenticate }: Props) => {
  const [credentialsInvalid, setCredentialsInvalid] =
    useState<CredentialsCheck>({
      email: false,
      confirmEmail: false,
      password: false,
      confirmPassword: false,
    });

  function switchAuthModeHanlder(): void {
    //todo
  }

  function submitHandler(credentials: Credentials): void {
    let { email, confirmEmail, password, confirmPassword } = credentials;
    email = email.trim();
    password = password.trim();

    function validateEmail(email: string): boolean {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    }
    const emailIsValid = validateEmail(email);
    const passwordIsValid = password.length > 8;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Invalid input", "Please Check your entered credentials.");
      setCredentialsInvalid((prevState: CredentialsCheck) => ({
        ...prevState,
        email: !emailIsValid,
        confirmEmail: !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordsAreEqual,
      }));
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <AuthForm
      isLogin={isLogin}
      credentialsIsInvalid={credentialsInvalid}
      onSubmit={submitHandler}
    />
  );
};

export default AuthContent;
