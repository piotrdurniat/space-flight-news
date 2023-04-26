import { View } from "react-native";
import { Text } from "react-native-paper";
import { useQuery } from "react-query";
import { Launches } from "../api/Launches";

const LaunchesList = ({ launchIds }) => {
  const ids = launchIds.map(({ id }) => id);

  const launches = useQuery(["launches", launchIds], async () => Launches.getByIds(ids));

  return (
    <View>
      {launches.isError ? (
        <Text>Error fetching launches.</Text>
      ) : launches.isLoading ? (
        <Text>Loading...</Text>
      ) : launches.data.length === 0 ? null : (
        <>
          <Text variant="labelLarge" style={{ marginTop: 8 }}>
            Launches
          </Text>
          {launches.data.map((launch, index) => (
            <Text variant="labelMedium" key={index}>{`\u2022 ${launch.name}`}</Text>
          ))}
        </>
      )}
    </View>
  );
};

export default LaunchesList;
