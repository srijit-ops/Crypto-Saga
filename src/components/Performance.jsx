/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState, React } from 'react'

//components
import Pricechart from "./Pricechart";

import theme from "../../theme";

import Tabs from 'rc-tabs';
import 'rc-tabs/assets/index.css';

const callback = (key) => {
  console.log(key);
};
  
const items = [
  {
    key: '1',
    label: 'Google',
    children: (
      <div className="text-xl">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
      </div>
    ),
  },
  {
    key: '2',
    label: <p>Amazon</p>,
    children:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    disabled: true,
  },
  {
    key: '3',
    label: <p>Twitter</p>,
    children: (
      <div>
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply
        because it is pain..."
      </div>
    ),
  },
];

const tabStyle = css`
  .rc-tabs-tab {
    border: none;
    outline: none;
    margin-right: 20px;
    cursor: pointer;
    &.rc-tabs-tab-active {
      border-bottom: 2px solid ${theme.primary_color}; // Change to your desired color: ;
    }
  }
`;

export default function Performance() {
  return (
    <div>
      <Tabs
        tabBarPosition="bottom"
        items={items}
        defaultActiveKey="1"
        className="md:w-[70%] w-full mx-auto p-2 border-0"
        onChange={callback}
        style={{ color: 'black' }}
        forceRender={false} // Prevents rendering all tabs content at once
        css={tabStyle} // Apply custom tab styles
      />
    </div>
  );
}

