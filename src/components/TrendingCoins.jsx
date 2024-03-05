/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState, React, useEffect } from 'react'

//apis
import getTrendingCoinsAPI from "../api/getTrendingCoinsAPI";

//components


import theme from "../../theme";

export default function TrendingCoins() {

//states

const [trendingCoins, settrendingCoins] = useState([])

useEffect(
    ()=>{
        async()=>{
            const res= await getTrendingCoinsAPI()
        if(res.status===200){
            settrendingCoins(res)
        }
        }
        
    },
    []
)

  return (
    <div>{trendingCoins ? trendingCoins : null}</div>
  )
}

//css



