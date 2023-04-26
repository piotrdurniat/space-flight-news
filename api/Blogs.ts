import { Blog } from "../types/Blog";
import SpaceFlightNewsApi from "./SpaceFlightNewsApi";

export class Blogs {
  static async getAll() {
    const { data } = await SpaceFlightNewsApi.get<Blog[]>("v3/blogs/");
    return data;
  }

  static async getById(id: string) {
    const { data } = await SpaceFlightNewsApi.get<Blog>(`v3/blogs/${id}/`);
    return data;
  }

  static async searchBySummary(query: string) {
    const { data } = await SpaceFlightNewsApi.get<Blog[]>("v3/blogs/", {
      params: {
        summary_contains: query,
      },
    });
    return data;
  }

  static async searchByTitle(query: string) {
    const { data } = await SpaceFlightNewsApi.get<Blog[]>("v3/blogs/", {
      params: {
        title_contains: query,
      },
    });
    return data;
  }

  static async getMatching(query: string) {
    const responses = await Promise.all([Blogs.searchByTitle(query), Blogs.searchBySummary(query)]);
    return responses.flat();
  }
}
