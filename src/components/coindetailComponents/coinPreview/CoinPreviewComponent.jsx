import React from 'react'
import BasicInfo from './BasicInfo'
import PerformanceInfo from './PerformanceInfo'
import FundamentalList from './FundamentalList'
import FundamentalTabs from './FundamentalTabs'

function CoinPreviewComponent({priceDetail, statDetail}) {
  console.log(priceDetail, statDetail, "arigato")
  return (
    <div className='flex flex-row justify-center sm:justify-center lg:justify-between items-start flex-wrap'>
        <div className="flex flex-col sm:basis-full lg:basis-7/12 xl:basis-8/12 basis-full overflow-x-hidden">
            <BasicInfo inr={priceDetail.inr} usd={priceDetail.usd} rate={priceDetail.usd_24h_change} name={statDetail.name} symbol={statDetail.symbol} logo={statDetail.image} rank={statDetail.market_cap}/>
            <PerformanceInfo/>
        </div>
        <div className="flex flex-col sm:basis-full lg:basis-4/12 xl:basis-3/12 basis-full overflow-x-hidden">
            <FundamentalList/>
            <FundamentalTabs/>
        </div>
    </div>
  )
}

export default CoinPreviewComponent