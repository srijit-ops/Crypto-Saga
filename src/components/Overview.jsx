/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState, React } from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from "axios"

//components
import Pricechart from "./Pricechart";

import theme from "../../theme";

export default function Overview() {

    //states
    const priceDetails= ()=>{
        return axios.get(
            'https://api.coingecko.com/api/v3/simple/price',
            {
                ids: 'bitcoin',
    vs_currencies: 'inr,usd',
    include_24hr_change: true
            }
        )
    }

    const [range, setRange] = useState("YTD")

    const chartTime = [
        {
            name: "1H",
            value:"1D"
        },
        {
            name: "24H",
            value:"5D"
        },
        {
            name: "7D",
            value:"YTD"
        },
        {
            name: "1M",
            value:""
        },
        {
            name: "3M",
            value:"3M"
        },
        {
            name: "6M",
            value:"6M"
        },
        {
            name: "1Y",
            value:"12M"
        },
        {
            name: "All",
            value:"All"
        }
    ]

    //fetching price details

    const {isLoading, data}= useQuery({queryKey:'price-details'}, priceDetails)



    return (
        
            isLoading ? 
            <Text>loading</Text>
            :
        <div css= {overview_container}>
            <div css={coin_info}>
                <div css={coin_holder}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="Bitcoin" css={bitcoinImg} />
                    <h4 css={coin_name}>Bitcoin</h4>
                    <p css={symbol}>BTC</p>
                </div>
                <div css={tag_holder}>
                    <p css={tag}>Rank 1</p>
                </div>
            </div>
            <div css={price_details}>
                <div css={inr_usd}>
                    <h4 css={usd_price}>$ {data.usd}</h4>
                    <p css={inr_price}>Rs. {data.inr}</p>
                </div>
                <div css={rate_holder}>
                    <div css={subpart2}>
                        <img src="/arrow-up.png" alt="arrow" css={arrow} />
                        <p css={rate}>{data.usd_24h_change && data.usd_24h_change.toFixed(2)} %</p>
                    </div>
                    <p>(24 H)</p>
                </div>
            </div>

            <div css={chart_info}>
                <p css={chart_name}>Bitcoin price chart (USD)</p>
                <div css={time_holder}>
                    {
                        chartTime.map((data, index)=>{
                            return(
                                <button key={index} css={time} onClick={()=>setRange(data.value)}>{data.name}</button>
                            )
                        })
                    }
                    
                </div>
            </div>
            <Pricechart range={range}/>
        </div>
    )
}

//css

const coin_info = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    flex-direction: row;
    width: 30%;
`
const bitcoinImg = css`
    height: 2.2rem;
    width: 2.2rem;
`
const coin_name = css`
    font-weight: 600;
    color: ${theme.secondary_color};
`
const symbol = css`
    font-size: 1rem;
    color: #5D667B;
`
const tag = css`
    color: white;
`
const tag_holder = css`
    padding: 0.4rem 0.6rem;
    border-radius: 0.5rem;
    background-color: #768396;
`
const coin_holder = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.3rem;
    flex-direction: row;
`
const subpart2= css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap:0.3rem;
    background-color: #EBF9F4;
    border-radius: 0.5rem;
    padding: 0.3rem 0.6rem ;
    width: fit-content;
`
const rate= css`
    color: #14B079;
    font-size: 1rem;

`
const arrow= css`
    width: 0.7rem;
    height: 0.7rem;
`
const price_details= css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    flex-direction: row;
    /* width: 30%; */
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
`
const overview_container= css`
     background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
`
const usd_price= css`
    font-size:1.8rem;
    color: ${theme.secondary_color};
    font-weight:600;
`
const inr_price= css`
    font-size:1rem;
    color: ${theme.secondary_color};
    font-weight:500;
`
const inr_usd= css`
    width: 15%;
`
const rate_holder= css`
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap:0.4rem;
`
const chart_info= css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-direction: row;
    /* width: 30%; */
    margin-top: 1%.5;
    margin-bottom: 1.5rem;
    border-top: 0.1rem solid #DEE1E6;
    padding-top: 1rem;
    /* padding-bottom: 1.5rem; */
`
const chart_name= css`
width: 20%;
    font-size: 1rem;
    font-weight: 600;
    color: ${theme.secondary_color};
   
`
const time_holder= css`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.2rem;
    flex-direction:row;
`
const time= css`
    color: #5D667B;
    font-size:0.7rem;
    padding: 0.3rem;
    border-radius: 2rem;
    background-color: white;
    :focus{
        color: #0141CF;
        background-color: #E2ECFE;
    }
`