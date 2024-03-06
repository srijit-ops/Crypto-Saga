/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState, React } from 'react'

//components


import theme from "../../../theme";
import CustomSlider from "../CustomSlider";

function OverviewTab() {

    const data=[
        {
            label: "Bitcoin price",
            value: "$16134"
        },
        {
            label: "24h low/high",
            value: "$16,382.07 / $16,874.12"
        },
        {
            label: "7D low/high",
            value: "$16,382.07 / $16,874.12"
        },
        {
            label: "Trading volume",
            value: "$23,249,202,78"
        },
        {
            label: "Market cap rank",
            value: "#1"
        },
        {
            label: "Market cap",
            value: "$323,507,290,04"
        },
        {
            label: "Market cap dominance",
            value: "3.38%"
        },
        {
            label: "Volume/ market cap",
            value: "0.0271"
        },
        {
            label: "All time high",
            value: "$16134",
            date: "Nov 10, 2021 (about 1 year)",
            rate:"25.6%"
        },
        {
            label: "All time low",
            value: "$16134",
            date:"Nov 10, 2021 (about 1 year)",
            rate:"20.6%"
        }
    ]


  return (
    <div css={content}>
        <h4 css={main_head}>Performance</h4>
        <CustomSlider max={49343} min={46930} current={48690} leftLabel={"Today;s low"} rightLabel={"todays high"}/>
        <CustomSlider max={45000} min={40000} current={42000} leftLabel={"50w low"} rightLabel={"50w high"}/>
        <div css={head_holder}>
        <p css={heading}>Fundamentals</p>
        <img src="/info.svg" alt="info" css={info}/>
        </div>
        <div css={data_holder}>
            <div css={data_cols}>
                {
                    data.slice(0,5).map((item, index)=>{
                        return(
                            <div key={index} css={data_rows}>
                                <p css={label}>{item.label}</p>
                                <p css={value}>{item.value}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div css={data_cols}>
            {
                    data.slice(5,10).map((item, index)=>{
                        return(
                            <div key={index} css={data_rows}>
                                <p css={label}>{item.label}</p>
                                <div css={subcontainer}>
                                <p css={value}>{item.value} 
                                {
                                    item.rate && <span css={rate}>{item.rate}</span>
                                }
                                
                                </p>
                                {
                                    item.date && 
                                    <p css={date}>{item.date}</p>
                                }
                                
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default OverviewTab

//css
const data_holder= css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap:1rem;
    flex-wrap: wrap;
`
const data_rows= css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap:1rem;
    padding: 1.1rem 0;
    border-bottom: 0.1rem solid #D3E0E6;
`
const data_cols= css`
    width: 45%;
`
const label= css`
    font-size:0.9rem;
    color: #768396;
    font-weight: 500;
`
const value= css`
    color: #111827;
    font-size:0.8rem;
    font-weight: 500;
`
const info= css`
    height: 1.3rem;
    width: 1.3rem;
`
const heading= css`
    color: #44475B;
    font-size: 1.2rem;
    font-weight: 600;
`
const head_holder= css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap:0.5rem;
`
const subcontainer= css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const date=css`
    color: #111827;
    font-size: 0.7rem;
`
const rate= css`
    color: #F7324C;
`
const main_head= css`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${theme.primary_color};
`
const content= css`
    background-color: white;
    padding: 1.5rem;
    padding-bottom: 2.5rem;
    margin-top: 1.3rem;
    border-radius: 0.5rem;
    position: relative;
    z-index: 1;
`