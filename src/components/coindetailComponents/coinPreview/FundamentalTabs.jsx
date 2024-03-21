import React from 'react'
import FundamentalCard from './FundamentalCard'

function FundamentalTabs() {

  const data=[
    {
        label: "Market Cap",
        value: "$161346363636"
    },
    {
        label: "24h low/high",
        value: "$16,382.075363 / $16,874.12636"
    },
    {
        label: "All time low/ high",
        value: "$16,382.073636 / $16,874.12737"
    }
]

  return (
    <div className='flex justify-between items-start flex-wrap flex-row mt-3'>
      {
        data.map((item, index)=>{
          return(
            <div key={index} className='lg:basis-full sm:basis-5/12 basis-full'>
              <FundamentalCard label={item.label} value={item.value} index={index}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default FundamentalTabs