import { rootAxios } from "../utils/axios";

export const getCoinPrice = (query)=> rootAxios.get(`/simple/price?${query}`)
        
export const getTrendingCoins= ()=>rootAxios.get("/search/trending")