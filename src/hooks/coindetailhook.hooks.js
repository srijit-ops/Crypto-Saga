import { useQuery } from "@tanstack/react-query"
import { getCoinPrice, getTrendingCoins } from "../requests/coindetails.requests"

export const useSimplePrice= (query)=>{
    return useQuery({
        queryKey:["simpleprice"],
        queryFn: async ()=>{
            const response= await getCoinPrice(query)
            console.log(response.data)
            return response.data
        },
        staleTime:60000
    })
}

export const useTrendingCoins= ()=>{
    return useQuery({
        queryKey:["trendingcoins"],
        queryFn: async ()=>{
            const response= await getTrendingCoins()
            console.log(response.data)
            return response.data
        },
        staleTime:60000
    })
}