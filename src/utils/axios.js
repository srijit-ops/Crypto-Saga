import axios from "axios";

export const rootAxios= axios.create({
    baseURL:"https://api.coingecko.com/api/v3",
})