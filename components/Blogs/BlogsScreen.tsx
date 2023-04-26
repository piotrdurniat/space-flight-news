import { FC, useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import { Searchbar, Text } from "react-native-paper";
import { Blogs } from "../../api/Blogs";
import BlogCard from "./BlogsCard";
import theme from "../theme";

const BlogsScreen: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allBlogs = useQuery(["blogs"], Blogs.getAll);

  const matchingBlogs = useQuery(["matching-blogs", searchQuery], async () =>
    Blogs.getMatching(searchQuery)
  );

  const blogs = useMemo(
    () => (searchQuery !== "" ? matchingBlogs : allBlogs),
    [matchingBlogs, allBlogs]
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
        Blogs
      </Text>
      <Searchbar
        style={{ marginBottom: 8 }}
        placeholder="Search"
        onChangeText={query => setSearchQuery(query)}
        value={searchQuery}
      />
      {blogs.isError ? (
        <Text
          style={{
            color: "white",
          }}
        >
          Error fetching blogs.
        </Text>
      ) : blogs.isLoading ? (
        <Text
          style={{
            color: "white",
          }}
        >
          Loading...
        </Text>
      ) : blogs.data.length === 0 ? (
        <Text
          style={{
            color: "white",
          }}
        >
          No blogs found.
        </Text>
      ) : (
        blogs.data.map((blog, index) => <BlogCard blog={blog} key={index} />)
      )}
    </ScrollView>
  );
};

export default BlogsScreen;
