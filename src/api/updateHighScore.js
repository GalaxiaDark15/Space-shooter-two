import axios from 'axios';
import { API_URL } from '../constants';

/**
 * Make api request for all the users' scores
 * @returns
 */

 export default function updateHighScore(id) {
    const url = API_URL + "/update-score";
    return axios.put(url, {
      data: {
        _id: id,
      },
    });
  }
  