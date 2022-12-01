import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ReportsScreen from "./Reports/ReportsScreen";
import NavigationBar from "./NavigationBar";
import insets from "react-native/Libraries/Components/Touchable/Position";

export default function Main() {
  const insets = useSafeAreaInsets();

  return (
      <View style={styles.container}>
        <NavigationBar/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
       flex: 1
  },
})
