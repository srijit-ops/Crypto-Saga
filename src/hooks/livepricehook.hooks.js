import { useQuery } from "@tanstack/react-query";
import { getLivePrice } from "../requests/liveprice.requests";

export const useLivePrice= (query)=>{
    return useQuery(
        {
            queryKey:["liveprice", query],
            queryFn: async()=>{
                const response= await getLivePrice(query)
                console.log(response, "res from live price")
                return response.data
            },
            staleTime:60000
        }
    )
}