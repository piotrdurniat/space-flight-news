import { useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import { Searchbar, Text } from "react-native-paper";
import { Blogs } from "../../api/Blogs";
import BlogCard from "./BlogsCard";
import theme from "../theme";

const BlogsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allBlogs = useQuery(["blogs"], async () => {
    const { data } = await Blogs.getAll();
    return data;
  });

  const matchingBlogs = useQuery(["matching-blogs", searchQuery], async () => {
    const { data: blogsByTitle } = await Blogs.searchByTitle(searchQuery);
    const { data: blogsBySummary } = await Blogs.searchBySummary(searchQuery);
    return [...blogsBySummary, ...blogsByTitle];
  });

  const onChangeSearch = query => setSearchQuery(query);

  const blogs = useMemo(
    () => (searchQuery !== "" ? matchingBlogs : allBlogs),
    [matchingBlogs, allBlogs]
  );

  console.log(blogs);

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
        Blogs
      </Text>
      <Searchbar
        style={{ marginBottom: 8 }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {blogs.isError && <Text>Error fetching blogs.</Text>}

      {blogs.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        blogs.data.map((blog, index) => <BlogCard blog={blog} key={index} />)
      )}
    </ScrollView>
  );
};

export default BlogsScreen;
