import SpaceFlightNewsApi from "./SpaceFlightNewsApi";

export class Blogs {
  static async getAll() {
    const { data } = await SpaceFlightNewsApi.get("v3/blogs/");
    return data;
  }

  static async getById(id) {
    const { data } = await SpaceFlightNewsApi.get(`v3/blogs/${id}/`);
    return data;
  }

  static async searchBySummary(query) {
    const { data } = await SpaceFlightNewsApi.get("v3/blogs/", {
      params: {
        summary_contains: query,
      },
    });
    return data;
  }

  static async searchByTitle(query) {
    const { data } = await SpaceFlightNewsApi.get("v3/blogs/", {
      params: {
        title_contains: query,
      },
    });
    return data;
  }

  static async getMatching(query) {
    const responses = await Promise.all([Blogs.searchByTitle(query), Blogs.searchBySummary(query)]);
    return responses.flat();
  }
}
