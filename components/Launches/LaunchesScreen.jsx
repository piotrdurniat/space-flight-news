import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import { Text } from "react-native-paper";
import { Launches } from "../../api/Launches";
import LaunchesCard from "./LaunchesCard";
import theme from "../theme";

export default function LaunchesScreen() {
  const launches = useQuery(["launches"], Launches.getAllUpcoming);

  return (
    <ScrollView style={{ padding: 8, backgroundColor: theme.colors.background }}>
      <Text
        variant="displayMedium"
        style={{
          color: "white",
          textAlign: "center",
          paddingBottom: 8,
        }}
      >
        Launches
      </Text>
      {launches.isError ? (
        <Text>Error fetching launches.</Text>
      ) : launches.isLoading ? (
        <Text>Loading...</Text>
      ) : launches.data.results.length === 0 ? (
        <Text>No launches found.</Text>
      ) : (
        launches.data.results.map((launch, index) => <LaunchesCard launch={launch} key={index} />)
      )}
    </ScrollView>
  );
}
