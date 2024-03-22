import React, { useState } from "react";
import { serialize } from "../../utils/paramsAppenderFunc";
import Loader from "../../components/common/Loader";
import {
  useTrendingCoins,
  useSimplePrice,
} from "../../hooks/coindetailhook.hooks";
import { useLivePrice } from "../../hooks/livepricehook.hooks";
import { useParams } from "react-router-dom";
import CoinPreviewComponent from "../../components/coindetailComponents/coinPreview/CoinPreviewComponent";
import TrendingCoinsComponent from "../../components/coindetailComponents/trendingCoins/TrendingCoinsComponent";
import Error from "../../components/common/Error";

function CoinDetails() {
  const { id: coinId } = useParams(); //useparams will return an object from the route which is {id:'btc'}
  // console.log(coinId, "nav check")

  const [statQuery, setStatQuery] = useState({
    vs_currency: "usd",
    ids: coinId,
    order: "market_cap_desc",
    per_page: 1,
    page: 1,
    sparkline: true,
    price_change_percentage: ["1h", "24h", "7d"],
    locale: "en",
  });

  const [priceQuery, setPriceQuery] = useState({
    ids: coinId,
    vs_currencies: ["inr", "usd"],
    include_market_cap: true,
    include_24hr_change: true,
  });

  // console.log(priceQuery, statQuery, "query check")

  const {
    data: priceData,
    isLoading: priceLoading,
    error: priceError,
  } = useSimplePrice(serialize(priceQuery));

  const {
    data: statData,
    isLoading: statLoading,
    error: statError,
  } = useLivePrice(serialize(statQuery));

  const {
    data: trendingData,
    isLoading: trendingLoading,
    error: trendingError,
  } = useTrendingCoins();

  // console.log(trendingData, "trending data");
  // console.log(statData, "stat data");
  // console.log(priceData, "price data");

  return priceLoading || statLoading || trendingLoading ? (
    <Loader />
  ) : priceError || statError || trendingError ? (
    <Error />
  ) : (
    <div className="bg-gray-100 lg:px-8 sm:px-5 px-4 py-6">
      <div className="flex flex-row justify-start items-center gap-2">
        <p className="text-gray-500 text-sm sm:text-base">Cryptocurrencies</p>
        <i className="fa-solid fa-greater-than text-gray-400 text-sm sm:text-base"></i>
        <p className="text-gray-950 font-semibold text-sm sm:text-base">
          {statData[0].name}
        </p>
      </div>
      <div>
        <CoinPreviewComponent
          priceDetail={priceData[coinId]}
          statDetail={statData[0]}
        />
      </div>
      <div>
        <TrendingCoinsComponent
          coins={trendingData.coins}
          statQuery={statQuery}
          setStatQuery={setStatQuery}
          priceQuery={priceQuery}
          setPriceQuery={setPriceQuery}
        />
      </div>
    </div>
  );
}

export default CoinDetails;
