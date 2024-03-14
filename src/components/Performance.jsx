// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

// import { useState, React, useRef } from 'react'

// //components
// import OverviewTab from "./tabs/OverviewTab";


// import theme from "../../theme";

// import Tabs from 'rc-tabs';
// import 'rc-tabs/assets/index.css';



// export default function Performance() {

//     const callback = (key) => {
//         console.log(key);
//       };
        
//       const items = [
//         {
//           key: '1',
//           label: <p>Overview</p>,
//           children: (
//             <OverviewTab/>
//           ),
//         },
//         {
//           key: '2',
//           label: <p>Fundamental</p>,
//           children: null,
//           disabled: true,
//         },
//         {
//           key: '3',
//           label: <p>News insights</p>,
//           children: null,
//           disabled: true,
//         },
//         {
//           key: '4',
//           label: <p>Sentiments</p>,
//           children: null,
//           disabled: true,
//         },
//         {
//           key: '5',
//           label: <p>Teams</p>,
//           children: null,
//           disabled: true,
//         },
//         {
//           key: '6',
//           label: <p>Technicals</p>,
//           children: null,
//           disabled: true,
//         },
//         {
//           key: '7',
//           label: <p>Tokenomics</p>,
//           children: null,
//           disabled: true,
//         },
//       ];
      
//       const [scrollOffset, setScrollOffset] = useState(0);
//     const tabContainerRef = useRef(null);

//     const handleTabScroll = (scrollInfo) => {
//         setScrollOffset(scrollInfo.offset);
//     };

//     const totalTabWidth = () => {
//         let totalWidth = 0;
//         tabContainerRef.current.querySelectorAll('.rc-tabs-tab').forEach(tab => {
//             totalWidth += tab.offsetWidth;
//         });
//         return totalWidth;
//     };
      

//   return (
//     <div css={performance_holder}>
//         <div css={scrollableTabsContainer} ref={tabContainerRef}>
//         <Tabs
//         // onTabScroll={handleTabScroll}
//         tabBarPosition="bottom"
//         items={items}
//         defaultActiveKey="1"
//         // className="md:w-[70%] w-full mx-auto p-2 border-0"
//         onChange={callback}
//         style={{ color: 'black' }}
//         // forceRender={false} // Prevents rendering all tabs content at once
//         css={tabStyle} // Apply custom tab styles
//       />
//         </div>
//     </div>
//   );
// }

// //css

// const performance_holder = css`
//     margin-top:1.5rem;
//     margin-bottom: 1.5rem;

// `
// const scrollableTabsContainer = css`
//   overflow-x: auto;
//   white-space: nowrap;
//   max-width: 100%;
// `;

// const tabStyle = css`
// border: none;
// overflow-y: hidden;
// .rc-tabs-tab {
//     border: none;
//     outline: none;
//     margin-right: 20px;
//     cursor: pointer;
//     color: #3E424A;
//     font-size: 0.9rem;
//     font-weight: 500;
//     background-color: #EFF2F5;

//     &.rc-tabs-tab-active {
//       border-bottom: 2px solid #0141CF; // Change to your desired color
//       color: #0141CF; // Change to blue color for selected tab label
//     }
//   }
//         /* .rc-tabs-tab {
//           border: none;
//           outline: none;
//           margin-right: 20px;
//           cursor: pointer;
          
//         } */
//       `;