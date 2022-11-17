import * as React from "react";
import { Text, Button, Card, Title, Paragraph } from "react-native-paper";
import * as Linking from "expo-linking";
import { formatDate } from "../../util/formatter";

const ReportCard = ({
  report: { title, imageUrl, summary, publishedAt, updatedAt, url },
}) => {
  const updatedAtStr = formatDate(new Date(updatedAt));
  const publishedAtStr = formatDate(new Date(publishedAt));

  return (
    <Card style={{ marginBottom: 8 }}>
      <Card.Content>
        <Title style={{ textAlign: "center" }}>{title}</Title>
      </Card.Content>
      <Card.Cover source={{ uri: imageUrl }} />
      <Card.Content>
        <Paragraph>{summary}</Paragraph>
        <Text
          variant="labelMedium"
          style={{ marginTop: 8 }}
        >{`Published at: ${publishedAtStr}`}</Text>
        <Text variant="labelMedium">{`Updated at: ${updatedAtStr}`}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => Linking.openURL(url)}>Read more</Button>
      </Card.Actions>
    </Card>
  );
};
export default ReportCard;
