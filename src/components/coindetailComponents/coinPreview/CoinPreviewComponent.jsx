import React from "react";
import BasicInfo from "./BasicInfo";
import PerformanceInfo from "./PerformanceInfo";
import FundamentalList from "./FundamentalList";
import FundamentalTabs from "./FundamentalTabs";

function CoinPreviewComponent({ priceDetail, statDetail }) {
  return (
    <div className="flex flex-row justify-center sm:justify-center lg:justify-between items-start flex-wrap">
      <div className="flex flex-col sm:basis-full lg:basis-7/12 xl:basis-8/12 basis-full overflow-x-hidden">
        <BasicInfo
          inr={priceDetail?.inr}
          usd={priceDetail?.usd}
          rate={priceDetail?.usd_24h_change}
          name={statDetail?.name}
          symbol={statDetail?.symbol}
          logo={statDetail?.image}
          rank={statDetail?.market_cap}
        />
        <PerformanceInfo
          currentPrice={statDetail?.current_price}
          todayLow={statDetail?.low_24h}
          todayHigh={statDetail?.high_24h}
        />
      </div>
      <div className="flex flex-col sm:basis-full lg:basis-4/12 xl:basis-3/12 basis-full overflow-x-hidden">
        <FundamentalList
          price={priceDetail?.usd}
          rank={statDetail?.market_cap}
          capChange={statDetail?.market_cap_change_percentage_24h}
          valuation={statDetail?.fully_diluted_valuation}
        />
        <FundamentalTabs
          marketCap={statDetail?.market_cap}
          oneDayLow={statDetail?.low_24h}
          oneDayHigh={statDetail?.high_24h}
          allTimeHigh={statDetail?.ath}
          allTimeLow={statDetail?.atl}
        />
      </div>
    </div>
  );
}

export default CoinPreviewComponent;
