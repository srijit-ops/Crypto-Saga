import React, {useState} from "react";
import PriceChartComponent from "./PriceChartComponent";

function BasicInfo({priceChange=-3.5467}) {
  const [range, setRange] = useState("YTD");

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

  return (
    <div className="p-6 bg-white rounded-lg my-4">
      <div className="flex flex-row justify-start items-center gap-8">
        <div className="flex flex-row justify-start items-center gap-1.5">
          <img
            src="https:upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
            alt="Bitcoin"
            className="h-9 w-9"
          />
          <h4 className="font-semibold text-gray-950">Bitcoin</h4>
          <p className="text-gray-500">BTC</p>
        </div>
        <div className="py-1.5 px-2.5 bg-slate-400 rounded-lg">
          <p className="text-white">Rank 1</p>
        </div>
      </div>
      <div className="flex flex-row justify-start items-start gap-6 mt-10 mb-6">
        <div>
          <h4 className="text-3xl text-gray-950 font-semibold overflow-y-hidden mb-2">$ 646464646</h4>
          <p className="font-medium text-gray-950">Rs. 525252522</p>
        </div>
        <div className="flex flex-row justify-start items-center gap-2">
          <div className={`flex flex-row justify-start items-center gap-1 rounded-lg ${priceChange>0? 'bg-green-200': 'bg-red-200'} py-1.5 px-2.5`}>
          <i className= {`fa-solid fa-caret-${priceChange>0?'up':'down'} mr-2 ${priceChange>0? 'text-green-500' :'text-red-600'}`}></i>
            <p className={`text-sm ${priceChange>0? 'text-green-600' :'text-red-700'}`}>{priceChange} %</p>
          </div>
          <p className="text-gray-500 text-sm">(24 H)</p>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center gap-4 my-6 pt-4 border-t border-gray-300">
        <p className="font-semibold text-gray-950">Bitcoin price chart (USD)</p>
        <div className="flex flex-row justify-between items-center gap-1">
          {chartTime.map((data, index) => {
            return (
              <button
                key={index}
                className="text-gray-600 focus:text-sky-700 text-xs rounded-3xl p-1.5 bg-white focus:bg-sky-100"
                onClick={() => setRange(data.value)}
              >
                {data.name}
              </button>
            );
          })}
        </div>
      </div>
      <PriceChartComponent range={range} />
    </div>
  );
}

export default BasicInfo;
