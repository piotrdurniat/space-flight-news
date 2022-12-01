import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import { Text } from "react-native-paper";
import { Launches } from "../../api/Launches";
import LaunchesCard from "./LaunchesCard";

export default function LaunchesScreen() {
  const launches = useQuery(["launches"], async () => {
    const { data } = await Launches.getAllUpcoming();
    return data;
  });

  return (
    <ScrollView>
      <Text
        variant="displayMedium"
        style={{
          color: "white",
          textAlign: "center",
          paddingBottom: 8,
        }}
      >
        Reports
      </Text>
      {launches.isError && <Text>Error fetching reports.</Text>}

      {launches.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        launches.data.results.map((launch, index) => (
          <LaunchesCard launch={launch} key={index} />
        ))
      )}
    </ScrollView>
  );
}
