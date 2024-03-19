import React from 'react'

function FundamentalList() {

        const data=[
        {
            label: "Bitcoin price",
            value: "$16134"
        },
        {
            label: "24h low/high",
            value: "$16,382.07 / $16,874.12"
        },
        {
            label: "7D low/high",
            value: "$16,382.07 / $16,874.12"
        },
        {
            label: "Trading volume",
            value: "$23,249,202,78"
        },
        {
            label: "Market cap rank",
            value: "#1"
        },
        {
            label: "Market cap",
            value: "$323,507,290,04"
        },
        {
            label: "Market cap dominance",
            value: "3.38%"
        },
        {
            label: "Volume/ market cap",
            value: "0.0271"
        },
        {
            label: "All time high",
            value: "$16134",
            date: "Nov 10, 2021 (about 1 year)",
            rate:"25.6%"
        },
        {
            label: "All time low",
            value: "$16134",
            date:"Nov 10, 2021 (about 1 year)",
            rate:"20.6%"
        }
    ]

  return (
    <div className='p-6 bg-white rounded-lg my-4'>
                     <div>
                     <p className='text-lg font-semibold text-gray-700 mb-4'>Fundamentals</p>
                 {
                     data.slice(0,5).map((item, index)=>{
                         return(
                             <div key={index} className="flex flex-row justify-between items-center gap-4 border-b border-gray-300 last:border-b-0 last:pb-0 py-4">
                                 <p className="text-sm text-gray-500">{item.label}</p>
                                 <p className="text-sm text-gray-950">{item.value}</p>
                             </div>
                         )
                     })
                 }
             </div>
    </div>
  )
}

export default FundamentalList