import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationContainer from "./components/NavigationContainer";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <View>
          <NavigationContainer />
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
