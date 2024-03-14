import React, {useState} from 'react'
import { useLivePrice } from '../../hooks/livepricehook.hooks'
import { serialize } from '../../utils/paramsAppenderFunc'
import Loader from '../../components/common/Loader'

function LivePrice() {
  
  const [query, setquery] = useState(
    {
      vs_currency:"usd",
      order:"market_cap_desc",
      per_page:10,
      page:10,
      sparkline:false,
      price_change_percentage:['1h', '24h', '7d'],
      locale:"en"
    }
  )

  const {data, isLoading}= useLivePrice(serialize(query))

  return (
    isLoading ? <Loader/> :
    <div>LivePrice</div>
  )
}

export default LivePrice