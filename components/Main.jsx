import * as React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import NavigationBar from "./NavigationBar";
import theme from "./theme";

export default function Main() {
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
}
