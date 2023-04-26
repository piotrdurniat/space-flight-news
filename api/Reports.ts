import { Report } from "../types/Report";
import SpaceFlightNewsApi from "./SpaceFlightNewsApi";

export class Reports {
  static async getAll() {
    const { data } = await SpaceFlightNewsApi.get<Report[]>("v3/reports/");
    return data;
  }

  static async getById(id: string) {
    const { data } = await SpaceFlightNewsApi.get<Report>(`v3/reports/${id}`);
    return data;
  }

  static async searchBySummary(query: string) {
    const { data } = await SpaceFlightNewsApi.get<Report[]>("v3/reports/", {
      params: {
        summary_contains: query,
      },
    });
    return data;
  }

  static async searchByTitle(query: string) {
    const { data } = await SpaceFlightNewsApi.get<Report[]>("v3/reports/", {
      params: {
        title_contains: query,
      },
    });
    return data;
  }

  static async getMatching(query: string) {
    const responses = await Promise.all([
      Reports.searchByTitle(query),
      Reports.searchBySummary(query),
    ]);
    return responses.flat();
  }
}
