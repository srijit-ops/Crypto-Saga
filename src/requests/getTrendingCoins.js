import { rootAxios } from "../utils/axios";

export const getTrendingCoins=()=>{
    rootAxios.get("/search/trending")
}