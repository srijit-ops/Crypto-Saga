import React, { useState } from 'react'
import { serialize } from '../../utils/paramsAppenderFunc'
import Loader from '../../components/common/Loader'
import { useTrendingCoins, useSimplePrice } from '../../hooks/coindetailhook.hooks'
import { useLivePrice } from '../../hooks/livepricehook.hooks'
import { useLocation } from 'react-router-dom'


function CoinDetails() {

  const location= useLocation()
  const {coinSymbol, coinId}= location.state || {}

  const [statQuery, setStatQuery] = useState(
    {
      vs_currency:"usd",
      ids: coinId,
      order:"market_cap_desc",
      per_page:1,
      page:1,
      sparkline:true,
      price_change_percentage:['1h', '24h', '7d'],
      locale:"en"
    }
  )
  
  const [priceQuery, setPriceQuery]= useState({
    ids:coinId,
    vs_currencies: ['inr', 'usd'],
    include_market_cap:true,
    include_24hr_change:true
  })

  // const {data: priceData, isLoading: priceLoading, error: priceError}= useSimplePrice(serialize(priceQuery))

  // const {data: statData, isLoading: statLoading, error: statError}= useLivePrice(serialize(statQuery))

  // const {data: trendingData, isLoading: trendingLoading, error: trendingError}= useTrendingCoins()

// console.log(trendingData, "trending data")
// console.log(statData, "stat data")
// console.log(priceData, "price data")

  return (
    // (priceLoading || statLoading || trendingLoading) ?
    // <Loader/> :
    <>
    <h1>hyeeyey</h1>
 
    </>
    )
}
    // <div>
      {/* het */}
      {/* <div css={container}>

<div css={coin_name_holder}>
  <p css={coin_name_head}>Cryptocurrencies</p>
  <img src="/headArrow.svg" alt="" />
  <p css={coin_name}>Bitcoin</p>
</div>

<div css={widgets_holder}>
  <div css={parent_widget1}>
    <Overview/>
    <Performance/> */}
    {/* <Sentiment/> */}
  {/* </div>
  <div css={parent_widget2}>
    <KoinxAd/>
    <TrendingCoins trendingCoins={trendingCoins}/>
  </div>
  <div css={parent_widget3}>
    <Recommendation trendingCoins={trendingCoins}/>
  </div>
</div>
</div> */}
    // </div>
  

export default CoinDetails

//css

// const container = css`
// padding: 1rem 3.6rem ;
// @media screen and (max-width: 900px) {
//   padding: 1.4rem 0.9rem;
// }
// `

// const coin_name_holder = css`
//   display: flex;
//   justify-content: flex-start;
//   gap: 0.4rem;
//   align-items: center;
//   flex-direction: row;
// `

// const coin_name_head = css`
//   font-size: 0.9rem;
//   color: ${theme.fonts.light_grey};
//   font-weight: 400;
// `
// const coin_name = css`
//   font-size: 0.9rem;
//   color: ${theme.primary_color};
//   font-weight: 500;
// `
// const widgets_holder = css`
//   display: flex;
//   justify-content: space-between;
//   gap: 0.3rem;
//   align-items: flex-start;
//   flex-direction: row;
//   flex-wrap: wrap;
//   margin-top: 1.2rem;
// `
// const parent_widget1 = css`
//   width: 65%;
// order: 1;
//   @media screen and (max-width: 900px) {
//         width: 100%;
//     }
// `
// const parent_widget2 = css`
//   width: 28%;
// order: 2;
//   @media screen and (max-width: 900px) {
//         width: 100%;
//         order: 3;
//     }
// `
// const parent_widget3 = css`
// overflow-x: auto;
//   width: 100%;
// order: 3;
//   @media screen and (max-width: 900px) {
//         width: 100%;
//         order: 2;
//     }
// `