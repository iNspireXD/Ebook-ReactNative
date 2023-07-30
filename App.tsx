import AuthStack from "./navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AuthContextProvider from "./store/auth-context";
export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <StatusBar />
        <AuthStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
