import React from "react";
import { useNavigate } from "react-router-dom";

function TrendingCard({
  id,
  symbol,
  sparkline,
  price,
  name,
  rate,
  logo,
  setStatQuery,
  setPriceQuery,
  priceQuery,
  statQuery,
}) {
  const navigation = useNavigate();

  const clickHandler = () => {
    navigation(`/coindetails/${id}`);
    setStatQuery({ ...statQuery, ids: id });
    setPriceQuery({ ...priceQuery, ids: id });
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="relative rounded-xl z-[1] p-4 cursor-pointer shadow hover:shadow-xl h-full"
      onClick={clickHandler}
    >
      <div className="absolute z-[1000] -top-4 w-[90%] flex justify-center">
        <img
          src={logo}
          className="h-15 w-15 rounded-[50%]"
          style={{ height: 40, width: 40 }}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="mt-5 mb-3 text-gray-600 sm:text-sm md:text-base text-sm">
          {name}
        </p>
        <div
          className={`flex flex-row justify-center items-center rounded-md mb-3 w-fit ${
            rate > 0 ? "bg-green-200" : "bg-red-200"
          } py-1.5 px-2.5`}
        >
          <i
            className={`fa-solid fa-caret-${
              rate > 0 ? "up" : "down"
            } mr-2 sm:text-sm text-xs ${
              rate > 0 ? "text-green-500" : "text-red-600"
            }`}
          ></i>
          <p
            className={`text-xs ${
              rate > 0 ? "text-green-500" : "text-red-600"
            }`}
          >{`${rate?.toFixed(2)} %`}</p>
        </div>
        <p className="mb-3 font-semibold md:text-lg lg:text-xl sm:text-base text-sm text-gray-950">
          {price}
        </p>
        <img src={sparkline} alt="graph" />
      </div>
    </div>
  );
}

export default TrendingCard;
