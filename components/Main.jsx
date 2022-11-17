import * as React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ReportsScreen from "./Reports/ReportsScreen";

export default function Main() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ padding: 8, paddingTop: insets.top }}>
      <ReportsScreen />
    </View>
  );
}
