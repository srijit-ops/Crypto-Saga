import React from 'react'
import BasicInfo from './BasicInfo'
import PerformanceInfo from './PerformanceInfo'
import FundamentalList from './FundamentalList'
import FundamentalTabs from './FundamentalTabs'

function CoinPreviewComponent() {
  return (
    <div className='flex flex-row justify-between items-start flex-wrap'>
        <div className="flex flex-col basis-8/12">
            <BasicInfo/>
            <PerformanceInfo/>
        </div>
        <div className="flex flex-col basis-3/12">
            <FundamentalList/>
            <FundamentalTabs/>
        </div>
    </div>
  )
}

export default CoinPreviewComponent