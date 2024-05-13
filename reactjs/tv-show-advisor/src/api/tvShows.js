import axios from "axios";
import { FAKE_TV_SHOWS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { OPTIONS, BASE_URL } from "../config";

export class TvShowApi {
  static async fetchPoplars() {
    try {
      const response = await axios.get(`${BASE_URL}tv/popular`, {
        method: "GET",
        ...OPTIONS,
      });
      return response.data;
      // return FAKE_TV_SHOWS;
    } catch (error) {
      console.error(error);
    }
  }

  static async fetchRecommendation(tvShowId) {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/${tvShowId}/recommendations`,
        {
          method: "GET",
          ...OPTIONS,
        }
      );
      return response.data;
      // return FAKE_RECOMMENDATIONS;
    } catch (error) {
      console.error(error);
    }
  }

  static async fetchByTitle(title) {
    try {
      const response = await axios.get(`${BASE_URL}search/tv?query=${title}`, {
        method: "GET",
        ...OPTIONS,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
