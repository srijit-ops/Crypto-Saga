import React, { useState } from "react";
import { useLivePrice } from "../../hooks/livepricehook.hooks";
import { serialize } from "../../utils/paramsAppenderFunc";
import Loader from "../../components/common/Loader";
import CryptoCards from "../../components/livepriceComponents/CryptoCards";

const labels = [
  {
    id: 1,
    name: "Name",
  },
  {
    id: 2,
    name: "Price",
  },
  {
    id: 3,
    name: "1H",
  },
  {
    id: 4,
    name: "24H",
  },
  {
    id: 5,
    name: "7D",
  },
  {
    id: 6,
    name: "Market Cap",
  },
  {
    id: 7,
    name: "Circulating Supply",
  },
];

function LivePrice() {
  const [query, setquery] = useState({
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 20,
    page: 10,
    sparkline: false,
    price_change_percentage: ["1h", "24h", "7d"],
    locale: "en",
  });
  const { data, isLoading, error } = useLivePrice(serialize(query));

  console.log(data, error, "out data check");

  return isLoading ? (
    <Loader />
  ) : error ? (
    <p>error</p>
  ) : (
    <div className="bg-gray-100 lg:px-8 sm:px-5 px-4 py-6">
      <div className="flex flex-row justify-start items-center">
        <h3 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-stone-950 mb-25 overflow-y-hidden">
          Cryptocurrency Live Prices
        </h3>
      </div>
      <div className="lg:mt-10 sm:mt-7 mt-5 mb-7">
        <div className="flex flex-row justify-between items-center px-4 py-3 border-b border-gray-300">
          {labels.map((item) => {
            return (
              <p
                key={item.id}
                className={`font-medium text-gray-500 text-center sm:text-sm lg:text-base text-sm ${
                  item.id === 1 || item.id === 2 || item.id === 3
                    ? "block"
                    : item.id === 6 || item.id === 7
                    ? "lg:block hidden"
                    : "sm:block hidden"
                }`}
              >
                {item.name}
              </p>
            );
          })}
        </div>
        <div>
          {data?.map((item, index) => {
            return (
              <CryptoCards
                key={index}
                id={item.id}
                name={item.name}
                symbol={item.symbol}
                image={item.image}
                price={item.current_price}
                oneHr={item.price_change_percentage_1h_in_currency}
                oneDay={item.price_change_percentage_24h_in_currency}
                oneWeek={item.price_change_percentage_7d_in_currency}
                marketCap={item.market_cap}
                supply={item.circulating_supply}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LivePrice;
