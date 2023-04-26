import { FC } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import theme from "./theme";
import NavigationBar from "./NavigationBar";

const Main: FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: theme.colors.background,
      }}
    >
      <NavigationBar />
    </View>
  );
};

export default Main;
