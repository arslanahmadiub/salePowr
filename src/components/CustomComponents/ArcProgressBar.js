import React from 'react'
import Styled from "styled-components"

const SVG = Styled.svg`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 100;
`
const Circle = Styled.circle`
    margin: auto;
    width: 100%;
    heigth: 100%;
    fill: none;
    stroke: #5A36CC;
    stroke-width:10;
    stroke-linecap: round;
    transform: translate(15px, 15px);
    stroke-dasharray: ${props => props.percent ? `${(314 * props.percent / 100)} ${(314 * (100 - props.percent) / 100)}` : 314};
    stroke-dashoffset: 157;
    `
const Circle1 = Styled.circle`
    margin: auto;
    width: 100%;
    heigth: 100%;
    fill: none;
    stroke: #F5F8FD;
    stroke-width:10;
    stroke-linecap: round;
    transform: translate(15px, 15px);
    stroke-dasharray: 157 157;
    stroke-dashoffset: 157;
    `

const ArcProgressBar = props => {
    const percent = props.percent;
    return <SVG>
        <Circle1 cx="50" cy="50" r="50" />
        <Circle cx="50" cy="50" r="50" percent={percent} />
        <div></div>
    </SVG>
}

export default ArcProgressBar;