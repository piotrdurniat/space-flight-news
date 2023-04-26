import { Text, Button, Card, Title, Paragraph } from "react-native-paper";
import Linking from "expo-linking";
import { formatDate } from "../../util/formatter";

const ReportCard = ({ report: { title, imageUrl, summary, publishedAt, updatedAt, url } }) => {
  const updatedAtStr = formatDate(new Date(updatedAt));
  const publishedAtStr = formatDate(new Date(publishedAt));

  return (
    <Card style={{ marginBottom: 16 }}>
      <Card.Content style={{ marginBottom: 16 }}>
        <Title style={{ textAlign: "center" }}>{title}</Title>
      </Card.Content>
      <Card.Cover style={{ marginBottom: 16 }} source={{ uri: imageUrl }} />
      <Card.Content>
        <Paragraph>{summary}</Paragraph>
        <Text variant="labelMedium" style={{ marginTop: 16 }}>
          Published at: ${publishedAtStr}
        </Text>
        <Text variant="labelMedium">Updated at: {updatedAtStr}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => Linking.openURL(url)}>Read more</Button>
      </Card.Actions>
    </Card>
  );
};
export default ReportCard;
