import SpaceFlightNewsApi from "./SpaceFlightNewsApi";

export class Articles {
  static getAll() {
    return SpaceFlightNewsApi.get("v3/articles/");
  }
  static getById(id) {
    return SpaceFlightNewsApi.get(`v3/articles/${id}`);
  }
  static searchBySummary(query) {
    return SpaceFlightNewsApi.get("v3/articles/", {
      params: {
        summary_contains: query,
      },
    });
  }
  static searchByTitle(query) {
    return SpaceFlightNewsApi.get("v3/articles/", {
      params: {
        title_contains: query,
      },
    });
  }
}
