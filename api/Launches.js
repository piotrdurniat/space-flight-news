import LaunchLibraryApi from "./LaunchLibraryApi";

export class Launches {
  static getAllUpcoming() {
    return LaunchLibraryApi.get("2.2.0/launch/upcoming?mode=detailed");
  }
  static getById(id) {
    return LaunchLibraryApi.get(`2.2.0/launch/${id}`);
  }
  static search(query) {
    return LaunchLibraryApi.get("2.2.0/launch/upcoming?mode=detailed", {
      params: {
        query: query,
      },
    });
  }
}
