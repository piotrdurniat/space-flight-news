import SpaceFlightNewsApi from "./SpaceFlightNewsApi";

export class Reports {
  static async getAll() {
    const { data } = await SpaceFlightNewsApi.get("v3/reports/");
    return data;
  }

  static async getById(id) {
    const { data } = await SpaceFlightNewsApi.get(`v3/reports/${id}`);
    return data;
  }

  static async searchBySummary(query) {
    const { data } = await SpaceFlightNewsApi.get("v3/reports/", {
      params: {
        summary_contains: query,
      },
    });
    return data;
  }

  static async searchByTitle(query) {
    const { data } = await SpaceFlightNewsApi.get("v3/reports/", {
      params: {
        title_contains: query,
      },
    });
    return data;
  }

  static async getMatching(query) {
    const responses = await Promise.all([
      Reports.searchByTitle(query),
      Reports.searchBySummary(query),
    ]);
    return responses.flat();
  }
}
