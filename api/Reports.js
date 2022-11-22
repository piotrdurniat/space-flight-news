import SpaceFlightNewsApi from "./SpaceFlightNewsApi";

export class Reports {
  static getAll() {
    return SpaceFlightNewsApi.get("v3/reports/");
  }
  static getById(id) {
    return SpaceFlightNewsApi.get(`v3/reports/${id}`);
  }
  static searchBySummary(query) {
    return SpaceFlightNewsApi.get("v3/reports/", {
      params: {
        summary_contains: query,
      },
    });
  }
  static searchByTitle(query) {
    return SpaceFlightNewsApi.get("v3/reports/", {
      params: {
        title_contains: query,
      },
    });
  }
}
