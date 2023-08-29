import { API_RM } from "../Constants/Api.constants";

class RickAndMortyService {
    async getAllCharacters() {
        const response = await fetch(API_RM.CHARACTERS());
        // Interceptor
        return response.json();
    }
    async getCharacterByID(id) {
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        // Interceptor
        return response.json();
    }
}
export default new RickAndMortyService();