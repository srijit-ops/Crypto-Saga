/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState, React } from 'react'

//components




import theme from "../../theme";


export default function RecommendCards({logo, symbol, change, graph, price}) {
  return (
    <div css={card}>
        <div css={basic_info}>
            <img src={logo} alt="logo" css={logo_style}/>
            <p css={symbol_style}>{symbol}</p>
            <p css={rate}>{change}</p>
        </div>
        <p css={price_style}>{price}</p>
        <img src={graph} alt="graph" css={chart}/>
    </div>
  )
}

//css
 const card= css`
    border-radius: 0.6rem;
    border: 1px solid #E3E3E3;
    padding: 1.1rem;
    margin-right: 1rem;
    background-color: white;
 ` 
 const basic_info= css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 0.3rem;
    margin-bottom: 0.8rem;
 `
 const logo_style= css`
    height: 1.6rem;
    width: 1.6rem;
 `
const symbol_style= css`
    font-weight: 400;
    font-size: 1rem;
    color: #202020;
`
const rate= css`
    font-size: 0.7rem;
    color: #32BE88;
    font-weight: 400;
    padding: 0.1rem 0.2rem;
    background-color: #0AB27D0F;
    border-radius: 0.2rem;
`
const price_style= css`
    font-size: 1.2rem;
    font-weight: 500;
    color: #171717;
    margin-bottom: 0.5rem;
`
const chart= css`
    width: 12.5rem;
    height: 3.75rem ;
`