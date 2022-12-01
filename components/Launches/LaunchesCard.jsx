import * as React from "react";
import { Text, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";
import * as Linking from "expo-linking";
import { formatDate } from "../../util/formatter";
import CountDownTimer from "./CountDownTimer";
const LaunchesCard = ({ launch: { name, pad, net, mission, rocket } }) => {
  const dateStr = new Date(net);
  const currentDate = new Date();
  const timeToStart = dateStr.getTime() - currentDate.getTime();
  let imageUrl;
  rocket.configuration.manufacturer.image_url
    ? (imageUrl = rocket.configuration.manufacturer.image_url)
    : (imageUrl =
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  const dataToPrint = formatDate(new Date(net)) + " " + pad.name;
  const mapUrl = pad.map_url;
  const wikiUrl = pad.wiki_url;
  return (
    <Card style={{ marginBottom: 16 }}>
      <Card.Content style={{ marginBottom: 16 }}>
        <Title style={{ textAlign: "center" }}>{name}</Title>
      </Card.Content>
      <Card.Cover style={{ marginBottom: 16 }} source={{ uri: imageUrl }} />
      <Card.Content>
        <Paragraph>{mission.description}</Paragraph>
        <Text
          style={{ textAlign: "center", marginBottom: -10 }}
          variant="labelMedium"
        >{`Time to start:`}</Text>
        <CountDownTimer time={timeToStart} />
        <Text
          style={{ textAlign: "center", marginTop: -10, marginBottom: 6 }}
          variant="labelMedium"
        >{`Date of launch:`}</Text>
        <Text style={{ textAlign: "center", fontSize: 16, color: "black" }} variant="labelMedium">
          {dataToPrint}
        </Text>
      </Card.Content>
      <Card.Actions style={styles.container}>
        <Button onPress={() => Linking.openURL(mapUrl)}>Show location </Button>
        {wikiUrl ? <Button onPress={() => Linking.openURL(wikiUrl)}>Show pad info </Button> : null}
      </Card.Actions>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    marginRight: "auto",
    marginLeft: "auto",
  },
});
export default LaunchesCard;
