import { axiosGet } from "../utils/axios";

const getTrendingCoinsAPI = async () => {
    const res = await axiosGet({
        url: "https://api.coingecko.com/api/v3/search/trending"
    });

    console.log(res, "trending response")
    return res;
}

export default getTrendingCoinsAPI;