// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

// import { useState, React, useMemo } from 'react'

// //components


// import theme from "../../theme";

// // let currenctPercentage

// export default function CustomSlider({ max, min, current, leftLabel, rightLabel }) {

//      const currenctPercentage = useMemo(() => {
//         return ((current - min) / (max - min)) * 100;
//       }, [current]);

//   return (
//     <div css={outer}>
//       <div css={left}>
//         <p css={label}>{leftLabel}</p>
//         <p css={value}>${min}</p>
//       </div>
//       <div css= {indicator} style={{ left: `${currenctPercentage}%` }}>
//           <p css={arrow}>&#10094;</p>
//           <p css={value}>${current}</p>
//         </div>
//       <div css={bar}>
//       </div>
//       <div css={right}>
//         <p css={label}>{rightLabel}</p>
//         <p css={value}>${max}</p>
//       </div>
//     </div>
//   )
// }

// //css

// const indicator= css`
//     z-index: 1000;
//     position: absolute;
//     display: flex;
//     justify-content: space-between;
//     flex-direction: column;
//     align-items: center;
//     top: 45%;
// `
// const outer= css`
// overflow-y: hidden;
//     padding: 1rem;
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     gap: 1rem;
// `
// const bar = css`
//     background: rgb(255, 0, 0);
//     background: linear-gradient(
//       90deg,
//       rgba(255, 0, 0, 1) 0%,
//       rgba(255, 241, 0, 1) 49%,
//       rgba(0, 255, 81, 1) 100%
//     );
//     height: 0.7rem;
//     width: 100%;
//     border-radius: 0.4rem;
//     position: relative;
// `
//     const left= css`
//          flex-shrink: 0;
//     `
  
//   const right= css`
//          flex-shrink: 0;
//     `
// const arrow= css`
//     rotate: 90deg;
// `
// const label = css`
//     font-size: 0.8rem;
//     color: #44475B;
//     font-weight: 400;
// `
// const value= css`
//     font-size: 0.9rem;
//     color: #44475B;
//     font-weight: 500;
// `