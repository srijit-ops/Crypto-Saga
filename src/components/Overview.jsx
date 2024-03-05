/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState, React } from 'react'

//components


import theme from "../../theme";

export default function Overview({priceDetails}) {
    return (
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
                    <h4 css={usd_price}>$ {priceDetails.usd}</h4>
                    <p css={inr_price}>Rs. {priceDetails.inr}</p>
                </div>
                <div css={rate_holder}>
                    <div css={subpart2}>
                        <img src="/arrow-up.png" alt="arrow" css={arrow} />
                        <p css={rate}>{priceDetails.usd_24h_change && priceDetails.usd_24h_change.toFixed(2)} %</p>
                    </div>
                    <p>(24 H)</p>
                </div>
            </div>
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