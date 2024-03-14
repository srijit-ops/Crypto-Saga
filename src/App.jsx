// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

import { useState, useEffect } from 'react'


//components

import CustomRouter from "./router/CustomRouter";
// import Layout from './components/layout/Layout'
// import KoinxAd from "./components/KoinxAd";
// import theme from "../theme";
// import TrendingCoins from "./components/TrendingCoins";
// import Overview from "./components/Overview";
// import Performance from "./components/Performance";
// import Sentiment from "./components/Sentiment";
// import LivePrice from "./pages/LivePrice/LivePrice";

//apis

// import getTrendingCoinsAPI from "./api/getTrendingCoinsAPI";
// import getBitcoinPriceAPI from "./api/getBitcoinPriceAPI";
// import Recommendation from "./components/Recommendation";


export default function App() {

  //states
  const [trendingCoins, settrendingCoins] = useState([])
  // const [priceDetails, setpriceDetails] = useState([])

  


//   const fetchTrendyCoin= async ()=>{
    
//       let res= await getTrendingCoinsAPI()
//       if(res.status===200){
//         settrendingCoins(res.data.coins)
//       }
//       console.log("error from trending coins api")
    
//   }

//   const fetchBitcoinPrice= async()=>{
//     let res= await getBitcoinPriceAPI()
//     if(res.status===200){
//       setpriceDetails(res.data.bitcoin)
//     }
//     console.log("error from price details api")
//   }

// useEffect(()=>{
//   setloading(true)
//   try{
//     fetchTrendyCoin()
//     fetchBitcoinPrice()
//     if(trendingCoins && priceDetails){
//       setloading(false)
//     }
//   }
//   catch(e){
//     setloading(false)
//     console.log(e)
//   }
  
// }
// ,[]
// )


  return (
    <CustomRouter/>
  )
}


