import { useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import { Searchbar, Text } from "react-native-paper";
import { Articles } from "../../api/Articles";
import ArticleCard from "./ArticleCard";
import theme from "../theme";

const ArticlesScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allArticles = useQuery(["articles"], async () => {
    const { data } = await Articles.getAll();
    return data;
  });

  const matchingArticles = useQuery(["matching-articles", searchQuery], async () => {
    const { data: articlesByTitle } = await Articles.searchByTitle(searchQuery);
    const { data: articlesBySummary } = await Articles.searchBySummary(searchQuery);
    return [...articlesBySummary, ...articlesByTitle];
  });

  const onChangeSearch = query => setSearchQuery(query);

  const articles = useMemo(
    () => (searchQuery !== "" ? matchingArticles : allArticles),
    [matchingArticles, allArticles]
  );

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
        Articles
      </Text>
      <Searchbar
        style={{ marginBottom: 8 }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {articles.isError && <Text>Error fetching articles.</Text>}

      {articles.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        articles.data.map((article, index) => <ArticleCard article={article} key={index} />)
      )}
    </ScrollView>
  );
};

export default ArticlesScreen;
