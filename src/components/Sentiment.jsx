// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

// import { useState, React } from 'react'
// import { Line } from 'rc-progress';

// //components


// import theme from "../../theme";


// export default function Sentiment() {
//   return (
//     <div css={content}>
//         <h4 css={main_head}>Sentiment</h4>
//         <div css={head_holder}>
//         <p css={heading}>Aalyst estimates</p>
//         <img src="/info.svg" alt="info" css={info}/>
//         </div>

//         <div style={{ marginTop: '2rem'}}>

//                         {/* average rating */}
//                         <div css={average_rating_column}>
//                             <h4>74%</h4>
//                         </div>

//                         {/* distributed ratings */}
//                         <div css={distributed_ratings_column}>
//                             {["Buy", "Hold", "Sell"].map((item, index) => (
//                                 <div css={rating_breakup_rows} key={index}>
//                                     <div>{item}</div>
//                                     <Line
//                                         percent={
//                                             ratingsBreakup[item]
//                                                 ? (ratingsBreakup[item] / noOfReviews) * 100
//                                                 : 0
//                                         }
//                                         strokeWidth={2}
//                                         strokeColor={
//                                             item === "Buy"
//                                                 ? "#00B386"
//                                                 : item === "Hold"
//                                                     ? "#349C2A"
//                                                     :  "#F7324C"
                                                        
//                                         }
//                                         style={{ width: '100%' }}
//                                     />
//                                     <div css={rating_count}>{ratingsBreakup[item]}</div>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>

//     </div>
//   )
// }

// //css
// const main_head= css`
//     font-size: 1.5rem;
//     margin-bottom: 1.5rem;
//     color: ${theme.primary_color};
// `
// const content= css`
//     background-color: white;
//     padding: 1.5rem;
//     padding-bottom: 2.5rem;
//     margin-top: 1.3rem;
//     border-radius: 0.5rem;
//     position: relative;
//     z-index: 1;
// `
// const info= css`
//     height: 1.3rem;
//     width: 1.3rem;
// `
// const heading= css`
//     color: #44475B;
//     font-size: 1.2rem;
//     font-weight: 600;
    
// `
// const head_holder= css`
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     flex-direction: row;
//     gap:0.5rem;
//     margin-top: 3rem;
// `