import React from 'react'
import CustomeSliderComponent from './CustomSliderComponent'

function PerformanceInfo() {
  return (
    <div className='relative z-[1] p-6 bg-white rounded-lg my-3'>
      <p className='text-lg font-semibold text-gray-700 mb-4'>Performance</p>
         <CustomeSliderComponent max={49343.83} min={46930.22} current={48637.83} leftLabel={"Today;s low"} rightLabel={"todays high"}/>
    </div>
  )
}

export default PerformanceInfo