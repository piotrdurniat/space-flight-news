import SpaceFlightNewsApi from "./SpaceFlightNewsApi";

export class Blogs {
  static getAll() {
    return SpaceFlightNewsApi.get("v3/blogs/");
  }
  static getById(id) {
    return SpaceFlightNewsApi.get(`v3/blogs/${id}/`);
  }
  static searchBySummary(query) {
    return SpaceFlightNewsApi.get("v3/blogs/", {
      params: {
        summary_contains: query,
      },
    });
  }
  static searchByTitle(query) {
    return SpaceFlightNewsApi.get("v3/blogs/", {
      params: {
        title_contains: query,
      },
    });
  }
}
