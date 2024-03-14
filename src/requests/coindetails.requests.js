import { rootAxios } from "../utils/axios";

export const getCoinPrice = async (query)=>{
    try{
        const response= await rootAxios.get(`/simple/price?${query}`)
        console.log(response, "get coin price data")
        return response.data
    }catch(e){
        console.log(e, "error in getcoin")
    }
   
}

export const getTrendingCoins= async ()=>{
    try{
        const response= await rootAxios.get("/search/trending")
        console.log(response, "get trending coin data")
       return response.data
    }catch(e){
        console.log(e, "error in trendcoin")
    }
    
}