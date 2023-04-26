import { FC, useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import { Searchbar, Text } from "react-native-paper";
import { Reports } from "../../api/Reports";
import ReportCard from "./ReportCard";
import theme from "../theme";

const ReportsScreen: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allReports = useQuery(["reports"], Reports.getAll);

  const matchingReports = useQuery(["matching-reports", searchQuery], async () =>
    Reports.getMatching(searchQuery)
  );

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
        onChangeText={setSearchQuery}
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
};

export default ReportsScreen;
