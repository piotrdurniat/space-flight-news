import { useEffect } from "react";
import { View, Text } from "react-native";

export default function ReportsScreen() {
  useEffect(() => {
    const fetchReports = async () => {};
  }, []);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Text>Reports</Text>
    </View>
  );
}
