import React, { useState } from "react";
import PriceChartComponent from "./PriceChartComponent";

const chartTime = [
  {
    name: "1H",
    value: "1D",
  },
  {
    name: "24H",
    value: "5D",
  },
  {
    name: "7D",
    value: "YTD",
  },
  {
    name: "1M",
    value: "",
  },
  {
    name: "3M",
    value: "3M",
  },
  {
    name: "6M",
    value: "6M",
  },
  {
    name: "1Y",
    value: "12M",
  },
  {
    name: "All",
    value: "All",
  },
];

function BasicInfo({ inr, usd, rate, name, symbol, logo, rank }) {
  const [range, setRange] = useState("YTD");

  return (
    <div className="p-6 bg-white rounded-lg my-4">
      <div className="flex flex-row flex-wrap justify-start items-center gap-8">
        <div className="flex flex-row justify-start items-center gap-1.5 w-fit">
          <img src={logo} alt="Bitcoin" className="h-9 w-9" />
          <h4 className="font-semibold text-gray-950 sm:text-base text-base">
            {name}
          </h4>
          <p className="text-gray-500 sm:text-base text-base">{symbol}</p>
        </div>
        <div className="py-1.5 px-2.5 bg-slate-400 rounded-lg w-fit">
          <p className="text-white sm:text-sm md:text-base text-sm">
            Rank {rank}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-start items-start gap-6 mt-6 sm:mt-7 md:mt-10 mb-6 flex-wrap">
        <div className="w-fit">
          <h4 className="text-lg sm:text-lg md:text-xl lg:text-3xl text-gray-950 font-semibold overflow-y-hidden mb-2">
            $ {usd}
          </h4>
          <p className="font-medium text-gray-950 sm:text-sm text-base md:text-base">
            Rs. {inr}
          </p>
        </div>
        <div className="flex flex-row justify-start items-center gap-2 w-fit">
          <div
            className={`flex flex-row justify-start items-center gap-1 rounded-lg ${
              rate > 0 ? "bg-green-200" : "bg-red-200"
            } py-1.5 px-2.5`}
          >
            <i
              className={`fa-solid fa-caret-${rate > 0 ? "up" : "down"} mr-2 ${
                rate > 0 ? "text-green-500" : "text-red-600"
              }`}
            ></i>
            <p
              className={`text-sm ${
                rate > 0 ? "text-green-600" : "text-red-700"
              }`}
            >
              {rate?.toFixed(2)} %
            </p>
          </div>
          <p className="text-gray-500 text-sm">(24 H)</p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-between items-center gap-4 my-6 pt-4 border-t border-gray-300">
        <p className="font-semibold text-gray-950 w-fit">
          {name} price chart (USD)
        </p>
        <div className="flex flex-row justify-between items-center gap-1 w-fit">
          {chartTime?.map((data, index) => {
            return (
              <button
                key={index}
                className="text-gray-600 focus:text-sky-700 text-xs rounded-3xl p-1.5 bg-white focus:bg-sky-100 hover:bg-sky-100"
                onClick={() => setRange(data?.value)}
              >
                {data?.name}
              </button>
            );
          })}
        </div>
      </div>
      <PriceChartComponent
        range={range}
        symbol={`${symbol?.toUpperCase()}USD`}
      />
    </div>
  );
}

export default BasicInfo;
