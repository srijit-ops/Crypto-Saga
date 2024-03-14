import { useQuery } from "@tanstack/react-query";
import { getLivePrice } from "../requests/liveprice.requests";

export const useLivePrice= (query)=>{
    return useQuery(
        {
            queryKey:["liveprice"],
            queryFn: getLivePrice(query)
        }
    )
}