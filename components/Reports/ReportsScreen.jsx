import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import { Text } from "react-native-paper";
import { Reports } from "../../api/Reports";
import ReportCard from "./ReportCard";

export default function ReportsScreen() {
  const reports = useQuery(["reports"], async () => {
    const { data } = await Reports.getAll();
    return data;
  });

  return (
    <ScrollView>
      <Text
        variant="displayMedium"
        style={{ textAlign: "center", paddingBottom: 8 }}
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
