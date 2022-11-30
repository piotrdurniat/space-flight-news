import LauchLibraryApi from "./LauchLibraryApi";

export class Launches {
  static getAll() {
    return LauchLibraryApi.get("2.2.0/launch/");
  }
  static getById(id) {
    return LauchLibraryApi.get(`2.2.0/launch/${id}/`);
  }
  static search(query) {
    return LauchLibraryApi.get("2.2.0/launch/", {
      params: {
        query: query,
      },
    });
  }
}
