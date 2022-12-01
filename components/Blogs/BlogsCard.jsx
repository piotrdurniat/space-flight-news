import * as React from "react";
import { Text, Button, Card, Title, Paragraph } from "react-native-paper";
import * as Linking from "expo-linking";
import { formatDate } from "../../util/formatter";
import LaunchesList from "../LaunchesList";

const BlogCard = ({
  blog: { title, imageUrl, summary, publishedAt, updatedAt, url, launches },
}) => {
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
        <Text
          variant="labelMedium"
          style={{ marginTop: 16 }}
        >{`Published at: ${publishedAtStr}`}</Text>
        <Text variant="labelMedium">{`Updated at: ${updatedAtStr}`}</Text>
        {launches.length !== 0 && <LaunchesList launchIds={launches} />}
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => Linking.openURL(url)}>Read more</Button>
      </Card.Actions>
    </Card>
  );
};

export default BlogCard;
