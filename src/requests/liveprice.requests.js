
import { rootAxios } from "../utils/axios";

export const getLivePrice= (query)=> rootAxios.get(`/coins/markets?${query}`)

    
