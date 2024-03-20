import React from 'react'
import FundamentalCard from './FundamentalCard'

function FundamentalTabs() {

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
    }
]

  return (
    <div className='flex justify-between items-start flex-wrap flex-row mt-3'>
      {
        data.map((item, index)=>{
          return(
            <div key={index} className='w-full'>
              <FundamentalCard label={item.label} value={item.value} index={index}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default FundamentalTabs