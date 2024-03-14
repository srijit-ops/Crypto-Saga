// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

// import { useState, React, useEffect } from 'react'

// //apis
// import getTrendingCoinsAPI from "../api/getTrendingCoinsAPI";

// //components


// import theme from "../../theme";

// export default function TrendingCoins({trendingCoins}) {

// //states

// // const [trendingCoins, settrendingCoins] = useState([])

// // useEffect(
// //     ()=>{
// //         async()=>{
// //             const res= await getTrendingCoinsAPI()
// //         if(res.status===200){
// //             settrendingCoins(res)
// //         }
// //         }
        
// //     },
// //     []
// // )

//   return (
//     <div css={card_holder}>
//         <h4 css={card_heading}>Trending coins (24h)</h4>
//     {
//         trendingCoins.slice(0,3).map((data, index)=>{
//             return(
                
//                 <div css={trendy_coin_card} key={index}>
//                     <div css={subpart1}>
//                         <div css={img_holder}>
//                         <img src={data.item.small} alt="coin" css={coin_img}/>
//                         </div>
                        
//                         <p css={coin_name}>{data.item.name} ({data.item.symbol})</p>
//                     </div>
//                     <div css={subpart2}>
//                         <img src="/arrow-up.png" alt="arrow" css={arrow}/>
//                         <p css={rate}>34%</p>
//                     </div>
//                 </div>
                
//             )
//         })
//     }
//    </div>
//   )
// }

// //css
// const trendy_coin_card= css`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: row;
//     gap:2rem;
//     margin-top: 1rem;
//     margin-bottom: 1.4rem;
// `
// const subpart1= css`
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     flex-direction: row;
//     gap:0.3rem;
//     width: 70%;
// `
// const subpart2= css`
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     flex-direction: row;
//     gap:0.3rem;
//     background-color: #EBF9F4;
//     border-radius: 0.5rem;
//     padding: 0.3rem 0.6rem ;
//     width: 20%;
// `
// const coin_img= css`
//     border-radius: 50%;
//     height: 1.7rem;
//     width: 1.7rem;
// `
// const card_holder= css`
//     background-color: white;
//     border-radius: 0.5rem;
//     padding: 1.5rem;
//     margin-top: 1.4rem;
// `
// const card_heading= css`
//     color: ${theme.primary_color};
//     font-weight: 600;
//     margin-bottom: 1.6rem;
// `
// const coin_name= css`
//     font-weight: 500;
//     color: ${theme.primary_color};
//     width: 80%;
//     overflow-wrap: break-word;
// `
// const rate= css`
//     color: #14B079;
//     font-size: 1rem;

// `
// const arrow= css`
//     width: 0.7rem;
//     height: 0.7rem;
// `
// const img_holder= css`
//     width: 15%;
// `