/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState, React } from 'react'

//components


import theme from "../../theme";



export default function KoinxAd() {
  return (
    <div css= {ad_holder}>
        <h4 css={ad_heading}>Get Started with KoinX for FREE</h4>
        <p css={ad_info}>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
        <img src="/Frame.png" alt="" css={ad_img}/>
        <button css={button}>
            Get started for free
            <img src="/next.png" alt="" css={arrow}/>
        </button>
    </div>
  )
}

//css

const ad_holder= css`
    background: #0052FE;
    border-radius: 1rem;
    padding: 2rem 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const ad_heading= css`
    color: white;
    font-weight:700;
    order: 1;
    width: 100%;

    @media screen and (max-width: 900px) {
  order: 2;
}
`
const ad_info= css`
    color: #F2F2F2;
    font-weight:500;
    padding: 1rem 0;
    order: 2;
    width: 100%;

    @media screen and (max-width: 900px) {
  order: 3;
    }
`
const ad_img= css`
    order: 3;
    margin: 1.3rem 0;
    @media screen and (max-width: 900px) {
  order: 1;
    }
`
const button= css`
    order: 4;
    width: 60%;
    background-color: white;
    color: ${theme.primary_color};
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.3rem;
    flex-direction: row;
`
const arrow= css`
    height: 1.25rem;
    width: 1.25rem;
`