import axios from "axios";
import { API_URL } from "../constants";

/**
 * Make api request for all the users' scores
 * @returns
 */
export default function deleteHighScore(id) {
  const url = API_URL + "/delete-score";
  return axios.delete(url, {
    data: {
      _id: id,
    },
  });
}
