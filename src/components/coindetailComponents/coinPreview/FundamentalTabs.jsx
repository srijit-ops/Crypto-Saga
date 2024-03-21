import React from "react";
import FundamentalCard from "./FundamentalCard";

function FundamentalTabs({
  marketCap,
  oneDayLow,
  oneDayHigh,
  allTimeHigh,
  allTimeLow,
}) {
  const data = [
    {
      label: "Market Cap",
      value: `$ ${marketCap}`,
    },
    {
      label: "24h low/high",
      value: `$ ${oneDayLow?.toFixed(2)} / $ ${oneDayHigh?.toFixed(2)}`,
    },
    {
      label: "All time low/ high",
      value: `$ ${allTimeLow?.toFixed(2)} / $ ${allTimeHigh?.toFixed(2)}`,
    },
  ];

  return (
    <div className="flex justify-between items-start flex-wrap flex-row mt-3">
      {data.map((item, index) => {
        return (
          <div key={index} className="lg:basis-full sm:basis-5/12 basis-full">
            <FundamentalCard
              label={item.label}
              value={item.value}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
}

export default FundamentalTabs;
