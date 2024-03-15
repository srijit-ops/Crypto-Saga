import React, {useState} from 'react'
import { useLivePrice } from '../../hooks/livepricehook.hooks'
import { serialize } from '../../utils/paramsAppenderFunc'
import Loader from '../../components/common/Loader'
import CryptoCards from '../../components/livepriceComponents/CryptoCards'

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

  const labels= [
    {
      id:1,
      name:"Name",
    },
    {
      id:2,
      name:"Price",
    },
    {
      id:3,
      name:"1H",
    },
    {
      id:4,
      name:"24H",
    },
    {
      id:5,
      name:"7D",
    },
    {
      id:6,
      name:"Market Cap",
    },{
      id:7,
      name:"Circulating Supply",
    }
  ]

  return (
    // isLoading ? 
    // <Loader/> :
    <div className='bg-slate-200 h-screen px-8 py-6'>
    
    <h3 className='text-3xl font-semibold text-stone-950 mb-25 overflow-y-hidden'>Cryptocurrency Live Prices</h3>
    <div className='mt-15'>
      <div className='flex flex-row justify-between align-middle pb-3 border-b border-gray-300'>
        {
          labels.map((item)=>{
            return(
              <p key={item.id} className='text-base font-medium text-gray-500'>{item.name}</p>
            )
          })
        }
      </div>
        <div>
          {
            [1,2,3,4,5].map((item)=>{
              return(
                <CryptoCards/>
              )
            })
          }
        </div>
    </div>
    </div>
    
  )
}

export default LivePrice