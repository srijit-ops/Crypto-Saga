import React, { useState } from "react";
import { serialize } from "../../utils/paramsAppenderFunc";
import Loader from "../../components/common/Loader";
import {
  useTrendingCoins,
  useSimplePrice,
} from "../../hooks/coindetailhook.hooks";
import { useLivePrice } from "../../hooks/livepricehook.hooks";
import { useLocation } from "react-router-dom";
import CoinPreviewComponent from "../../components/coindetailComponents/coinPreview/CoinPreviewComponent";
import TrendingCoinsComponent from "../../components/coindetailComponents/trendingCoins/TrendingCoinsComponent";

function CoinDetails() {
  const location = useLocation();
  const { coinSymbol, coinId } = location.state || {};

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

  console.log(trendingData, "trending data");
  console.log(statData, "stat data");
  console.log(priceData?.coinId, "price data");

  return priceLoading || statLoading || trendingLoading ? (
    <Loader />
  ) : priceError || statError || trendingError ? (
    <p>error</p>
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
        <TrendingCoinsComponent coins={trendingData.coins} />
      </div>
    </div>
  );
}

export default CoinDetails;
