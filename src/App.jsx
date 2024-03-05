/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState } from 'react'

//components

import Layout from './components/layout/Layout'
import KoinxAd from "./components/KoinxAd";
import theme from "../theme";
import TrendingCoins from "./components/TrendingCoins";

export default function App() {


  return (
    <Layout>
      <div css={container}>

        <div css={coin_name_holder}>
          <p css={coin_name_head}>Cryptocurrencies</p>
          <img src="/headArrow.svg" alt="" />
          <p css={coin_name}>Bitcoin</p>
        </div>

        <div css={widgets_holder}>
          <div css={parent_widget1}>hii</div>
          <div css={parent_widget2}>
            <KoinxAd/>
            <TrendingCoins/>
          </div>
          <div css={parent_widget3}>hola</div>
        </div>
      </div>
    </Layout>
  )
}


//css

const container = css`
padding: 1rem 3.6rem ;
@media screen and (max-width: 900px) {
  padding: 1.4rem 0.9rem;
}
`

const coin_name_holder = css`
  display: flex;
  justify-content: flex-start;
  gap: 0.4rem;
  align-items: center;
  flex-direction: row;
`

const coin_name_head = css`
  font-size: 0.9rem;
  color: ${theme.fonts.light_grey};
  font-weight: 400;
`
const coin_name = css`
  font-size: 0.9rem;
  color: ${theme.primary_color};
  font-weight: 500;
`
const widgets_holder = css`
  display: flex;
  justify-content: space-around;
  gap: 0.3rem;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`
const parent_widget1 = css`
  width: 65%;
order: 1;
  @media screen and (max-width: 900px) {
        width: 100%;
    }
`
const parent_widget2 = css`
  width: 28%;
order: 2;
  @media screen and (max-width: 900px) {
        width: 100%;
        order: 3;
    }
`
const parent_widget3 = css`
  width: 100%;
order: 3;
  @media screen and (max-width: 900px) {
        width: 100%;
        order: 2;
    }
`