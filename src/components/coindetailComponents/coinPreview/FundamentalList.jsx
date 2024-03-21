import React from "react";

function FundamentalList({ price, rank, capChange, valuation }) {
  const data = [
    {
      label: "Bitcoin price",
      value: `$ ${price}`,
    },
    {
      label: "Market cap rank",
      value: `# ${rank}`,
    },
    {
      label: "Market cap change",
      value: `${capChange} %`,
    },
    {
      label: "Fully diluted valuation",
      value: `$ ${valuation}`,
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg my-4">
      <div>
        <p className="text-lg font-semibold text-gray-700 mb-4">Fundamentals</p>
        {data.slice(0, 4).map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-row flex-wrap justify-between items-center gap-4 border-b border-gray-300 last:border-b-0 last:pb-0 py-4"
            >
              <p className="text-sm text-gray-500 w-fit">{item.label}</p>
              <p className="text-sm text-gray-950 w-fit">{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FundamentalList;
