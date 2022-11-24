import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import { Text } from "react-native-paper";
import { Reports } from "../../api/Reports";
import ReportCard from "./ReportCard";
import theme from "../theme";

export default function ReportsScreen() {
  const reports = useQuery(["reports"], async () => {
    const { data } = await Reports.getAll();
    return data;
  });

  return (
    <ScrollView
      style={{ padding: 8, backgroundColor: theme.colors.background }}
    >
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
      {reports.isError && <Text>Error fetching reports.</Text>}

      {reports.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        reports.data.map((report, index) => (
          <ReportCard report={report} key={index} />
        ))
      )}
    </ScrollView>
  );
}
