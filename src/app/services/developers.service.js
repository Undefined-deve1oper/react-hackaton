import { async } from "q";
import httpService from "./http.service";

const developersEndPoint = "developers/";

const developersService = {
    fetchAll: async () => {
        const { data } = await httpService.get(developersEndPoint);
        return data;
    },
    getDeveloperById: async (developerId) => {
        const { data } = await httpService.get(
            developersEndPoint + developerId
        );
        return data;
    },
    createDeveloper: async (developerId, payload) => {
        const { data } = httpService.put(
            developersEndPoint + developerId,
            payload
        );
        return data;
    }
};

export default developersService;
