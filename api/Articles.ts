import SpaceFlightNewsApi from "./SpaceFlightNewsApi";
import { Article } from "../types/Article";

export class Articles {
  static async getAll() {
    const { data } = await SpaceFlightNewsApi.get<Article[]>("v3/articles/");
    return data;
  }

  static async getById(id: string) {
    const { data } = await SpaceFlightNewsApi.get<Article>(`v3/articles/${id}`);
    return data;
  }

  static async searchBySummary(query: string) {
    const { data } = await SpaceFlightNewsApi.get<Article>("v3/articles/", {
      params: {
        summary_contains: query,
      },
    });
    return data;
  }

  static async searchByTitle(query: string) {
    const { data } = await SpaceFlightNewsApi.get<Article>("v3/articles/", {
      params: {
        title_contains: query,
      },
    });
    return data;
  }

  static async getMatching(query: string) {
    const responses = await Promise.all([
      Articles.searchByTitle(query),
      Articles.searchBySummary(query),
    ]);
    return responses.flat();
  }
}
