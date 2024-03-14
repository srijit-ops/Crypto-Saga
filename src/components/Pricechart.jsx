// import React, { useEffect, useRef, memo } from 'react';

// let scriptLoaded = false;
// let scriptElement = null;

// function TradingViewWidget({ range }) {
//   const container = useRef();

//   useEffect(() => {
//     if (!scriptLoaded) {
//       scriptElement = document.createElement("script");
//       scriptElement.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//       scriptElement.type = "text/javascript";
//       scriptElement.async = true;
//       container.current.innerHTML = ""; // Clear the container before appending the script
//       container.current.appendChild(scriptElement);

//       scriptLoaded = true;
//     } else {
//       const oldScriptElement = scriptElement;
//       const newScriptElement = document.createElement("script");
//       newScriptElement.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//       newScriptElement.type = "text/javascript";
//       newScriptElement.async = true;

//       // Ensure container is not null before manipulating
//       if (container.current) {
//         const jsonSettings = {
//           "autosize": true,
//           "symbol": "BITSTAMP:BTCUSD",
//           "timezone": "Etc/UTC",
//           "theme": "light",
//           "style": "3",
//           "locale": "en",
//           "enable_publishing": false,
//           "hide_top_toolbar": true,
//           "hide_legend": true,
//           "range": range,
//           "save_image": false,
//           "calendar": false,
//           "hide_volume": true,
//           "support_host": "https://www.tradingview.com"
//         };
        
//         // Set innerHTML with JSON settings
//         newScriptElement.innerHTML = JSON.stringify(jsonSettings);

//         // Clear container before adding the new script
//         container.current.innerHTML = "";
//         container.current.appendChild(newScriptElement);
//         scriptElement = newScriptElement;
//       }
//     }
//   }, [range]);

//   return (
//     <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
//       <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);
