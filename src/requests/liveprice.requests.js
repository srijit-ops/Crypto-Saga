// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=10&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en


import { rootAxios } from "../utils/axios";

export const getLivePrice= async (query)=>{
    try{
        const response= await rootAxios.get(`/coins/markets?${query}`)
        console.log(response, "live price data")
        return response.data
    }
  catch(e){
    console.log(e,"error in live")
  }
}