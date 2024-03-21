import { useState, React, useMemo } from "react";

export default function CustomeSliderComponent({
  max,
  min,
  current,
  leftLabel,
  rightLabel,
}) {
  const currentPercentage = useMemo(() => {
    return ((current - min) / (max - min)) * 100;
  }, [current]);

  return (
    <div className="overflow-y-hidden overflow-x-hidden py-4 relative flex justify-between items-center gap-4">
      <div className="shrink-0">
        <p className="text-sm text-gray-500">{leftLabel}</p>
        <p className="text-gray-950 font-semibold sm:text-sm md:text-base text-sm">
          ${min?.toFixed(2)}
        </p>
      </div>
      <div
        className={`absolute flex justify-between z-[1000] flex-col items-center top-[45%]`}
        style={{ left: `${currentPercentage}%` }}
      >
        <p className="rotate-90">&#10094;</p>
        <p className="text-gray-950 font-semibold sm:text-sm md:text-base text-sm">
          ${current?.toFixed(2)}
        </p>
      </div>
      <div className="w-full relative rounded-lg h-3 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"></div>
      <div className="shrink-0">
        <p className="text-sm text-gray-500">{rightLabel}</p>
        <p className="text-gray-950 font-semibold sm:text-sm md:text-base text-sm">
          ${max?.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

//css

// const indicator= css`
//     z-index: 1000;
//     position: absolute;
//     display: flex;
//     justify-content: space-between;
//     flex-direction: column;
//     align-items: center;
//     top: 45%;
// `
// const bar = css`
//     background: rgb(255, 0, 0);
//     background: linear-gradient(
//       90deg,
//       rgba(255, 0, 0, 1) 0%,
//       rgba(255, 241, 0, 1) 49%,
//       rgba(0, 255, 81, 1) 100%
//     );
//     height: 0.7rem;
//     width: 100%;
//     border-radius: 0.4rem;
//     position: relative;
// `
//   const right= css`
//          flex-shrink: 0;
//     `
// const arrow= css`
//     rotate: 90deg;
// `

// const value= css`
//     font-size: 0.9rem;
//     color: #44475B;
//     font-weight: 500;
// `
