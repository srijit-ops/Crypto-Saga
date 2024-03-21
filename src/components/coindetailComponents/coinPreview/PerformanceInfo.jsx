import React from "react";
import CustomeSliderComponent from "./CustomSliderComponent";

function PerformanceInfo({ currentPrice, todayLow, todayHigh }) {
  return (
    <div className="relative z-[1] p-6 bg-white rounded-lg my-3">
      <p className="text-lg font-semibold text-gray-700 mb-4">Performance</p>
      <CustomeSliderComponent
        max={todayHigh}
        min={todayLow}
        current={currentPrice}
        leftLabel={"Todays low"}
        rightLabel={"Todays high"}
      />
    </div>
  );
}

export default PerformanceInfo;
