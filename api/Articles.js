import SpaceFlightNewsApi from "./SpaceFlightNewsApi";

export class Articles {
  static async getAll() {
    const { data } = await SpaceFlightNewsApi.get("v3/articles/");
    return data;
  }

  static async getById(id) {
    const { data } = await SpaceFlightNewsApi.get(`v3/articles/${id}`);
    return data;
  }

  static async searchBySummary(query) {
    const { data } = await SpaceFlightNewsApi.get("v3/articles/", {
      params: {
        summary_contains: query,
      },
    });
    return data;
  }

  static async searchByTitle(query) {
    const { data } = await SpaceFlightNewsApi.get("v3/articles/", {
      params: {
        title_contains: query,
      },
    });
    return data;
  }

  static async getMatching(query) {
    const responses = await Promise.all([
      Articles.searchByTitle(query),
      Articles.searchBySummary(query),
    ]);
    return responses.flat();
  }
}
