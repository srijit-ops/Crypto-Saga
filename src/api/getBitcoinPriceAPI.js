import { axiosGet } from "../utils/axios";

const getBitcoinPriceAPI = async () => {
    const res = await axiosGet({
        url: "https://api.coingecko.com/api/v3/simple/price",
        params:{
            ids: 'bitcoin',
    vs_currencies: 'inr,usd',
    include_24hr_change: true
        }
    });

    console.log(res, "price response")
    return res;
}

export default getBitcoinPriceAPI;