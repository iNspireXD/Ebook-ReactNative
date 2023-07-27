import AuthStack from "./navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <AuthStack />
    </NavigationContainer>
  );
}
