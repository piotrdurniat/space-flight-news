import { View } from "react-native";
import { Text } from "react-native-paper";
import { useQuery } from "react-query";
import { Launches } from "../../api/Lauches";

const LaunchesList = ({ launchIds }) => {
  const launches = useQuery(["launches", launchIds], async () => {
    const res = [];
    for (let { id } of launchIds) {
      const { data } = await Launches.getById(id);
      res.push(data);
    }
    return res;
  });

  if (launches.isError || launches.isLoading) return <View />;

  return (
    <View>
      <Text variant="labelLarge" style={{ marginTop: 8 }}>
        Launches
      </Text>
      {launches.data &&
        launches.data.map(({ name }, index) => (
          <Text variant="labelMedium" key={index}>{`\u2022 ${name}`}</Text>
        ))}
    </View>
  );
};

export default LaunchesList;
