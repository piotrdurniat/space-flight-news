import LaunchLibraryApi from "./LaunchLibraryApi";

export class Launches {
  static async getAllUpcoming() {
    const { data } = await LaunchLibraryApi.get("2.2.0/launch/upcoming/", {
      params: {
        mode: "detailed",
      },
    });
    return data;
  }
  static async getById(id) {
    const { data } = await LaunchLibraryApi.get(`2.2.0/launch/${id}`);
    return data;
  }
  static async search(query) {
    const { data } = await LaunchLibraryApi.get("2.2.0/launch/upcoming?mode=detailed", {
      params: {
        query: query,
      },
    });
    return data;
  }
}
