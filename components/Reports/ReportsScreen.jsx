import { useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import { Searchbar, Text } from "react-native-paper";
import { Reports } from "../../api/Reports";
import ReportCard from "./ReportCard";
import theme from "../theme";

export default function ReportsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const allReports = useQuery(["reports"], async () => {
    const { data } = await Reports.getAll();
    return data;
  });

  const matchingReports = useQuery(["matching-reports", searchQuery], async () => {
    const { data: reportsByTitle } = await Reports.searchByTitle(searchQuery);
    const { data: reportsBySummary } = await Reports.searchBySummary(searchQuery);
    return [...reportsBySummary, ...reportsByTitle];
  });

  const onChangeSearch = query => setSearchQuery(query);

  const reports = useMemo(
    () => (searchQuery !== "" ? matchingReports : allReports),
    [matchingReports, allReports]
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
        Reports
      </Text>
      <Searchbar
        style={{ marginBottom: 8 }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {reports.isError ? (
        <Text>Error fetching reports.</Text>
      ) : reports.isLoading ? (
        <Text>Loading...</Text>
      ) : reports.data.length === 0 ? (
        <Text>No reports found.</Text>
      ) : (
        reports.data.map((report, index) => <ReportCard report={report} key={index} />)
      )}
    </ScrollView>
  );
}
