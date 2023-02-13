import axios from "axios"
import { BASE_URL , API_KEY_PARAM } from "../config";

export class TVShowAPI {
    static async fetchPopulars() {
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        console.log(response.data.results);
        return response.data.results;
    }

    static async fetchRecomendations(tvshowId){
        const response = await axios.get(`${BASE_URL}tv/${tvshowId}/recommendations${API_KEY_PARAM}`);
        console.log(response.data.results);
        return response.data.results;
    }

    static async fetchByTitle(title){
        const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`);
        console.log(response.data.results);
        return response.data.results;
    }
}
