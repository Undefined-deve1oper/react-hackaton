import { async } from "q";
import httpService from "./http.service";

const developersEndPoint = "developers/";

const developersService = {
    fetchAll: async () => {
        const { data } = await httpService.get(developersEndPoint);
        console.log("ALL developers: ", data);
        return data;
    },
    getDeveloperById: async (developerId) => {
        const { data } = await httpService.get(
            developersEndPoint + developerId
        );
        console.log("Developer by Id: ", data);
        return data;
    },
    createDeveloper: async (developerId, payload) => {
        const { data } = httpService.put(
            developersEndPoint + developerId,
            payload
        );
        console.log("NEW developer");
        return data;
    }
};

export default developersService;
