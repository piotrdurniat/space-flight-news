import { FC } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./components/Main";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <QueryClientProvider client={queryClient}>
          <Main />
          <StatusBar style="light" />
        </QueryClientProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
