import { useQuery } from "@tanstack/react-query"
import { getCoinPrice, getTrendingCoins } from "../requests/coindetails.requests"

export const useSimplePrice= (query)=>{
    return useQuery({
        queryKey:["simpleprice"],
        queryFn: getCoinPrice(query)
    })
}

export const useTrendingCoins= ()=>{
    return useQuery({
        queryKey:["trendingcoins"],
        queryFn: getTrendingCoins
    })
}