import { AuthStack, AuthenticatedStack } from "./navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { useContext } from "react";

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
