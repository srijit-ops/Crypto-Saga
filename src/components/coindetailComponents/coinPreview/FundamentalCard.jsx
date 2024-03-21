import React from "react";

function FundamentalCard({ label, value, index }) {
  let bgColor, icon;

  switch (index) {
    case 0:
      bgColor = "bg-gradient-to-r from-sky-500 to-indigo-500";
      icon = "fa-solid fa-dollar-sign";
      break;
    case 1:
      bgColor = "bg-gradient-to-r from-purple-500 to-pink-500";
      icon = "fa-solid fa-chart-simple";
      break;
    case 2:
      bgColor = "bg-gradient-to-r from-violet-500 to-fuchsia-500";
      icon = "fa-solid fa-chart-line";
      break;
    default:
      bgColor = "bg-gray-950";
      icon = "fa-solid fa-chart-line";
  }

  return (
    <div
      className={`p-4 mb-4 rounded-tl-xl rounded-br-xl ${bgColor} relative z-[1]`}
    >
      <p className="text-white mb-3 text-sm">{label}</p>
      <p className="text-white font-semibold sm:text-sm md:text-base text-sm">
        {value}
      </p>
      <i
        className={`${icon} absolute z-[1000] top-3 text-slate-300 text-6xl -rotate-12 opacity-20 right-5`}
      ></i>
    </div>
  );
}

export default FundamentalCard;
