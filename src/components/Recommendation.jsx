/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState, React } from 'react'

//components
import RecommendCards from "./RecommendCards";

import theme from "../../theme";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



export default function Recommendation({trendingCoins}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChanged = (event) => {
        setCurrentIndex(event.item);
    };

    console.log(trendingCoins, "checking recommend")

    return (
        <div>
            <h4 css={heading}>You may also like</h4>

            <AliceCarousel
                items={trendingCoins.map((data, index) => (
                    <div>
                            <RecommendCards logo={data.item.small} symbol={data.item.symbol} change={"34%"} graph={data.item.data.sparkline} price={data.item.data.price}/>
                    </div>
                    
                ))}
                responsive={{
                    0: { items: 2 },
                    568: { items: 3 },
                    1024: { items: 5},
                }
                }
                // startIndex={currentIndex}
                // onSlideChanged={handleSlideChanged}
                disableDotsControls={true}
                renderPrevButton={() => (
                    <div css={previous_icon}>
                        <img src="/arrow.svg" css={arrow_style}/>
                        {/* <RightArrow
                            height={13}
                            width={13}
                            fill={"var(--icon-color)"}
                            style={{ marginRight: '-2px' }}
                        /> */}
                    </div>
                )}
                renderNextButton={() => (
                    <div css={next_icon}>
                        <img src="/arrow.svg" css={arrow_style}/>
                        {/* <RightArrow
                            height={13}
                            width={13}
                            fill={"var(--icon-color)"}
                            style={{ marginRight: '-2px' }}
                        /> */}
                    </div>
                )}
            />

<h4 css={heading}>Trending coins</h4>

<AliceCarousel
    items={trendingCoins.map((data, index) => (
        <div>
                <RecommendCards logo={data.item.small} symbol={data.item.symbol} change={"34%"} graph={data.item.data.sparkline} price={data.item.data.price}/>
        </div>
        
    ))}
    responsive={{
        0: { items: 2 },
        568: { items: 3 },
        1024: { items: 5},
    }
    }
    // startIndex={currentIndex}
    // onSlideChanged={handleSlideChanged}
    disableDotsControls={true}
    renderPrevButton={() => (
        <div css={previous_icon}>
            <img src="/arrow.svg" css={arrow_style}/>
            {/* <RightArrow
                height={13}
                width={13}
                fill={"var(--icon-color)"}
                style={{ marginRight: '-2px' }}
            /> */}
        </div>
    )}
    renderNextButton={() => (
        <div css={next_icon}>
            <img src="/arrow.svg" css={arrow_style}/>
            {/* <RightArrow
                height={13}
                width={13}
                fill={"var(--icon-color)"}
                style={{ marginRight: '-2px' }}
            /> */}
        </div>
    )}
/>

        </div>
    )
}

//css
const previous_icon = css`
    background-color: #FFFFFF;
    /* border: 1px solid var(--icon-color); */
    border-radius: 50%;
    width: 1.7rem;
    height: 1.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
   /* padding: 1rem; */
`;
const next_icon = css`
    /* border: 2px solid var(--icon-color); */
    background-color: #FFFFFF;
    border-radius: 50%;
    width: 1.7rem;
    height: 1.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    rotate: 180deg;
    /* padding: 1rem; */
`;
const arrow_style= css`
    width: 0.37rem;
    height: 0.6rem;
`
const heading= css`
    margin-bottom: 1.3rem;
    font-size: 1.5rem;
    font-weight:600;
    color: #202020;
`