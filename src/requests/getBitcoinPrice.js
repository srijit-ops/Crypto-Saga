import { rootAxios } from "../utils/axios";

export const getBitcoinPrice = ({ids, vs_currencies, include_24hr_change})=>{
    rootAxios.get("simple/price",
    params:{
        ids: ids,
            vs_currencies: vs_currencies,
            include_24hr_change: include_24hr_change
    }
    )
}